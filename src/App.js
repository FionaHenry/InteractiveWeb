import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import SimpleSlider from './Slider';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Apply from './Apply';
import Contact from './Contact';
import WhyUCP from './WhyUCP';
import Courses from './Courses';

function App() {
  return (
    <Router>
      <section>
        <Header />
      </section>

      <section>
        <Navbar />
      </section>

      <section>
        <SimpleSlider />
      </section>

      <Route path='/' exact component={Home}/>
      <Route path='/Courses' component={Courses}/>
      <Route path='/Apply' component={Apply}/>
      <Route path='/Contact' component={Contact}/>
      <Route path='/WhyUCP' component={WhyUCP}/>

      <section>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
