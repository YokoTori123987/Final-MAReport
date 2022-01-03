import React from 'react';
import {Link} from 'react-router-dom';

function Login2(){
    return(
        <>
         <section className="login_box_area section-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login_box_img">
                <div className="hover">
                  <h4>New to our website?</h4>
                  <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                  <a className="button button-account" href="register.html">Create an Account</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_form_inner">
                <h3>Log in to enter</h3>
                <form className="row login_form" action="#/" id="contactForm">
                  <div className="col-md-12 form-group">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'" />
                  </div>
                  <div className="col-md-12 form-group">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" />
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="creat_account">
                      <input type="checkbox" id="f-option2" name="selector" />
                      <label htmlFor="f-option2">Keep me logged in</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                  <Link to="/"><button type="submit" value="submit" className="button button-login w-100">Log In</button></Link>
                    <a href="#">Forgot Password?</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
export default Login2;