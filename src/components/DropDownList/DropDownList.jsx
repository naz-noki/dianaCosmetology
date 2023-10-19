import { useState } from "react";
import BlockWithText from "../BlockWithText/BlockWithText";
import Slider from "../Slider/Slider";
import './DropDownList.css';

const DropDownList = ({
    el,
}) => {
    const [isActive, setIsActive] = useState(false);

    const switchIsActive = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <section className='DropDownList__wrapper'>
            <div className="DropDownList__block" onClick={() => switchIsActive()}>
                <div className="DropDownList__title">{el.title}</div>
                <button
                    className={
                       isActive ? "DropDownList__btn DropDownList__btn_active" : "DropDownList__btn"
                    } 
                >
                    {'<'}
                </button>
            </div>
                <div 
                    className={
                        isActive ? "DropDownList__container DropDownList__container_active" : "DropDownList__container"
                    }
                >
                    <BlockWithText
                        title={el.title}
                        discription={el.discription}
                    />
                    <div className="DropDownList__container_title">Примеры хороших средств:</div>
                    <Slider
                        imgList={el.slides}
                    />  
                </div>
        </section>
    );
};

export default DropDownList;