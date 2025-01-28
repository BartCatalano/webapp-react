import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
    // Stato per le immagini
    const [movies, setMovies] = useState([]);
    // Stato per l'indice dell'immagine corrente
    const [currentIndex, setCurrentIndex] = useState(0);

    

    useEffect(() => {
        // Funzione per ottenere le immagini
        const getImage = () => {
            axios.get('http://localhost:3000')
                .then((resp) => {
                    if (resp.data && resp.data.data) {
                        setMovies(resp.data.data);
                    }
                })
        };

        getImage();
    }, []);

    // Funzione per passare all'immagine precedente
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? movies.length - 1 : prevIndex - 1
        );
    };

    // Funzione per passare all'immagine successiva
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === movies.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Verifica che le immagini siano state caricate
    if (movies.length === 0) {
        return <div>Caricamento...</div>;
    }

    //    soluzione trovata su internet farsi spiegare 
    const currentMovie = movies[currentIndex];
    if (!currentMovie || !currentMovie.image) {
        return <div>Immagine non disponibile</div>;
    }

    return (
        <>
<div className='homePageLayout'>
    <h1 className='titleHome'>I Titoli Del Momento!</h1>

            <div className='homeSlaider' >
                <button onClick={prevSlide}>
                    &#10094;
                </button>
                <img

                    src={`http://localhost:3000/${currentMovie.image}`} // Concatenazione dell'URL base con il nome del file
                    alt={currentMovie.title} // Usa title come alt text
                />

                <button onClick={nextSlide}>
                    &#10095;
                </button>
            </div></div>
        </>
    );
}

export default HomePage;