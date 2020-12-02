import './App.css';
import SimpleSlider from './Slider';
import Header from './Header';
import Footer from './Footer';
//import Home from './Home';
import Navbar from './Navbar';
//import Apply from './Apply';
//import SpinWheeel from './SpinWheel';
//import Contact from './Contact';
//import WhyUCP from './WhyUCP';
import Courses from './Courses';

function App() {
  return (
    <>
    <section>
      <Header />
    </section>

    <section>
      <Navbar />
    </section>

    <section>
      <SimpleSlider />
    </section>

    <section>
      <Courses />
    </section>

    <section>
      <Footer />
    </section>
    </>
  );
}

export default App;
