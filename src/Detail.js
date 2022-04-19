import React from 'react';
import { useParams } from 'react-router-dom';



export default function Detail(props) {
  const urlParams = useParams();

    return (  
      <main>
      <div>
        {urlParams.product}
      </div> 
      </main>
           
    )
}