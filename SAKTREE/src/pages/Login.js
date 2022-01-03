import React from 'react';
import Login1 from '../components/Login1';
import Login2 from '../components/Login2';

class Login extends React.Component {

    constructor(props){
      super(props);
    }
  
    render(){    
        return (
            <main>

                <Login1 />
                <Login2 />

            </main>
        )
    }
}

export default Login;
