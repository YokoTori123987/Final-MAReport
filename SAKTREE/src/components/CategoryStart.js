import React from 'react';

function CategoryStart() {
    return(
        <>
        <section className="section-margin--small mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5">
              <div className="sidebar-categories">
                <div className="head">Browse Categories</div>
                <ul className="main-categories">
                  <li className="common-filter">
                    <form action="#">
                      <ul>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="men" name="brand" /><label htmlFor="men">Men<span> (3600)</span></label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="women" name="brand" /><label htmlFor="women">Women<span> (3600)</span></label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="accessories" name="brand" /><label htmlFor="accessories">Accessories<span> (3600)</span></label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="footwear" name="brand" /><label htmlFor="footwear">Footwear<span> (3600)</span></label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="bayItem" name="brand" /><label htmlFor="bayItem">Bay item<span> (3600)</span></label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="electronics" name="brand" /><label htmlFor="electronics">Electronics<span> (3600)</span></label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="food" name="brand" /><label htmlFor="food">Food<span> (3600)</span></label></li>
                      </ul>
                    </form>
                  </li>
                </ul>
              </div>
              <div className="sidebar-filter">
                <div className="top-filter-head">Product Filters</div>
                <div className="common-filter">
                  <div className="head">Brands</div>
                  <form action="#">
                    <ul>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="apple" name="brand" /><label htmlFor="apple">Apple<span>(29)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="asus" name="brand" /><label htmlFor="asus">Asus<span>(29)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="gionee" name="brand" /><label htmlFor="gionee">Gionee<span>(19)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="micromax" name="brand" /><label htmlFor="micromax">Micromax<span>(19)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="samsung" name="brand" /><label htmlFor="samsung">Samsung<span>(19)</span></label></li>
                    </ul>
                  </form>
                </div>
                <div className="common-filter">
                  <div className="head">Color</div>
                  <form action="#">
                    <ul>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="black" name="color" /><label htmlFor="black">Black<span>(29)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="balckleather" name="color" /><label htmlFor="balckleather">Black
                          Leather<span>(29)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="blackred" name="color" /><label htmlFor="blackred">Black
                          with red<span>(19)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="gold" name="color" /><label htmlFor="gold">Gold<span>(19)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="spacegrey" name="color" /><label htmlFor="spacegrey">Spacegrey<span>(19)</span></label></li>
                    </ul>
                  </form>
                </div>
                <div className="common-filter">
                  <div className="head">Price</div>
                  <div className="price-range-area">
                    <div id="price-range" />
                    <div className="value-wrapper d-flex">
                      <div className="price">Price:</div>
                      <span>$</span>
                      <div id="lower-value" />
                      <div className="to">to</div>
                      <span>$</span>
                      <div id="upper-value" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7">
              {/* Start Filter Bar */}
              <div className="filter-bar d-flex flex-wrap align-items-center">
                <div className="sorting">
                  <select>
                    <option value={1}>Default sorting</option>
                    <option value={1}>Default sorting</option>
                    <option value={1}>Default sorting</option>
                  </select>
                </div>
                <div className="sorting mr-auto">
                  <select>
                    <option value={1}>Show 12</option>
                    <option value={1}>Show 12</option>
                    <option value={1}>Show 12</option>
                  </select>
                </div>
                <div>
                  <div className="input-group filter-bar-search">
                    <input type="text" placeholder="Search" />
                    <div className="input-group-append">
                      <button type="button"><i className="ti-search" /></button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Filter Bar */}
              {/* Start Best Seller */}
              <section className="lattest-product-area pb-40 category-list">
                <div className="row">
                  <div className="col-md-6 col-lg-4">
                    <div className="card text-center card-product">
                      <div className="card-product__img">
                        <img className="card-img" src="img/product/product1.png" alt="" />
                        <ul className="card-product__imgOverlay">
                          <li><button><i className="ti-search" /></button></li>
                          <li><button><i className="ti-shopping-cart" /></button></li>
                          <li><button><i className="ti-heart" /></button></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <p>Plant</p>
                        <h4 className="card-product__title"><a href="#">Air purification trees</a></h4>
                        <p className="card-product__price">$150.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card text-center card-product">
                      <div className="card-product__img">
                        <img className="card-img" src="img/product/product2.png" alt="" />
                        <ul className="card-product__imgOverlay">
                          <li><button><i className="ti-search" /></button></li>
                          <li><button><i className="ti-shopping-cart" /></button></li>
                          <li><button><i className="ti-heart" /></button></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <p>Plant</p>
                        <h4 className="card-product__title"><a href="#">Air purification trees</a></h4>
                        <p className="card-product__price">$150.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card text-center card-product">
                      <div className="card-product__img">
                        <img className="card-img" src="img/product/product3.png" alt="" />
                        <ul className="card-product__imgOverlay">
                          <li><button><i className="ti-search" /></button></li>
                          <li><button><i className="ti-shopping-cart" /></button></li>
                          <li><button><i className="ti-heart" /></button></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <p>Plant</p>
                        <h4 className="card-product__title"><a href="#">Air purification trees</a></h4>
                        <p className="card-product__price">$150.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card text-center card-product">
                      <div className="card-product__img">
                        <img className="card-img" src="img/product/product4.png" alt="" />
                        <ul className="card-product__imgOverlay">
                          <li><button><i className="ti-search" /></button></li>
                          <li><button><i className="ti-shopping-cart" /></button></li>
                          <li><button><i className="ti-heart" /></button></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <p>Plant</p>
                        <h4 className="card-product__title"><a href="#">Air purification trees</a></h4>
                        <p className="card-product__price">$150.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card text-center card-product">
                      <div className="card-product__img">
                        <img className="card-img" src="img/product/product5.png" alt="" />
                        <ul className="card-product__imgOverlay">
                          <li><button><i className="ti-search" /></button></li>
                          <li><button><i className="ti-shopping-cart" /></button></li>
                          <li><button><i className="ti-heart" /></button></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <p>Plant</p>
                        <h4 className="card-product__title"><a href="#">Air purification trees</a></h4>
                        <p className="card-product__price">$150.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card text-center card-product">
                      <div className="card-product__img">
                        <img className="card-img" src="img/product/product6.png" alt="" />
                        <ul className="card-product__imgOverlay">
                          <li><button><i className="ti-search" /></button></li>
                          <li><button><i className="ti-shopping-cart" /></button></li>
                          <li><button><i className="ti-heart" /></button></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <p>Plant</p>
                        <h4 className="card-product__title"><a href="#">Air purification trees</a></h4>
                        <p className="card-product__price">$150.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card text-center card-product">
                      <div className="card-product__img">
                        <img className="card-img" src="img/product/product7.png" alt="" />
                        <ul className="card-product__imgOverlay">
                          <li><button><i className="ti-search" /></button></li>
                          <li><button><i className="ti-shopping-cart" /></button></li>
                          <li><button><i className="ti-heart" /></button></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <p>Plant</p>
                        <h4 className="card-product__title"><a href="#">Air purification trees</a></h4>
                        <p className="card-product__price">$150.00</p>
                      </div> 
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card text-center card-product">
                      <div className="card-product__img">
                        <img className="card-img" src="img/product/product8.png" alt="" />
                        <ul className="card-product__imgOverlay">
                          <li><button><i className="ti-search" /></button></li>
                          <li><button><i className="ti-shopping-cart" /></button></li>
                          <li><button><i className="ti-heart" /></button></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <p>Plant</p>
                        <h4 className="card-product__title"><a href="#">Air purification trees</a></h4>
                        <p className="card-product__price">$150.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card text-center card-product">
                      <div className="card-product__img">
                        <img className="card-img" src="img/product/product1.png" alt="" />
                        <ul className="card-product__imgOverlay">
                          <li><button><i className="ti-search" /></button></li>
                          <li><button><i className="ti-shopping-cart" /></button></li>
                          <li><button><i className="ti-heart" /></button></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <p>Plant</p>
                        <h4 className="card-product__title"><a href="#">Air purification trees</a></h4>
                        <p className="card-product__price">$150.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Best Seller */}
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
export default CategoryStart;