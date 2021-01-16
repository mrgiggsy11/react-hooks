import React from'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faTimes } from '@fortawesome/free-solid-svg-icons';
import './MoviesCards.css';

function MovieCard(props) {
  const tab = [1, 2, 3, 4, 5]
  

  return (
    <div className="movie-container mr-3 my-1">
      <div className="movie-container ">
      <FontAwesomeIcon className="mb-3 mt-5 fa-lg" icon={faTimes} color="red" onClick={()=>props.handleDelete(props.movie.id)}/>        
        <img
          src={props.movie.posterUrl}
          className="card-img-top"
          alt="..."
          style={{ height: '65%' }}
        

        />
        <div className="card-body">
          <h5
            className="card-title text-wrap text-center"
            style={{ fontSize: '17px' }}
          >
            {props.movie.title.toUpperCase()}
          </h5>
        </div>
        <div
          className="card-footer d-flex justify-content-between align-items-center"
          style={{ height: '60px' }}
        >
          <small className="text-muted">
            {tab.map((star, i) => (
              <FontAwesomeIcon
                key={i}
                color={star <= Math.round(props.movie.note) ? 'yellow' : 'lightGrey'}
                size="lg"
                icon={faStar}
              />
            ))}
          </small>
          <button type="button" className="btn btn-outline-secondary text-wrap" onClick={() => props.handleshowDetails(props.movie.id)}>Details</button>
        </div>
      </div>

      
    </div>
  );
}
export default MovieCard;
