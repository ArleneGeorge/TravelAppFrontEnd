import React from 'react'

import '../CSS/FilterBox.css'

function FilterBox(props){
    return (
        <section className='search'>
        <form>
            <input type='text' 
            className='filter-box'
            placeholder="Search by Country, City, or Region" 
            value={props.searchTerm}
            onChange={props.updateSearchTerm}
            />
        </form>
      </section>

    )
}

export default FilterBox 