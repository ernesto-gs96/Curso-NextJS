import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";
import { TimerPadre } from "./components/TimerPadre";
import { Todo } from "./components/Todo";
import { Usuario } from "./components/Usuario";


function App() {
  return (
    <div className="App">
      <h1>React - TypeScript</h1>

      <hr/>
      <h2>useStae</h2>
      
      <Counter/>

      <br/>

      <Usuario/>

      <hr/>
      <h2>useState - useRef</h2>

      <TimerPadre/>

      <hr/>
      <h2>useReduce</h2>

      <ContadorRed/>

      <hr/>
      <h2>customHooks</h2>

      <Formulario/>

      <Formulario2/>

      <hr/>
      <h2>Context</h2>

      <Todo/>
    </div>
  );
}

export default App;
