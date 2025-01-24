import { useEffect, useState } from "react";
import axios from "axios";



function MoviePage () {
    const [movies, setMovies] = useState([]);
     useEffect(()=>{
         axios.get("http://localhost:3000").then((resp)=> {
             setMovies(resp.data.data)
         })
     })
return(
<>
<h1>sono MoviePage</h1>

</>
)
};

export default MoviePage;