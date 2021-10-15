import React from "react";
import { useState } from "react";
import { Card, CardHeader } from "reactstrap";


function App() {
  
const[count, setCount] = useState(0);

const Adicionar = () => {
  setCount(count + 1);
}

const Remover = () => {
  setCount(count - 1);
}
  
  return (
      <Card>
      <CardHeader><h2>Contador</h2></CardHeader>    
      <div>  
        <ul>
          <span><h4>{count}</h4></span>
          <br></br>
          <button type="button" className="btn btn-success" onClick={Adicionar}>Adicionar</button>
          <button type="button" className="btn btn-danger" onClick={Remover}>Remover</button>
        </ul>
        </div>
      </Card>
  );
}

export default App;
