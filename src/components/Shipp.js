import React from 'react';
import './Shiping.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faClock, faPersonWalkingArrowLoopLeft, faLock } from '@fortawesome/free-solid-svg-icons';
// import headphone3img1 from '../components/img/zpstock-image-937.jpg';

function Shipp() {
  return (
    <div>
      
      <div className='container'>
        <div className="row spngsecurepayment">
          <div className="col-xl-3 col-md-6 col-sm-12 fastshping">
            <div className='iconsshipreturnboxesdata'>
              <div className='iconshipbox'><FontAwesomeIcon icon={faCar} className='iconshipboxicon' /></div>
              <h5>Free Shipping</h5>
              <p>Almost before we knew it, we had left the ground. A shining crescent</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 fastshping">
            <div className='iconsshipreturnboxesdata'>
              <div className='iconshipbox'><FontAwesomeIcon icon={faClock} className='iconshipboxicon'/></div>
              <h5>Support 24/7</h5>
              <p>Almost before we knew it, we had left the ground. A shining crescent</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 fastshping">
            <div className='iconsshipreturnboxesdata'>
              <div className='iconshipbox'><FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} className='iconshipboxicon'/></div>
              <h5>30 days return</h5>
              <p>Almost before we knew it, we had left the ground. A shining crescent</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 fastshping">
            <div className='iconsshipreturnboxesdata'>
              <div className='iconshipbox'><FontAwesomeIcon icon={faLock} className='iconshipboxicon'/></div>
              <h5>100% Secure Payment</h5>
              <p>Almost before we knew it, we had left the ground. A shining crescent</p>
            </div>        
          </div>
        </div>
      </div>
      <div style={{backgroundColor:'#f7f8fa', height:'auto', width:'100%'}}>
      <div className='container'>
      <div className='row buds3cards'>
        <div className='buds3cardsh2'></div>
        <h2>What's New at Gadgets Zone</h2>
        <p className='buds3cardsbigp'>You can edit text on your website by double clicking on a text box on your website. Alternatively, when you select a<br/> text box a settings menu will appear. your website by double clicking on a text box on your website.</p>
        <div className='col-xl-4 col-md-12 col-sm-12 buds3cardsboxew'>         
        <img src={process.env.PUBLIC_URL+'/img/zpstock-image-937.jpg'} alt='headphone3img1937'/>
                <h3>Don't Lie to your Spouse Anymore</h3>
                <p className='buds3cardsboxewp'>You can edit text on your website by double clicking on a text box on your website.</p>
                <button type='button' className='btn btn-outline-warning'>Shop Now</button>         
        </div>   
        <div className='col-xl-4 col-md-12 col-sm-12 buds3cardsboxew'>         
        <img src={process.env.PUBLIC_URL+'/img/zpstock-image-938.jpg'} alt='headphone3img1937'/>
                <h3>Uber Popular Wireless Earbuds</h3>
                <p className='buds3cardsboxewp'>You can edit text on your website by double clicking on a text box on your website.</p>
                <button type='button' className='btn btn-outline-warning'>Shop Now</button>         
        </div>
        <div className='col-xl-4 col-md-12 col-sm-12 buds3cardsboxew '>         
        <img src={process.env.PUBLIC_URL+'/img/zpstock-image-939.jpg'} alt='headphone3img1937'/>
                <h3>Limited Stocks Back on Popular Demand</h3>
                <p className='buds3cardsboxewp'>You can edit text on your website by double clicking on a text box on your website.</p>
                <button type='button' className='btn btn-outline-warning'>Shop Now</button>         
        </div>
        
        
       
      </div>
      </div>
      </div>
    </div>
  );
}

export default Shipp;
