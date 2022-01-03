import React from 'react';
import Checkout1 from '../components/Checkout1';
import Checkout2 from '../components/Checkout2';

class CheckOut extends React.Component {

    constructor(props){
      super(props);
    }
  
    render(){    
        return (
            <main>

                <Checkout1 />
                <Checkout2 />

            </main>
        )
    }
}

export default CheckOut;
