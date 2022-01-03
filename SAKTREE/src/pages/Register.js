import React from 'react';
import Regis1 from '../components/Resgis1';
import Regis2 from '../components/Resgis2';

class Login extends React.Component {

    constructor(props){
      super(props);
    }
  
    render(){    
        return (
            <main>

                <Regis1 />
                <Regis2 />

            </main>
        )
    }
}

export default Login;
