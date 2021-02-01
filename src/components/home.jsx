import React from 'react';
import {useTrail, animated} from "react-spring";
import { Trail } from "react-spring/renderprops";
import About from './about';
import Projects from './projects';

const Home = () => {
    // const trail = useTrail(number, {opacity: 1})
    // const components = [<About />, <Projects />]
    return (
        <Trail
            items={undefined}
        >
            <About/>
            <Projects />
        </Trail>
    )
}

export default Home;