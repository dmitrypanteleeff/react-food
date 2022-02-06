import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Movies } from './pages/Movie';
import { Category } from './pages/Category';
import { Dish } from './pages/Dish';

// import { Link } from 'react-router-dom';


//require('dotenv').config()

function App() {
  return (
      <div className="App">
      <Router basename='/react-food'>
      <Header />
        <main className='container content'>
          
        
          <Routes>
              
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contact />} />
            <Route path='/category/:name' element={<Category />} />
            <Route path='/meal/:id' element={<Dish />} />
            <Route path='*' element={<NotFound />} />
        
          </Routes>
        
        
          
        </main>
        <Footer />  
        </Router>
      </div>
    
  );
}

export default App;
