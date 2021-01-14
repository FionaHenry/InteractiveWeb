import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
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
import Business from './pages/Business';
import Computing from './pages/Computing';
import EnglishLit from './pages/EnglishLit';

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
        <Route path='/Business' component={Business}/>
        <Route path='/Computing' component={Computing}/>
        <Route path='/EnglishLit' component={EnglishLit}/>
      </Switch>

      <section>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
