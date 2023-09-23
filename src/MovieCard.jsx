import React from "react";

// movie card Format
// Year
// Image
// Movie Type means tv series or anime etc
// Movie Name

const MovieCard=({movie:{imdbID,Type,Title,Year,Poster}})=>{
    return(
        <div className="card" key={imdbID}>
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            </div>
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
}
export default MovieCard;