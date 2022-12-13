

import img from '../../../../resources/icons/productsMainPageIcons/thirdprod.jpg';
import './goodsList.scss';

const GoodsList = (props) => {
    const data = [
        {img: img, id: 12,title: 'Lavaza Coffee 1 kg', country: 'Brazil', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {img: img, id: 13,title: 'Nescafe Coffee 1 kg', country: 'Kenya', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {img: img, id: 14,title: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {img: img, id: 15,title: 'Starbucks Coffee 1 kg', country: 'Columbia', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {img: img, id: 16,title: 'Jakarta Coffee 1 kg', country: 'Kenya', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {img: img, id: 17,title: 'Braziliano Coffee 1 kg', country: 'Brazil', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    ]
    const {search, filterBtns} = props;
    const searchGoods = (items, search) => {
        if(search.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
        })
    }
    const filterGoods = (items, filter) => {
        switch(filter) {
            case 'Brazil':
                return items.filter(item => item.country === filter);
            case 'Kenya':
                return items.filter(item => item.country === filter);
            case 'Columbia':
                return items.filter(item => item.country === filter);
            default: 
                return items
        }
    }
    const searchData = filterGoods(searchGoods(data, search), filterBtns);

    const items = searchData.map((item, i) => {
        const {img, id, title, country, price} = item;

        return (
            <div 
            className="goodsList__item" 
            key={i}
            onClick={() => console.log(id)}>
                <img src={img} alt={title}></img>
                <div className="goodsList__title">{title}</div>
                <div className="goodsList__country">{country}</div>
                <div className="goodsList__price"> {price + ' $'} </div>
            </div>
        )
    }) 

    return (
        <div className="goodsList">
            {items}
        </div>
    )
}

export default GoodsList;