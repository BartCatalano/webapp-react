import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




function DettailsPage() {


const { id } = useParams(); 

const [ movieDetails, setMovieDetails] = useState(null);
const [reviews, setReviews] = useState([]);

useEffect(() => {
    axios.get(`http://localhost:3000/${id}`).then((resp) => {
        setMovieDetails(resp.data.data); // Salva i dettagli del film nello stato
        setReviews(resp.data.data.review);
    });
}, [id]); // La useEffect si attiva quando l'ID cambia


    return (
        <> 
         <div>
            {movieDetails ? (
                <div>
                    <h2>{movieDetails.title}</h2>
                    <img src={`http://localhost:3000/${movieDetails.image}`} alt={movieDetails.title} />
                    <p>{movieDetails.abstract}</p>
                    <p><strong>Genere:</strong> {movieDetails.genre}</p>
                    <p><strong>Regista:</strong> {movieDetails.director}</p>
                    {/* Puoi aggiungere altre informazioni come le recensioni qui */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );

       
        


        {/* sezione review */}

          <section className="reviewSection">
                    <div className="rowReview mt20">
                        {reviews.map((curReview, id) =>
                            <div className="colReview" key={id}>
                                <div className="titleRev">  </div>

                                <div className="textRev"> Recensione fatta da:  {curReview.name}
                                    <div className="pdt15" >  Commento:  {curReview.text}</div>
                                    <div className="pdt15"> voto: {curReview.vote}</div></div>

                            </div>


                        )}
                    </div>
                </section> 
        
        </>
    )
}


export default DettailsPage;