import { useEffect, useState } from "react";
import axios from "axios";
import AppCard from "../components/AppCart";



function MoviePage () {
    const [movies, setMovies] = useState([]);




     useEffect(()=>{
         axios.get("http://localhost:3000").then((resp)=> {
             setMovies(resp.data.data)
             console.log(resp.data.data);
             
             
             
         });
     },[]);
     
return(
<>
{movies.map((curMovie, id) =>
<div key={curMovie.id}>
    {curMovie.title}
    <AppCard />
</div>

)}

</>
)
};

export default MoviePage;