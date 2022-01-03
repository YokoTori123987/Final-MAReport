import React from 'react';
import Confirm1 from '../components/Confirm1';
import Confirm2 from '../components/Confirm2';

class Confirm extends React.Component {

    constructor(props){
      super(props);
    }
  
    render(){    
        return (
            <main>

                <Confirm1 />
                <Confirm2 />

            </main>
        )
    }
}

export default Confirm;
