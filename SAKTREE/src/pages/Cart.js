import React from 'react';
import Cart1 from '../components/Cart1';
import Cart2 from '../components/Cart2';

class Cart extends React.Component {

    constructor(props){
      super(props);
    }
  
    render(){    
        return (
            <main>

                <Cart1 />
                <Cart2 />

            </main>
        )
    }
}

export default Cart;
