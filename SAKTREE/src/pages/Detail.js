import React from 'react';
import Shopsingle from '../components/Shopsingle';
import Singleproduct from '../components/Singleproduct';

class Detail extends React.Component {

    constructor(props){
      super(props);
    }
  
    render(){    
        return (
            <main>

                <Shopsingle />
                <Singleproduct />

            </main>
        )
    }
}

export default Detail;
