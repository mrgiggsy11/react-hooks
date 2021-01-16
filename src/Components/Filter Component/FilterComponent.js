import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'



function FilterComponent(props) {
    const [search,setSearch]=useState("");
    const seachValue=(e)=>{
        setSearch(e.target.value)
    }


    return (
        <React.Fragment>
            <form className="d-flex justify-content-end ">
                <div className="input-group-text bg-dark w-100 border-0" >
                    <input type="search" className="form-control mx-3 rounded-pill" value={search} onChange={(e)=>seachValue(e)}/>
                    <FontAwesomeIcon icon={faSearch} color="white" onClick={()=> {props.handleSearch(search.toLowerCase())}}/>
                </div>
            </form>
        </React.Fragment >
    )
}

export default FilterComponent;

