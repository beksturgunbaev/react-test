import './App.css';
import { Header } from './components/Header/Header';
import HomeProducts from './components/Home/HomeProducts'

function App() {
  return (
    <div className="App">
      <section className='main_section'>
        <Header />
      </section>
      < HomeProducts />
    </div>
  );
}

export default App;
