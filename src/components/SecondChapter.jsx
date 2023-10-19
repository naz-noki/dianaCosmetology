import { listOfFunds } from "../constants";
import DropDownList from "./DropDownList/DropDownList";

const SecondChapter = () => {

    return (
        <section className='SecondChapter__wrapper' id='secondChapter'>
            <h1 className="SecondChapter__title">
                Из чего состоит базовый уход? 
            </h1>
            {
                listOfFunds.map((el) => 
                    <DropDownList el={el} />
                )
            }
        </section>
    );
};

export default SecondChapter;