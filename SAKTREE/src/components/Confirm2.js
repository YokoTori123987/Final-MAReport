import React from 'react';

function Confirm2(){
    return(
        <>
        <section className="order_details section-margin--small">
        <div className="container">
          <p className="text-center billing-alert">Thank you. Your order has been received.</p>
          <div className="row mb-5">
            <div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
              <div className="confirmation-card">
                <h3 className="billing-title">Order Info</h3>
                <table className="order-rable">
                  <tbody><tr>
                      <td>Order number</td>
                      <td>: 60235</td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td>: Oct 03, 2017</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>: USD 2210</td>
                    </tr>
                    <tr>
                      <td>Payment method</td>
                      <td>: Check payments</td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
              <div className="confirmation-card">
                <h3 className="billing-title">Billing Address</h3>
                <table className="order-rable">
                  <tbody><tr>
                      <td>Street</td>
                      <td>: 56/8 panthapath</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>: Dhaka</td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>: Bangladesh</td>
                    </tr>
                    <tr>
                      <td>Postcode</td>
                      <td>: 1205</td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
              <div className="confirmation-card">
                <h3 className="billing-title">Shipping Address</h3>
                <table className="order-rable">
                  <tbody><tr>
                      <td>Street</td>
                      <td>: 56/8 panthapath</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>: Dhaka</td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>: Bangladesh</td>
                    </tr>
                    <tr>
                      <td>Postcode</td>
                      <td>: 1205</td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
          </div>
          <div className="order_details_table">
            <h2>Order Details</h2>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>Pixelstore fresh Blackberry</p>
                    </td>
                    <td>
                      <h5>x 02</h5>
                    </td>
                    <td>
                      <p>$720.00</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Pixelstore fresh Blackberry</p>
                    </td>
                    <td>
                      <h5>x 02</h5>
                    </td>
                    <td>
                      <p>$720.00</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Pixelstore fresh Blackberry</p>
                    </td>
                    <td>
                      <h5>x 02</h5>
                    </td>
                    <td>
                      <p>$720.00</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Subtotal</h4>
                    </td>
                    <td>
                      <h5 />
                    </td>
                    <td>
                      <p>$2160.00</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Shipping</h4>
                    </td>
                    <td>
                      <h5 />
                    </td>
                    <td>
                      <p>Flat rate: $50.00</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Total</h4>
                    </td>
                    <td>
                      <h5 />
                    </td>
                    <td>
                      <h4>$2210.00</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
export default Confirm2;