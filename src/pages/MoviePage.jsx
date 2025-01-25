import { useEffect, useState } from "react";
import axios from "axios";
import AppCard from "../components/AppCard";



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
            setReviews(resp.data.data); // Salviamo le recensioni nello stato
            console.log(resp.data.data);

        });
    };

    const movieSelectedButton = (id) => {
        const movie = movies.find((f) => f.id === id);
        setSelectedMovie(movie)
        getReviews(id);
    }



    return (
        <>
            <section className="container">
                <div>
                    <input
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        type="search" />

                    <button onClick={getMovies}>Cerca</button>
                </div>

                <div className="row">
                    <div className="col">
                        {/* colonna sinistra con elenco film */}
                        {movies.map((curMovie, id) =>
                            <div key={curMovie.id}>

                                <button onClick={() => movieSelectedButton(curMovie.id)}>{curMovie.title}</button>
                            </div>

                        )}

                    </div>
                    {/* colonna destra con film selezionato */}
                    <div className="col">

                        {selectedMovie ? (
                            <div>
                                <h2>{selectedMovie.title}</h2>
                                <div>{selectedMovie.genre}</div>
                                <div>{selectedMovie.director}</div>
                                <p><strong>Descrizione:</strong> {selectedMovie.abstract}</p>
                                
                            </div>
                        ) : (
                            <p>Seleziona un film per vedere i dettagli</p>
                        )}



                    </div>
                </div>
            </section>
        </>
    )
}

export default MoviePage;


{/* <AppCard movies={curMovie} /> */ }