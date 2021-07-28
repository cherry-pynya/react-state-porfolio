import './Toolbar.css'

import PropTypes from 'prop-types';

export default function Toolbar({filters, selected, onSelectFilter}) {
    return (
        <div className='Portfolio-toolbar'>
            {filters.map((el) => {
                if (el === selected) {
                    return( <button className='Portfolio-toolbar-btn checked' onClick={onSelectFilter} key={el} type='button'>{el}</button> )
                } else {
                    return( <button className='Portfolio-toolbar-btn' onClick={onSelectFilter} key={el} type='button'>{el}</button> )
                }
            })}
        </div>
    )
}

Toolbar.propTypes = {
    filters: PropTypes.array,
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func,
}