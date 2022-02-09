
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import OptionBoxes from './components/OptionBoxes';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import testCards from './components/content/testCards.json'
import Dryad from './components/content/img/Dryad'
import Minotaur from './components/content/img/Minotaur'
import Gobo from './components/content/img/Gobo'
function App() {
  const images = [
    <Dryad />,
    <Minotaur />,
    <Gobo />
  ]
  return (
<>
    <Navbar />
    <div className='container'>
    <Header />
    <div className='testContainer'>
    {testCards.map((entry, i) =>{
      return <Testimonial data={entry} key={i}image={images[i]}/>
    })}
    </div>
    <OptionBoxes />
    <Footer />
    </div>
      </>
  );
}

export default App;
