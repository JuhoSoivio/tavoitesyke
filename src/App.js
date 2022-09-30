import { useState } from 'react';
import './App.css';

function App() {
  const [age, setage] = useState(0)
  const [lower, setlower] = useState(0)
  const [upper, setupper] = useState(0)

  function laske(e) {
    e.preventDefault()
    setlower((220 - age) * 0.65)
    setupper((220 - age) * 0.85)
  }

  return (
    <div>
      <form id="content" onSubmit={laske}>
        <h1>Heart rate limits calculator</h1>
        <div>
          <label>Age</label>
          <input value={age} onChange={e => setage(e.target.value)} />
        </div>
        <div>
          <label>Heart rate limits</label>
          <output>{lower.toFixed(2)}-{upper.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
