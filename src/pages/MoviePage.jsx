import { useEffect, useState } from "react";
import axios from "axios";
import AppCard from "../components/AppCard";



function MoviePage() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const getMovies = () => {
         const params = {};
         if (search.length > 0) {
            params.search = search;
         }
        axios.get("http://localhost:3000", {params}).then((resp) => {
            setMovies(resp.data.data)
             console.log(resp.data.data);
            

        });
    };
     
    useEffect(() =>{
        getMovies()
       
        
    },[]);





return (
    <>
        <section className="container">
             <div>
                <input 
                value={search}
                onChange={(event)=> setSearch(event.target.value)}
                type="search" />

                <button onClick={getMovies}>Cerca</button>
            </div> 


            {movies.map((curMovie, id) =>
                <div key={curMovie.id}>

                    <AppCard movies={curMovie} />
                </div>

            )}
        </section>
    </>
) }

export default MoviePage;