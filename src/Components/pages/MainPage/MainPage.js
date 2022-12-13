
import TitleMainPage from "./titleMainPage/titleMainPage";
import MainPageDescription from "./mainPageDescription/mainPageDescription";
import ProductsMainPage from "./productsMainPage/productsMainPage";

const MainPage = (props) => {

    

    return (
        <>
            <TitleMainPage onCoffeePage={props.onCoffeePage}/>
            <MainPageDescription/>
            <ProductsMainPage/>
        </>
    )
}

export default MainPage;