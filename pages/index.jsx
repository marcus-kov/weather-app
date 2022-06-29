import axios from "axios";

import React, { useEffect, useState } from 'react';

const API_KEY = '5GKS0Ne14rottgel68GIWyIgZptfpoNG';

const Home = () => {
  const options = {
    method: 'GET',
    url: 'https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=5GKS0Ne14rottgel68GIWyIgZptfpoNG&q=Belgrade',
  };
  



  const [citySearchParam, setCitySearchParam] = useState('');
  const [autoCompleteList, setAutoCompleteList] = useState([]);


  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${citySearchParam}`,
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setAutoCompleteList(response.data);
    }).catch(function (error) {
      console.error(error);
    });

  
  }, [citySearchParam])
  

  return (
    <div className="py-12 bg-white">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Weather Hero</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">A better way to predict weather</p>
        
          {/* search bar*/}

          <div className="m-3">
            <form className="input-group relative flex flex-wrap items-stretch w-full mb-4">
             <input type="search" className="form-control text-gray-700 bg-white border border-solid border-gray-300 rounded px-3" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" onChange={(e) => setCitySearchParam(e.target.value)} />
             <button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>

  
            </button>
            

           
            </form>
             {/** search list */}
    
             
          </div>

          <ul>
              
              {autoCompleteList.map((item) => {

                return (<li>{item.LocalizedName}</li>)
              })}

              </ul>
          
        </div>
    
        
              
       
      </header>

      <div className="mt-10">
        
        </div>
    </div>
    

  )
}

export default Home;