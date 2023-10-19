import Introduction from '../components/Introduction';
import TableContents from '../components/TableContents';
import FirstChapter from '../components/FirstChapter';
import SecondChapter from '../components/SecondChapter';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';

const MainPage = () => {

    return (
        <main className='MainPage__wrapper'>
            <Introduction />
            <TableContents />
            <FirstChapter />
            <SecondChapter />
            <Feedback />
            <Footer />
        </main>
    );
};

export default MainPage;