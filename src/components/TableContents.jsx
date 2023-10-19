import { tableContentsList } from "../constants";

const TableContents = () => {

    return (
        <section className='TableContents__wrapper'>
            <h1 className="TableContents__title">
                Содержание
            </h1>
            <ul className="TableContents__list">
            {
                tableContentsList.map((el) => 
                    <li className="TableContents__item">
                        <button className="TableContents__btn">
                            <a 
                                href={el.id}
                                className="TableContents__link"
                            >
                                {el.title}
                            </a>
                        </button>
                        <img 
                            src={el.icon}
                            alt="Крем" 
                            className="TableContents__icon"
                        />
                    </li>
                )
            }
            </ul>
        </section>
    );
};

export default TableContents;