import React, {useState} from 'react';
import "./style.scss";
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';


const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
      if(event.key === "Enter" && query.length > 0){
        navigate(`/search/${query}`)
      }
  }

  return (
    <div className="heroBanner">
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover.
              Explore Now.
            </span>
            <div className="searchInput">
              <input 
                  type="text"
                  placeholder='Search for a movie or a tv show....'
                  onChange={(e)=> setQuery(e.target.value)}
                  onKeyUp={searchQueryHandler}
               />
               <button>Seacrch</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroBanner;
