import React from 'react';

function Singleproduct(){
    return(
        <>
        <div className="product_image_area">
        <div className="container">
          <div className="row s_product_inner">
            <div className="col-lg-6">
              <div className="owl-carousel owl-theme s_Product_carousel">
                <div className="single-prd-item">
                  <img className="img-fluid" src="img/category/s-p1.jpg" alt="" />
                </div>
                 <div class="single-prd-item">
							<img class="img-fluid" src="img/category/s-p1.jpg" alt=""/>
						</div>
						<div class="single-prd-item">
							<img class="img-fluid" src="img/category/s-p1.jpg" alt=""/>
						</div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="s_product_text">
                <h3>Rose tree</h3>
                <h2>$19.99</h2>
                <ul className="list">
                  <li><a className="active" href="#"><span>Category</span> : Household</a></li>
                  <li><a href="#"><span>Availibility</span> : In Stock</a></li>
                </ul>
                <p>Mean "I love you." Love and desire. It is a flower of Cupid, 
                  Cupid and Eros, which brings luck bringing love to a woman or a man who has been given a pink color. 
                  "I will love and take care of you forever" love is completely happy.</p>
                <div className="product_count">
                  <label htmlFor="qty">Quantity:</label>
                  <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" className="increase items-count" type="button"><i className="ti-angle-left" /></button>
                  <input type="text" name="qty" id="sst" size={2} maxLength={12} defaultValue={1} title="Quantity:" className="input-text qty" />
                  <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) && sst > 0 ) result.value--;return false;" className="reduced items-count" type="button"><i className="ti-angle-right" /></button>
                  <a className="button primary-btn" href="#">Add to Cart</a>               
                </div>
                <div className="card_area d-flex align-items-center">
                  <a className="icon_btn" href="#"><i className="lnr lnr lnr-diamond" /></a>
                  <a className="icon_btn" href="#"><i className="lnr lnr lnr-heart" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Singleproduct;