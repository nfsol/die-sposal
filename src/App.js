
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import OptionBoxes from './components/OptionBoxes';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';

function App() {
  return (
<>
    <Navbar />
    <div className='container'>
    <Header />
    <Testimonial />
    <Testimonial />
    <Testimonial />
    <OptionBoxes />
    <Footer />
    </div>
      </>
  );
}

export default App;
