import React from 'react'
// import slider11 from './img/zpstock-image-933.jpg';
function Slider() {
  return (
    <div>
<div className='slider'>
    
    {/* -----------------------slider start-------------------------- */}


    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="my-slider-img" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/zpstock-image-933.jpg)`}}>
  
    <div className='container'>
    <h1 className='great-hed'>Great products provide real  <br></br>solutions</h1>
    <p className='Frames-pe'>Frames UI Kit is a huge pack of high fidelity assets to create prototypes and <br></br> wireframes with ease. Consisting from more than 1k elements.</p>
    <button type='' className='shopnopw-btn'>Shop Now !</button>

    </div>
   

    </div>
    </div>
    <div class="carousel-item">
    <div className="my-slider-img" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/zpstock-image-934.jpg)`}}>
  <div className='container'>
  <h1 className='great-hed'>Great products provide real  <br></br>solutions</h1>
    <p className='Frames-pe'>For every kind of hearing comfort as you please.</p>
  </div>
  
    </div>
    </div>
    <div class="carousel-item">
    <div className="my-slider-img" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/zpstock-image-935.jpg)`}}>
    <h1 className='music-heding'>Music that will soothe your senses</h1>
    <p className='Simply-per'>Simply serene like ocean lull</p>
    <p className='Need-modern '>Need a modern & stylish, innovative way to hear the music that you love, enjoy your hobbies with high quality gadgets</p>
    <p className='Need-modern-01 '>because it's our passion.</p>
  <div style={{textAlign:'center'}}>
  <button  type='button' className='reed-more'>Read More</button>
  </div>
    </div>
    </div>
    <div class="carousel-item">
    <div className="my-slider-img" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/zpstock-image-936.jpg)`}}>
   
    <p className='Simply-per'>Listen to music that touches your soul</p>
    <p className='Need-modern '>Music can reach the deepest crevices of your heart and makes you feel the pain oozing out of every blood vessel while listen to songs. Bleed your heart and eyes out</p>
    <p className='Need-modern-01 '>with surreal music.</p>
  <div style={{textAlign:'center'}}>
  <button  type='button' className='reed-more'>Read More</button>
  </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



    {/* ------------------------slider end---------------------------- */}
 
    </div>
    </div>
    </div>
    
  )
}

export default Slider