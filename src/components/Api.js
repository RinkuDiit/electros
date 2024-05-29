import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Api() {
  const [apidata, setData] = useState([]);

  useEffect(() => { 
   try {
    fetch('https://diit.heyhoshii.com/zoho') 
    .then(response => response.json())
    .then(data => setData(data));
    console.log(apidata)
   } catch (error) {
      console.log(error);
   }
  }, []);

  

  return (
    <div>
      {apidata.map(item => (
                     
            <Link to={'/singleProduct/' + item.product_id}> <div className='card' key={item.product_id}>
        <div style={{width:'80%', height:'50%'}}><img style={{width:'100%' , height:'100%'}} src={"https://furnitures.zohocommerce.in/product-images/700x700+%283%29.jpg/"+item.documents[0].document_id+"/400x400"} alt={item.title} /></div> 
          <h6>{item.alternate_text}</h6>          
          <p>Price: {item.selling_price}</p>
          <h3>{}</h3>
          <button className='btn btn-pramary'>Add to Card</button>
          
        </div></Link>
         
      ))}



    </div>
  );
}

export default Api;