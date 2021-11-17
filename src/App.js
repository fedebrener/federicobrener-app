import './App.css';
import Header from './Header';
import Slider from './Slider';
import Categorias from './Categorias';
import Newslatter from './Newslatter';
import Looks from './Looks';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      
      <Header />
      <div className='main'>
      <Slider />
      <Categorias />
      <Newslatter />
      <Looks />
      </div>
      <Footer />
    </div>
  );
}

export default App;
