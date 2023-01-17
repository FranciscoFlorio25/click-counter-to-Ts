import './App.css';
import Button from './Components/Button';
import Count from './Components/Count';
import CountLogo from './Image/CountIMG.png';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const handleClick = ()  => {
   setCount(count + 1) ;
  }
  const resetCount = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <div className='Logo-container'>
        <h1>Contador de click</h1>
        <img
          className='Logo-count'
          src={CountLogo}
          alt='Logo del contador'
        />
      </div>
      <div className='main-container'>
        <Count clicksCounter={count}/>
        <Button 
          Text='Click me!'
          IsClickButton={true}
          HandleClick={handleClick}
        />
        <Button
          Text='Reset'
          IsClickButton={false}
          HandleClick={resetCount}
        />
      </div>
    </div>
  );
}

export default App;
