import React, { useState } from "react";
import './style.css';

function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldnum] = useState(0);
  const [operator, setOperator] = useState(0);

  function insertNum(e) {
    if (num == 0) {
      setNum(e.target.value);
    } else {
      setNum(num + e.target.value);
    }
  }

  function clear() {
    setNum(0);
  }

  function changeSignal() {
    if (num > 0) {
      setNum(-num)
    } else {
      setNum(Math.abs(num));
    }
  }

  function deleteLastNumber(e) {
    const completeNumber = num.toString();
    const lastNumber = completeNumber.substring(0, num.length - 1);
    if (num.length <= 1) {
      setNum(0);
    } else {
      setNum(lastNumber);
    }
  }

  function operatorHandler(e) {
    let operatorValue = e.target.value;
    setOperator(operatorValue);
    setOldnum(num);
    setNum(0)
  }

  function calculate() {
    switch (operator) {
      case "+":
        setNum(parseFloat(oldNum) + parseFloat(num));
        break;
      case "-":
        setNum(parseFloat(oldNum) - parseFloat(num));
        break;
      case "/":
        setNum(parseFloat(oldNum) / parseFloat(num));
        break;
      case "X":
        setNum(parseFloat(oldNum) * parseFloat(num));
        break;
      case "%":
        setNum(parseFloat(oldNum) * parseFloat(num) / 100);
        break;
    }
  }

  return (
    <>
      <section className="calculator">
        <article className="result">
          <input type="text" maxLength={10} value={num} />
        </article>
        <article className="keyboard">
          <button onClick={operatorHandler} value={"%"}>%</button>
          <button onClick={changeSignal}>+/-</button>
          <button onClick={deleteLastNumber}>DEL</button>
          <button onClick={clear}>AC</button>
          <button onClick={insertNum} value={7} >7</button>
          <button onClick={insertNum} value={8} >8</button>
          <button onClick={insertNum} value={9} >9</button>
          <button onClick={operatorHandler} value={"+"}>+</button>
          <button onClick={insertNum} value={4} >4</button>
          <button onClick={insertNum} value={5} >5</button>
          <button onClick={insertNum} value={6} >6</button>
          <button onClick={operatorHandler} value={"-"}>-</button>
          <button onClick={insertNum} value={1} >1</button>
          <button onClick={insertNum} value={2} >2</button>
          <button onClick={insertNum} value={3} >3</button>
          <button onClick={operatorHandler} value={"X"}>X</button>
          <button onClick={insertNum} value={"."}>.</button>
          <button onClick={insertNum} value={0} >0</button>
          <button onClick={operatorHandler} value={"/"}>/</button>
          <button onClick={calculate} value={"="}>=</button>
        </article>
      </section>
    </>
  );
}

export default Calculator;
