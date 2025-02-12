import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import Character from './components/Character';


function App() {
  const [num, setNum] = useState<number>(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div className="flex-center top-buttons">
          <button className='top-btn'> Add New Character</button>
          <button className='top-btn'> Reset All Characters</button>
          <button className='top-btn'> Save All Characters</button>
        </div>
        <p className='skill-check-title'>Skill Check Results</p>

        <Character index={1}/>

        <div>
          Value:
          {num}
          <button>+</button>
          <button>-</button>
        </div>
      </section>
    </div>
  );
}

export default App;
