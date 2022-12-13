
import { useState } from 'react';

import './searchComp.scss';



const SearchComp = (props) => {
    const [search, setSearch] = useState('');

    const onChangeFilter = (e) => {
        setSearch(e.target.value);
    }
    props.searchValue(search);   

    return (
        <div className="search">
            <div className="search__lookFor">
                Lookiing for
                <input 
                value={search}
                onChange={onChangeFilter}
                type='text'
                placeholder='start typing here...'
                />
            </div>
            <div className="search__filter">
                Or filter
                <div className="search__btns">
                <button onClick={() => props.onFilterSelect('All')}>All</button>
                <button onClick={() => props.onFilterSelect('Brazil')}>Brazil</button>
                <button onClick={() => props.onFilterSelect('Kenya')}>Kenya</button>
                <button onClick={() => props.onFilterSelect('Columbia')}>Columbia</button>
                </div>
            </div>
        </div>
    )
}

export default SearchComp;