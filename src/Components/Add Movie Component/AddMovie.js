import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const AddMovie = (props) => {
  const [stars, setStars] = useState([false, false, false, false, false]);
  
  
  const detailsMovie =
  {
    title: "",
    description: "",
    url: "",
    
    

  }
  const [details, setDetails] = useState(detailsMovie);

  // pull value from form 
  const handleChange = (event) => {
    console.log(event.target)
    setDetails({ ...details, [event.target.name]: event.target.value })
  }
  
  const rate=(i)=>{
    setDetails({ ...details,note:i+1})
  }
  


  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-dark text-muted">
          <div className="modal-header border-0">
            <h5 className="modal-title" id="exampleModalLabel">Movie Details</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="Title" className="col-form-label">Title:</label>
                <input type="text" name="title"
                  className="form-control"
                  id="Title"
                  value={details.title}
                  onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="Discription" className="col-form-label">Description</label>
                <input type="textarea" name="description"
                  className="form-control"
                  id="Discription"
                  value={details.description}
                  onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">posterUrl:</label>
                <input type="text" name="url"
                  className="form-control rounded"
                  id="exampleFormControlFile1"
                  value={details.url}
                  onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Rate :</label>&emsp;
                {stars.map((star, i) => (
                  <FontAwesomeIcon
                    key={i}
                    color={i<details.note? 'yellow' : 'gray'}
                    size="lg"
                    icon={faStar}
                    onClick={(e) => rate(i,e)}
                  />
                ))}
              </div>

            </form>
          </div>
          <div className="modal-footer border-0">
            <button type="submit" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-Success text-white "
              onClick={() => props.handleSaveClick(details.title, details.description, details.url,details.note)} data-dismiss={props.add ? "modal" : null}>
              Save</button>
          </div>
        </div>
      </div>
    </div>

  );
};
export default AddMovie;
