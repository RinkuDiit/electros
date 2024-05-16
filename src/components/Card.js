import React from 'react'

function Card() {
  return (
    <div>
        <div class="container card_container">
  <div style={{border:'solid 1px '}} class="row">
    <div class="col-md-6 col-sm-12">
      Item
      <div class="col-md-12">
      <div>
        <img style={{width:'40%',height:'40%'}} src='https://gadgetszone-demo.zohocommerce.com/product-images/700x700-05.jpg/2379410000000072470/700x700' />
      </div>
    </div>
    </div>
    <div class="col-md-2 col-sm-12">
      Quantity

      <div class="col-md-12">
      <div className='additmemore'>
      <div  style={{width:'20%', float:'left' ,margin:'11px 0px'}} > <button className='btnadd'>-</button></div> 
       <div style={{width:'60%', float:'left', margin:'11px 0px'}}><p className='h6'>0</p></div>      
      <div  style={{width:'20%', float:'left' ,margin:'11px 0px'}} > <button className='btnadd'>+</button></div>
      </div>
    </div>
    </div>
    <div class="col-md-2 col-sm-12">
      Subtotal
      <div class="col-md-12">
      <p className='h5'>$220.00</p>
    </div>
    </div>
    <div class="col-md-2 col-sm-12">
      Remove

      <div class="col-md-12">
    <i class="fa fa-trash-o" aria-hidden="true"></i>
    </div>
    </div>
  </div>

  <div style={{border:'solid 1px '}} class="row">
    
  
    
    
  </div>
</div>
    </div>
  )
}

export default Card