import Toolbar from './Toolbar/Toolbar';
import Projects from './Projects/Projects';

export function Portfolio({filters, projects}) {
    return (
        <div className='Portfolio'>
            <Toolbar 
                filters={ filters }
                selected = 'All'
                onSelectFilter={(filter) => {console.log(filter)}}
            />
            <Projects projects={projects} />
        </div>
    )
}