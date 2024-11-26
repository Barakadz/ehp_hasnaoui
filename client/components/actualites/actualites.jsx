import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
  

const Actualites=()=>{
	const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://ehp-hasnaoui.com/api/act/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
	   
  }, []);
   // Function to get the first 100 characters of the HTML content
   const truncateHtml = (html, maxLength) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.innerText.slice(0, maxLength);
  };
    return(
        <>
	<section class="blog section" id="blog">
			<div class="container">
				<div class="row">
         {data.map((item, index) => (
          <div class="col-lg-4 col-md-6 col-12"key={index}>
					
		  <div class="single-news wow fadeIn" data-wow-delay="0.25s">
			  <div class="news-head">
				  <img src={`https://ehp-hasnaoui.com/images_act/${item.image}`} alt="#"/>
			  </div>
			  <div class="news-body">
				  <div class="news-content">
					  <div class="date"> { item.date}</div>
					  <h2><a  > { item.titre}</a></h2>
 					 <p 
              className="text" 
              style={{color:'#9499A2'}} 
              dangerouslySetInnerHTML={{ 
                __html: truncateHtml(item.description, 170)+'...'
              }}
            />

						<a  href={`/actdetail?id=${item.id}`}  class="buttonn">
						  
						  <p>Lire la suite</p>
						  <svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="4"
						  >
							<path
							  stroke-linecap="round"
							  stroke-linejoin="round"
							  d="M14 5l7 7m0 0l-7 7m7-7H3"
							></path>
						  </svg>
						  
					  </a> 
						
				  </div>
			  </div>
		  </div>
		  
	  </div>
        ))}
 					
					 
					 
				</div>
			</div>
		</section>
        </>
    )
}

export default Actualites;