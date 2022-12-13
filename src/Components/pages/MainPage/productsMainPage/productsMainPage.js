
import {Component} from 'react';
import firstImg from '../../../../resources/icons/productsMainPageIcons/firstprod.jpg';
import secImg from '../../../../resources/icons/productsMainPageIcons/secprod.jpg';
import thirdImg from '../../../../resources/icons/productsMainPageIcons/thirdprod.jpg';

import '../productsMainPage/productsMainPage.scss';


class ProductsMainPage extends Component {

    productsInfo = [
        {img: firstImg, id: 1,title: 'Solimo Coffee Beans 2 kg', price: 10.73},
        {img: secImg, id: 2,title: 'Presto Coffee Beans 1 kg', price: 15.99},
        {img: thirdImg, id: 3,title: 'AROMISTICO Coffee 1 kg', price: 6.99}
    ] 
    
    products = this.productsInfo.map((item, i) => {
        return (
            <div className="products__item" key={i} onClick={() => console.log(item.id)}>
                <img src={item.img} alt={item.title}></img>
                <div className="products__title-items">{item.title}</div>
                <span className="products__price"> {item.price + ' $'} </span>
            </div>
        )
    });


    render() {
        console.log(this.products);
        return(
            <section className='products'>
                <span className='products__title'>Our best</span>
                <div className="products__items">
                    {this.products}
                </div>
            </section>
        )
    }
}

export default ProductsMainPage;
