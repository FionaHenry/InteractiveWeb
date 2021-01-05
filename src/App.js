import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import './App.css';
import SimpleSlider from './components/Slider';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import WhyUCP from './pages/WhyUCP';
import Courses from './pages/Courses';

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
      
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Courses' component={Courses}/>
        <Route path='/Apply' component={Apply}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/WhyUCP' component={WhyUCP}/>
      </Switch>

      <section>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
