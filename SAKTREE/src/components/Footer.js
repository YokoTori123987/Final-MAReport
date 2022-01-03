import React from 'react';

function Footer(){
    return(
            <> 
            {/*================ Start footer Area  =================*/}	
                <footer className="footer">
                <div className="footer-area">
                    <div className="container">
                    <div className="row section_gap">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget tp_widgets">
                            <h4 className="footer_title large_title">Our Mission</h4>
                            <p>
                            So seed seed green that winged cattle in. Gathering thing made fly you're no 
                            divided deep moved us lan Gathering thing us land years living.
                            </p>
                            <p>
                            So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved 
                            </p>
                        </div>
                        </div>
                        <div className="offset-lg-1 col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget tp_widgets">
                            <h4 className="footer_title">Contact Us</h4>
                            <div className="ml-40">
                            <p className="sm-head">
                                <span className="fa fa-location-arrow" />
                                Head Office
                            </p>
                            <p>123, Main Street, Your City</p>
                            <p className="sm-head">
                                <span className="fa fa-phone" />
                                Phone Number
                            </p>
                            <p>
                                +123 456 7890 <br />
                                +123 456 7890
                            </p>
                            <p className="sm-head">
                                <span className="fa fa-envelope" />
                                Email
                            </p>
                            <p>
                                free@infoexample.com <br />
                                www.infoexample.com
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                    <div className="row d-flex">
                        <p className="col-lg-12 footer-text text-center">
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                    </div>
                    </div>
                </div>
                </footer>
                {/*================ End footer Area  =================*/}
            </>
    )
}
export default Footer;