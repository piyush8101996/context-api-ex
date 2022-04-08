import './App.css';
import ThemeProvider from './context/ThemeContext';
import Home from './page/Home';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Home/>
      </div>
    </ThemeProvider>
  );
}

export default App;
