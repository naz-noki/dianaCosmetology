const FirstChapter = () => {

    return (
        <section className='FirstChapter__wrapper' id='firstChapter'>
            <h1 className="FirstChapter__title">
                Для чего нужен базовый уход?
            </h1>
            <div className="FirstChapter__block">
                <div className="FirstChapter__blockForImg">
                    <img src="/img/FirstChapter__img.jpg" className="FirstChapter__img" />
                </div>
                <div className="FirstChapter__block_text">
                    <b>Что такое вообще базовый уход за кожей?</b><br/>
                    Это тот необходимый минимум для поддержания здоровья кожи и ее защитного барьера. 
                    Как правило, именно защитный барьер очень сильно поврежден при различных кожных заболеваниях, например: акне, атопический дерматит и др. 
                    Базовый уход не способен решить проблему акне, пигментации, стереть морщины, простимулировать выработку коллагена, НО, если у вас неправильно выстроен базовый уход или вовсе отсутствует – хоть обмажьтесь с ног до головы дорогущими банками, они все равно НЕ БУДУТ работать при нарушенном защитном барьере кожи, а вместо желаемого эффекта можно получить раздражение. 
                </div>
            </div>
            <ul className="FirstChapter__list">
                <li className="FirstChapter__list_title">Что получим от хорошего базового ухода</li>
                <li className="FirstChapter__list_item"><p>Уменьшение количества воспалений, благодаря восполнению дефицита липидов в коже и насыщение кожи влагой.</p></li>
                <li className="FirstChapter__list_item"><p>Ровный тон лица.</p></li>
                <li className="FirstChapter__list_item"><p>Устранение сухости и обезвоженности кожи.</p></li>
                <li className="FirstChapter__list_item"><p>Возможность продуктам с активами работать на максимум и, как следствие, получение хорошего результата от применения средств.</p></li>
            </ul>
        </section>
    );
};

export default FirstChapter;