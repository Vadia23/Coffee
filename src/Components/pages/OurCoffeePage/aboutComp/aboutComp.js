
import TitleTextComp from "../titleTextComp/titleTextComp";

// import cup from '../../../../resources/img/cup.jpg';
import './aboutComp.scss';
import cup from '/Users/vadia23/Desktop/Coffee/coffee/src/resources/img/cup.jpg'
import girl from '/Users/vadia23/Desktop/Coffee/coffee/src/resources/img/girlOurCoffee.jpg';

const AboutComp = (props) => {
    const {forYP, title} = props;
    

    return (
        <div className="about">
            <img className="about__img" src={forYP ? cup : girl} alt="ourCoffeeGirl" />
            <div className="about__descr">
                <TitleTextComp title={title}/>
                <div className="about__descr-text">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br/>
                    <br/>

                    Afraid at highly months do things on at. Situation recommend objection do intention
                    <br/> so questions. <br/>
                    As greatly removed calling pleased improve an. <br/> Last ask him cold feel
                    met spot shy want. Children me laughing we<br/> prospect answered followed. At it went<br/>
                    is song that held help face.
                </div>
            </div>

        </div>
    )

}

export default AboutComp;