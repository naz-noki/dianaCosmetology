const Introduction = () => {

    return (
        <section className='Introduction__wrapper'>
            <h1 className="Introduction__title">
                Шпаргалка по базовому уходу лица
            </h1>
            <div className="Introduction__blc">
                <div className="Introduction__blockForImg">
                    <img 
                        src="/img/diana.png" 
                        alt="Фото @dr.diana.cosmetology" 
                        className="Introduction__img"
                    />
                </div>
                <div className="Introduction__dicr">
                    Привет!<br/>
                    Рада поприветствовать в своем гайде, теперь ты еще ближе на пути к здоровой коже! 
                    Меня зовут Диана и я практикующий косметолог и медик, влюбленный в дерматологию. 
                    С 16 лет активно боролась с акне и вот уже год я в ремиссии и часто получаю комплименты по поводу качества своей кожи. 
                    Консультирую онлайн и помогаю подобрать уход, который полностью закроет потребности кожи и будет бороться с определенными особенностями и проблемами. 
                    Вот один из примеров консультации, впечатляет? 
                    Поэтому, если ты столкнулась с проблемой выбора средств для домашнего ухода – смело мне пиши!
                </div>
            </div>
        </section>
    );
};

export default Introduction;