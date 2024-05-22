import React, { useState, useEffect } from 'react';

function Api() {
  const [apidata, setData] = useState([]);
  const urlimg = "https://sitebuilder-60029446830.zohositescontent.in/product-images/document-id/1864251000000031018/image-size/large"

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
        <div className='card' key={item.id}>
          <div style={{width:'80%' , height:'50%'}}><img style={{width:'100%' , height:'100%'}} src={"https://alwar.zohocommerce.in/product-images/633ffb7011ab7a6fc6075a09-lige-mens-watches-stainless-steel.jpg/"+item.documents[0].document_id+"/400x400"} alt={item.title} /></div> 
          <h6>{item.alternate_text}</h6>          
          <p>Price: {item.selling_price}</p>
          <h3>{}</h3>
          <button className='btn btn-pramary'>Add to Card</button>
          
        </div>
      ))}



    </div>
  );
}

export default Api;