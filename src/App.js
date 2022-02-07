
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import OptionBoxes from './components/OptionBoxes';
import Footer from './components/Footer';


function App() {
  return (
    <div className='container'>
    <Navbar />
    <Header />
    <OptionBoxes />
    <Footer />
    </div>
  );
}

export default App;
