import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import List from './List';
import Detail from './Detail';
import { BrowserRouter, Route, Routes, Link } from 'react-router';

function App() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
       fetch('https://api.restful-api.dev/objects')
        .then(response => response.json())
        .then(data => {
            setItems(data);
            console.log('Fetched items:', data);
        })
        .catch(error => console.error('Error fetching data:', error))
        .finally(() => setLoading(false));
    }, []);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<List items={items} />} />
        <Route path="/detail/:id" element={<Detail items={items} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
