import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './DetailsCard.css'

const DetailsCard = (props) => {

    const [stars, setStars] = useState([false, false, false, false, false]);
    const [count, setCount] = useState(1);
    // conteur
    const handleCounteur = () => {
        setCount((prevCount) => {
            return prevCount + 1;
        });
    };

    const [show, setShow] = useState(false)
    const showAlert = () => {
        setShow(!show)
    }


    return (

        <div className="movie-details-container bg-dark w-25 my-4 mx-5 ">
            <img src={props.movie.posterUrl} className="card-img-top" alt="..." style={{ height: "65%" }} onClick={() => showAlert()} />
            <div className="card-body mt-2">
                <h5 className="card-title text-wrap text-center">{props.movie.title}</h5>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <small className="text-muted">
                    {stars.map((star, i) => (
                        <FontAwesomeIcon
                            key={i}
                            color={star ? 'yellow' : 'gray'}
                            size="lg"
                            icon={faStar}
                            onClick={() => {
                                handleCounteur()
                                props.rate(props.movie.id, i, [stars, setStars], count);
                            }}
                        />
                    ))}
                </small>
                <button type="button" className="btn btn-outline-secondary text-wrap" onClick={() => props.handleCloseDetails()}>close</button>
            </div>
            <div className={show ? "movie-details-description" : 'dismiss'} >
                <strong>Description: </strong>
                <br /> {props.movie.description}
            </div>
        </div>
    )
}
export default DetailsCard