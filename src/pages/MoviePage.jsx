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

                                    <button className="buttonFilm" onClick={() => movieSelectedButton(curMovie.id)}>{curMovie.title}</button>
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
            </section>
        </>
    )
}

export default MoviePage;


{/* <AppCard movies={curMovie} /> */ }