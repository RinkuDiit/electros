import React from 'react'



function Product() {
  return (
    <div>
        <div className="row row1">
          <div className="col-xl-12">
            <p className='h4' style={{margin: '3% 8%', color: '#eb984e'}}>Beatle Bands</p>
          </div>
        </div>

        <div className="container">
  <div className="row">
    <div className="col-xl-6 col-md-12 item ">
      <div className='product_img'><img className='itme_img' src='https://gadgetszone-demo.zohocommerce.com/product-images/700x700-05.jpg/2379410000000072470/700x700' />
</div>
    </div>
    <div className="col-xl-6 col-md-12 item "style={{backgroundColor:'#f1f2ed'}}>
        <div className='container'>
          <div className='col-xl-12 bottum_line'>
            <div style={{width:'100%', height:'100%'}}><h2>Beatle Bands</h2></div>
          </div>
          <div className='col-xl-12 bottum_line'>
            <p className='h2'>$189.00</p>
            <p className='h4 P_productpage'>The soft headphone cushion makes the whole experience comfortable. The experience of listening is changed by the use of this beauty. It is light and compact with a beautiful look and feel to the whole headphone.</p>
          </div>
          <div className='col-xl-12 bottum_line'>
          <i className="icone_fa fa fa-facebook-official fa-2x" aria-hidden="true" style={{color:'blue'}}></i>
          <i className=" icone_fa fa fa-whatsapp fa-2x " aria-hidden="true" style={{color:'green'}}></i>
          <i className="icone_fa fa fa-twitter fa-2x" aria-hidden="true" style={{color:'blue'}}></i>
          </div>
          <div className='col-xl-12 bottum_line'>
            
            <div className=' col-md-6 fs-5' style={{ backgroundColor:'#364253',color:'white',borderRadius:'5px'}}><button className='btn Cardbtn fs-5'>Add to Card </button><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
          </div>
        </div>
    </div>

    </div>
    
  </div>

  <div style={{border:"solid 1px black"}} className="row ">
          <div className='container'>
             <div className='row'>
             <div className="col-xl-12">
          <ul class="list-group">
            <li class="list-group"><h4>Rating</h4></li>
            <li class="list-group"><h3><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"> </i></h3></li>
            <li class="list-group">0.0/5 (No Rating)</li>
            <li class="list-group"><h4>Reviews</h4></li>
            <li class="list-group">There aren't any reviews to display.</li>
          </ul>
        
          </div>
             </div>
          </div>
        </div>
</div>



  )
}

export default Product