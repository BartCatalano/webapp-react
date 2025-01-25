function AppCard ({movies}) {
 

    return (
        <>
<div>{movies.title}</div>
<div>{movies.genre}</div>
<div>{movies.director}</div>
<div>{movies.release_year}</div>

        </>
    )
}

export default AppCard;