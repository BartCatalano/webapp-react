import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




function MoviePage() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    // creo usestate per la selezione del film da mostrare
    const [selectedMovie, setSelectedMovie] = useState(null)
    // creo usestate per prendere le recensioni
    // 


    const getMovies = () => {
        const params = {};
        if (search.length > 0) {
            params.search = search;
        }
        axios.get("http://localhost:3000").then((resp) => {
            setMovies(resp.data.data)
        });
    };

    useEffect(() => {
        getMovies()
    }, []);

    
    const movieSelectedButton = (id) => {
        const movie = movies.find((f) => f.id === id);
        setSelectedMovie(movie)
       
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
                                    <div className="titleCard"> <h2>{selectedMovie.title}</h2> <Link className="buttonDettails" to={`/details/${selectedMovie.id}`} >Dettagli</Link></div>
                                    <div className="imgContainer"> <img className="imgDettails" src={`http://localhost:3000/${selectedMovie.image}`} alt={selectedMovie.title} /> </div>
                                    <div className="sectionRow"><strong>Genere:</strong>  {selectedMovie.genre}</div>
                                    <div className="sectionRow"><strong>Regista: </strong>  {selectedMovie.director} </div>
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


