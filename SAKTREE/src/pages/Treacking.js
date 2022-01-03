import React from 'react';
import Track1 from '../components/Track1';
import Track2 from '../components/Track2';

class Treacking extends React.Component {

    constructor(props){
      super(props);
    }
    render(){  
        return (
            <main>

                <Track1 />
                <Track2 />

            </main>
        )
    }
}

export default Treacking;
