import React, { useState } from "react";

export const Calc = () => {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [result,setResult]=useState(0)

  const addOperands=()=>{
    setResult(Number(operand1)+Number(operand2))
  

  }
  const subOperands=()=>{
    setResult(Number(operand1-operand2))
    
  }
  const mulOperands=()=>{
    setResult(Number(operand1*operand2))
  }
  const divOperands=()=>{
    setResult(Number(operand1/operand2))
    
  }
  const clearAll=()=>{
    setOperand1("");
    setOperand2("");
    setResult(0);
  }
  return (
    <>
      <h1>{result}</h1>
      <div>
        <input
          type="number"
          value={operand1}
          placeholder="0"
          onChange={(e) => setOperand1(e.target.value)}
        />
        <input
          type="number"
          value={operand2}
          placeholder="0"
          onChange={(e) => setOperand2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={addOperands}>+</button>
        <button onClick={subOperands}>-</button>
        <button onClick={mulOperands}>x</button>
        <button onClick={divOperands}>/</button>
        <button onClick={clearAll}>Delete</button>
      </div>
    </>
  );
};
