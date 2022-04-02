import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cats from './components/cats/cats';
import Sidebar from './components/sidebar';

function App() {
  
  return (
    <div className="App">
        <div>
                <div><Sidebar /></div>
                <div>
                    <Routes>
                        <Route path="/:id" element={<Cats />} />
                    </Routes>
                </div>
            </div>
          </div>
    
  );
}

export default App;
