import './BlockWithText.css';

const BlockWithText = ({
    title,
    discription,
}) => {

    return (
        <section className='BlockWithText__wrapper'>
            <h1 className="BlockWithText__title">
                {title}
            </h1>
            <div className="BlockWithText__discription">
                {discription}
            </div>
        </section>
    );
};

export default BlockWithText;