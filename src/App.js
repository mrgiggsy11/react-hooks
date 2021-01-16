import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFilter,faStar} from '@fortawesome/free-solid-svg-icons'


import './App.css';
import { moviesList } from './Components/Input.js'
import Filter from './Components/Filter Component/FilterComponent'
import MoviesList from './Components/List Movies Component/MoviesList'
import Modal from './Components/Add Movie Component/AddMovie';




function App(props) {



  const [movies, setMovies] = useState(moviesList)
  const [add, setAdd] = useState(() => { return false })
  const AddMovieDetail = () => {
    setAdd(!add)
  }
  // add Movie Details
  const handleSaveClick = (title, description, url,note) => {

    const newMovie =
    {
      id: movies.length + 1,
      title: title,
      description: description,
      posterUrl: url,
      note:note
    }

    setMovies([...moviesList, newMovie])
    title = "";
    description = "";
    url = "";
    setAdd(!add)

  }

  
  
  

  // MAJ NOTE
  const rate = (id,i,[stars, setStars],count) => {
    let x = stars.map((el, x) => (x <= i || el[i] === false) ? el = true : el = false);
    setStars(x);
    let newMovies = movies.map((movie, k) => id - 1 === k ? { ...movie, rate:movie.rate+i+1,note:((movie.note)+(movie.rate)+i+1)/(count+1)} : { ...movie })
    setMovies((prevMovies) => {
      return newMovies
    })
  }
  // Search Fonction 
  const handleSearch = (search) => {
    const SearchList = movies.filter((movie) => movie.title.includes(search))
    setMovies(SearchList)
  }
  // Delete item
  const handleDelete=(id)=>{
    console.log(id)
    const deleate =movies.filter((item,i)=> i!==id-1 )
    setMovies(deleate)
  }


  const check=(e)=>{
    const check=e.target.checked
    const id=Number(e.target.id)
    
    if(check){
      const filtredList= movies.filter((movie)=> id===Math.round(movie.note))
      setMovies(filtredList)
    }else{
      setMovies(moviesList)
    }
  }

  return (
    <div className="app d-flex justify-content-start align-items-center">
      <div className="card text-white bg-dark mt-5" style={{ width: "1500px" }}>
        <div className="card-header d-flex align-items-center justify-content-between">
          <div className="d-flex d-row">
            <button type="button"
              className="btn btn-outline-dark border-0"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={AddMovieDetail}>
              <FontAwesomeIcon className="" color="gray" icon={faPlus} />
            </button>
            <button className="btn border-0 dropdown-toggle"  id="headerDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <FontAwesomeIcon  color="gray" icon={faFilter} />
            </button>
            <div className="dropdown-menu bg-dark " aria-labelledby="headerDropdown">
              <div className="d-flex justify-content-center align-items-center my-3" >
                <input type="checkbox" id="1" onChange={(e)=>check(e)}/>&emsp;
                <FontAwesomeIcon color="yellow" icon={faStar} />
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
              <div className="d-flex justify-content-center align-items-center my-3" >
                <input type="checkbox" id="2" onChange={(e)=>check(e)}/>&emsp;
                <FontAwesomeIcon icon={faStar} color="yellow "/>
                <FontAwesomeIcon icon={faStar} color="yellow "/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
              <div className="d-flex justify-content-center align-items-center my-3" >
                <input type="checkbox" id="3" onChange={(e)=>check(e)}/>&emsp;
                <FontAwesomeIcon icon={faStar} color="yellow "/>
                <FontAwesomeIcon icon={faStar} color="yellow "/>
                <FontAwesomeIcon icon={faStar} color="yellow "/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
              <div className="d-flex justify-content-center align-items-center my-3" >
                <input type="checkbox" id="4" onChange={(e)=>check(e)}/>&emsp;
                <FontAwesomeIcon icon={faStar} color="yellow "/>
                <FontAwesomeIcon icon={faStar} color="yellow "/>
                <FontAwesomeIcon icon={faStar} color="yellow "/>
                <FontAwesomeIcon icon={faStar} color="yellow "/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
              <div className="d-flex justify-content-center align-items-center my-3" >
                <input type="checkbox" id="5" onChange={(e)=>check(e)}/>&emsp;
                <FontAwesomeIcon icon={faStar} color="yellow "/>
                <FontAwesomeIcon icon={faStar} color="yellow "/>
                <FontAwesomeIcon icon={faStar} color="yellow "/>
                <FontAwesomeIcon icon={faStar} color="yellow "/>
                <FontAwesomeIcon icon={faStar} color="yellow "/>
              </div>
            </div>
            {add ? <Modal add={add} handleSaveClick={handleSaveClick} /> : null}
          </div>
          <Filter handleSearch={handleSearch} />
        </div>
        <div className="card-body d-flex justify-content-start" >
          <MoviesList movies={movies} rate={rate} handleDelete={handleDelete}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
