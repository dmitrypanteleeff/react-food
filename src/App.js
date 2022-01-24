import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Shop } from './components/Shop';
import { Context } from './components/Context.jsx';
//require('dotenv').config()

function App() {
  return (
    <Context>
      <div className="App">
        <Header />
          <Shop />
        <Footer />
      </div>
    </Context>
  );
}

export default App;
