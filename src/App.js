// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ListProduct from './components/ListProduct';

function App() {

  return (
    <div className="App">
      <header>
        <h2>Tugas 10 - React JS Component</h2>
      </header>

      <main>
        <section id="Counter">
          <h3>Jawaban no.1 (Counter)</h3>
          <Counter/>      
        </section>
        <section id="ListProduct">
          <ListProduct/>
        </section>
      </main>

      <footer>
        <span>Copyright &copy; 2021 - Rodhiyah Desviana</span>
      </footer>
      
    </div>
  );
}

export default App;
