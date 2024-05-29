import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Singleproduct() {
    const [apidata, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://diit.heyhoshii.com/zoho/${id}`);
                const data = await response.json();
                setData(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();    
    }, [id]);

    if (!apidata) {
        return <div>Loading...</div>;
    }

    if (!apidata || !apidata) {
        return <div>No product data available</div>;
    }

    const product = apidata;

    return (
        <div>
            
<div className='col-xl-6 col-md-12' style={{paddingBottom:'20px'}}>
    <p className='h2 ms-5'>
        {product.name}
    </p>
</div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-12 item">
                        <div className='product_img'>
                            <img className='itme_img' src={'https://furnitures.zohocommerce.in/'+product.images[0].url+'/700x700'} alt='Product' />
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12 item" style={{ backgroundColor: '#f1f2ed' }}>
                        <div className='container'>
                            <div className='col-xl-12 bottum_line'>
                                <div style={{ width: '100%', height: '100%' }}>
                                    <h2>{product.name}</h2>
                                </div>
                            </div>
                            <div className='col-xl-12 bottum_line'>
                            <p className='h3 P_productpage'>
                                    {product.variants[0].images[0].alternate_text}
                                </p>
                                <p className='h3 '>
                                    MRP:{product.selling_price}$
                                </p>
                            </div>
                            <div className='col-xl-12 bottum_line'>
                                <i className="icone_fa fa fa-facebook-official fa-2x" aria-hidden="true" style={{ color: 'blue' }}></i>
                                <i className="icone_fa fa fa-whatsapp fa-2x" aria-hidden="true" style={{ color: 'green' }}></i>
                                <i className="icone_fa fa fa-twitter fa-2x" aria-hidden="true" style={{ color: 'blue' }}></i>
                            </div>
                            <div className='col-xl-12 bottum_line'>
                                <div className='col-md-6 fs-5' style={{ backgroundColor: '#364253', color: 'white', borderRadius: '5px' }}>
                                    <button className='btn Cardbtn fs-5'>Add to Cart </button>
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className='container'>
                    <div className='row'>
                        <div className="col-xl-12 rating_box ">
                            <ul className="list-group">
                                <li className="list-group"><h4>Rating</h4></li>
                                <li className="list-group"><h3>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </h3></li>
                                <li className="list-group">0.0/5 (No Rating)</li>
                                <li className="list-group"><h4>Reviews</h4></li>
                                <li className="list-group">There aren't any reviews to display.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Singleproduct;
