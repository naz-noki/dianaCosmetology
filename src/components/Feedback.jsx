const Feedback = () => {

    return (
        <section className='Feedback__wrapper' id='thirdChapter'>
            <h1 className="Feedback__title">
                Пример лечения акне при помощи домашнего ухода
            </h1>
            <div className="Feedback__text">
                <p><b>Вот один из примеров консультации, впечатляет?</b></p>
                <p>Поэтому, если ты столкнулась с проблемой выбора средств</p>
                <p>для домашнего ухода – смело мне пиши!</p>
            </div>
            <div className="Feedback__block">
                <img src="/img/beforeAndAfter.jfif" className="Feedback__img" />
                <img src="/img/sms.png" className="Feedback__sms" />
            </div>
        </section>
    );
};

export default Feedback;