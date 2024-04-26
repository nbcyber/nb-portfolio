import logo from './logo.svg';
import './App.css';
import * as home from './sketches/home'
import { useMemo, useState } from 'react';
import { ReactP5Wrapper } from '@p5-wrapper/react';

function App() {
  const sketches = useMemo(
    () => [home.sketch], [home]
  )

  const [state, setState] = useState({
    rotation: 160,
    sketch: home.sketch,
    unmount: false
  });
  return (
    <div className="App">
      <ReactP5Wrapper sketch={state.sketch}/>
    </div>
  );
}

export default App;
