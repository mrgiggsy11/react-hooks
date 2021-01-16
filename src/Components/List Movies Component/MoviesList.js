import React, { useState } from 'react'
import './MoviesList.css'

import DetailsCard from '../Details Card/DetailsCard'
import MovieCard from '../Movie Card Component/MovieCard'


export default function MoviesList(props) {

    const [item,setItem]=useState(0)
    
    // show Details card
    const [showDetails, setShowDetails] = useState(false)
    const handleshowDetails = (id) => {
        setShowDetails(!showDetails)
        setItem(id-1)
    }
    const handleCloseDetails=()=>{
        setShowDetails(!showDetails)
    }
    


    return (
        <div className="d-flex justify-content-around ">
            <div className="movieslist-container" style={showDetails? {width:"80%"}:null} >
                {
                    props.movies.map((movie) => <MovieCard 
                        key={movie.id} 
                        movie={movie}
                        handleshowDetails={handleshowDetails}
                        handleDelete={props.handleDelete}
                    />)
                }
            </div>
            {showDetails? <DetailsCard  movie={props.movies[item]} 
                                        rate={props.rate}  
                                        handleCloseDetails={handleCloseDetails}/>:null}
        </div>
    )
}
