import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [point1x, setPoint1x] = useState(0)
  const [point1y, setPoint1y] = useState(0)
  const [point2x, setPoint2x] = useState(0)
  const [point2y, setPoint2y] = useState(0)
  return (
    <div className="App">
        <input type="text" onChange={e => setPoint1x(e.target.value)}></input>
        <input type="text" onChange={e => setPoint1y(e.target.value)}></input>
        <input type="text" onChange={e => setPoint2x(e.target.value)}></input>
        <input type="text" onChange={e => setPoint2y(e.target.value)}></input>
        <p>{point1x}</p>
        <p>{point1y}</p>
        <p>{point2x}</p>
        <p>{point2y}</p>
        <p>{point1x * point1y}</p>
    </div>
  );
}

export default App;
