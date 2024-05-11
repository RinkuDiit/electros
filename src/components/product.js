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
            <p className='h4'>The soft headphone cushion makes the whole experience comfortable. The experience of listening is changed by the use of this beauty. It is light and compact with a beautiful look and feel to the whole headphone.</p>
          </div>
          <div className='col-xl-12 bottum_line'>
          <i class="fa fa-facebook-official" aria-hidden="true"></i></div>
          <div className='col-xl-12 bottum_line'>
            <div className=' col-md-6 fs-5' style={{ backgroundColor:'#364253',color:'white',borderRadius:'5px'}}><button className='btn Cardbtn fs-5'>Add to Card </button><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
          </div>
        </div>
    </div>
    
  </div>
</div>
</div>


  )
}

export default Product