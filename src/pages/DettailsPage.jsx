import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




function DettailsPage() {


    const { id } = useParams();

    const [movieDetails, setMovieDetails] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/${id}`).then((resp) => {
            setMovieDetails(resp.data.data); // Salva i dettagli del film nello stato
            setReviews(resp.data.data.review);
        });
    }, [id]); // La useEffect si attiva quando l'ID cambia


    return (
        <>
            <section className="rowReview">
                <div className="colReview">
                    {movieDetails ? (
                        <div>
                            <div className="titleCard"> <h2>{movieDetails.title}</h2> </div>
                            <div className="imgContainer"> <img className="imgDettails" src={`http://localhost:3000/${movieDetails.image}`} alt={movieDetails.title} /> </div>
                            <div className="sectionRow"><strong>Genere:</strong>  {movieDetails.genre}</div>
                            <div className="sectionRow"><strong>Regista: </strong>  {movieDetails.director} </div>
                            <div className="sectionRow">
                                <p><strong>Descrizione:</strong> {movieDetails.abstract}</p></div>



                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>





                <section className="colreview">
                    <section className="form">
                        <p>qui inserisco form</p>
                    </section>
                </section> 
                 </section>


                {/* sezione review */}
                <section className="reviewBotRow">
                    
                        {reviews.map((curReview, id) =>
                            <div className="reviewCard" key={id}>
                                <div className="titleRev">  </div>
                                <div className="textRev"> Recensione fatta da:  {curReview.name}
                                    <div className="pdt15" >  Commento:  {curReview.text}</div>
                                    <div className="pdt15"> voto: {curReview.vote}</div></div>
                            </div>
                        )}
                    
                </section>
          
        </>
    )
}


export default DettailsPage;