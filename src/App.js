import React, { useEffect,useState } from "react";
// import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard.jsx";

import "./App.css";

const API_URL="http://www.omdbapi.com?apikey=a5a45a89";

const App=()=>{
    const[searchItem,setSearchItem]=useState("");
    const[movies,setMovies]=useState([]);

    useEffect(()=>{
        searchMovies("Batman")
    },[]);

    const searchMovies=async (title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
        setMovies(data.Search);
    };
    return(
        <div className="app">
            <h1>MovieBeach</h1>
            <div className="searchBar">
                <input
                    value={searchItem}
                    placeholder="Search For Movies"
                    onChange={(e)=>setSearchItem(e.target.value)}
                />
                <img
                  src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
                  alt="search"
                  onClick={()=>searchMovies(searchItem)}
                />
            </div>
            {movies?.length>0?(
                <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            ):(
                <div className="empty">
                  <h2>Result not found</h2>
                </div>
            )}
        </div>
    );
};
export default App;