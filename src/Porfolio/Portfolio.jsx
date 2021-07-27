import Toolbar from './Toolbar/Toolbar';

export function Portfolio({filters, projects}) {
    console.log(filters, projects)
    return (
        <div className='Portfolio'>
            <Toolbar 
                filters={ filters }
                selected = 'All'
                onSelectFilter={(filter) => {console.log(filter)}}
            />
        </div>
    )
}