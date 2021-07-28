import { useState } from 'react';

import PropTypes from 'prop-types';

import './Portfolio.css';

import Toolbar from './Toolbar/Toolbar';
import Projects from './Projects/Projects';

export function Portfolio({filters, projects}) {
    const [state, setState] = useState('All');
    const click = (str) => {
        setState(str.target.textContent)
    }

    let images
    if (state === 'All') {
        images = projects;
    } else {
        images = projects.filter((el) => el.category === state);
    }

    return (
        <div className='Portfolio'>
            <Toolbar 
                filters={ filters }
                selected={state}
                onSelectFilter={click}
            />
            <Projects projects={images} />
        </div>
    )
}

Portfolio.protoTypes = {
    filter: PropTypes.array,
    projects: PropTypes.array,
}