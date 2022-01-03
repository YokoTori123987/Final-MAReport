import React from 'react';
import Bestsell from './Bestsell';
import Hero from './Hero';
import Hero1 from './Hero1';
import Treading from './Treanding';

function Main() {
    return(
        <>
            <main class="site-main">
                <Hero />
                <Hero1 />
                <Treading />
                <Bestsell />
            </main>
        </>
    )
}
export default Main;