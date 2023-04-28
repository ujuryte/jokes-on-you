import './App.scss';
import Button from './Components/Button';
import Jokes from './Components/Jokes';
import { Code } from './Components/Store';

function App() {
  return (
    <Code>
      <div className="App">
        <h1>Joke's on You</h1>
        <Button />
        <Jokes />
      </div>
    </Code>
  );
}

export default App;
