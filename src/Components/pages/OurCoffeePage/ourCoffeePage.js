import { useState } from 'react';

import AboutComp from '../../aboutComp/aboutComp';
import SearchComp from '../../searchComp/searchComp';
import GoodsList from './goodsList/goodsList';


import './ourCoffeePage.scss';

const OurCoffeePage = (props) => {
    const [search, setSearch] = useState('');
    const [filterBtns, setFilterBtns] = useState('all');
    console.log(filterBtns);

    const searchValue = (value) => {
        setSearch(value);
    }

    const onFilterSelect = (filter) => {
        setFilterBtns(filter)
        
    }

    const {forYP} = props;
    const className = forYP ? 'ourCoffee__title-FYP' : 'ourCoffee__title-ourCoffee';
    const searchComp = forYP ? null : <SearchComp searchValue={searchValue} onFilterSelect={onFilterSelect}/>;
    return (
        <div className="ourCoffee">
            <div className={className}><span>{forYP ? 'For your pleasure' : 'Our Coffee'}</span></div>
            <div className="container">
                <AboutComp forYP={forYP} title={forYP ? 'About our goods' : 'About our beans'}/>
                <hr/>
                {searchComp}
                <GoodsList search={search} filterBtns={filterBtns}/>

            </div>         
        </div>
    )
}


export default OurCoffeePage;