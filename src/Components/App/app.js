import { useState } from "react";




import HeadCoffee from "../headCoffee/headCoffee";
import Footer from "../footerCoffee/footerCoffee";
import MainPage from '../pages/MainPage/MainPage';
import OurCoffeePage from "../pages/OurCoffeePage/ourCoffeePage";



import '../../style/style.scss'; 

const App = () => {
    const [mainPage, setMainPage] = useState(true);
    const [forYP, setForYP] = useState(false);
    

    const onMainPage = () => {
        setMainPage(true);
        setForYP(false);
    }
    const onCoffeePage = () => {
        setMainPage(false);
        setForYP(false);
    }
    const onYourPleasure = () => {
        setMainPage(false);
        setForYP(true);
    }

    const main = mainPage ? <MainPage onCoffeePage={onCoffeePage}/> : <OurCoffeePage forYP={forYP} mainPage={mainPage}/>;

    return (
        <>
            <div className="main">
                <HeadCoffee onMainPage={onMainPage} onCoffeePage={onCoffeePage} onYourPleasure={onYourPleasure}/>
                {main}             
                
                <Footer onMainPage={onMainPage} onCoffeePage={onCoffeePage} onYourPleasure={onYourPleasure}/>  
            </div>      
        </>
    )
}

export default App;