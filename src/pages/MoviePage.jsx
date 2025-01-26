import { useEffect, useState } from "react";
import axios from "axios";




function MoviePage() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    // creo usestate per la selezione del film da mostrare
    const [selectedMovie, setSelectedMovie] = useState(null)
    // creo usestate per prendere le recensioni
    const [reviews, setReviews] = useState([]);


    const getMovies = () => {
        const params = {};
        if (search.length > 0) {
            params.search = search;
        }
        axios.get("http://localhost:3000", { params }).then((resp) => {
            setMovies(resp.data.data)
        });
    };

    useEffect(() => {
        getMovies()
    }, []);

    // Funzione per recuperare le recensioni di un film selezionato
    const getReviews = (id) => {
        axios.get(`http://localhost:3000/${id}`).then((resp) => {
            setReviews(resp.data.data.review); // Salviamo le recensioni nello stato
           console.log(resp.data.data.review);
           

        });
    };

    const movieSelectedButton = (id) => {
        const movie = movies.find((f) => f.id === id);
        setSelectedMovie(movie)
        getReviews(id);
    }



    return (
        <>

            <div className="searchZone">
                <div>
                    <strong>Cerca il Tuo film Preferito!</strong></div>
                <div>
                    <input
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        type="search" />

                    <button onClick={getMovies}>Cerca</button>
                </div></div>

            {/* Elenco film zone */}

            <section className="">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="mMovies">Elenco Film Disponibili</h2>
                            {/* colonna sinistra con elenco film */}
                            {movies.map((curMovie, id) =>
                                <div key={curMovie.id}>

                                    <button className="buttonFilm" onClick={() => movieSelectedButton(curMovie.id)}> &#10094; {curMovie.title} &#10095; </button>
                                </div>

                            )}

                        </div>
                        {/* colonna destra con film selezionato */}
                        <div className="col">

                            {selectedMovie ? (
                                <div>
                                    <div className="titleCard"> <h2>{selectedMovie.title}</h2></div>
                                    <div className="imgContainer"> <img className="imgDettails" src={`http://localhost:3000/${selectedMovie.image}`} alt={selectedMovie.title} /> </div>
                                    <div className="sectionRow"><strong>Genere:</strong>  {selectedMovie.genre}</div>
                                    <div className="sectionRow"><strong>Regista: </strong>  {selectedMovie.director}</div>
                                    <div className="sectionRow">
                                        <p><strong>Descrizione:</strong> {selectedMovie.abstract}</p></div>

                                </div>
                            ) : (
                                <div className="noSelected">

                                </div>
                            )}



                        </div>
                    </div></div>
    {/* recensioni con hoover */}

    <section className="reviewSection">
        <div className="rowReview mt20">
            {reviews.map((curReview, id)=>
            <div className="colReview" key={id}>
            <div className="titleRev">  </div>
            
            <div className="textRev"> Recensione fatta da:  {curReview.name}
                <div className="pdt15" >  Commento:  {curReview.text}</div> 
                <div className="pdt15"> voto: {curReview.vote}</div></div>
            
            </div>


            )}
        </div>
    </section>

            </section>
        </>
    )
}

export default MoviePage;


{/* <AppCard movies={curMovie} /> */ }