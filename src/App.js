import './styles/styles.scss'
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import { pages } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          {pages.map(el => (
            <Route key={el.path} path={el.path} element={el.element} />
          ))}
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
