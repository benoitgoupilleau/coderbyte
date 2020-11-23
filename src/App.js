import { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [currentNb, setCurrentNb] = useState(1);
  const [operation, setOperation] = useState(null);

  const clear = (e) => {
    e.preventDefault();
    setNumber1('');
    setNumber2('');
    setCurrentNb(1);
  };

  const handleNumber = (num) => (e) => {
    e.preventDefault();
    if (currentNb === 1) {
      if (num === 0 && number1.length === 0) return;
      return setNumber1(`${number1}${num}`);
    } else {
      if (num === 0 && number2.length === 0) return;
      return setNumber2(`${number2}${num}`);
    }
  };

  const displayNum = () => {
    if (currentNb === 1) {
      return number1.length > 0 ? number1 : 0;
    }
    return number2.length > 0 ? number2 : 0;
  };

  const handleOp = (op) => (e) => {
    e.preventDefault();
    setOperation(op);
    setCurrentNb(2);
  };

  const showRes = (e) => {
    e.preventDefault();
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    setCurrentNb(1);
    setNumber2('');
    switch (operation) {
      case '/':
        return setNumber1((num1 / num2).toString());
      case '+':
        return setNumber1((num1 + num2).toString());
      case '-':
        return setNumber1((num1 - num2).toString());
      case 'x':
        return setNumber1((num1 * num2).toString());
      default:
    }
  };

  const toggleSign = (e) => {
    e.preventDefault();
    if (currentNb === 1) {
      if (number1.length === 0) return;
      if (parseFloat(number1) > 0) {
        return setNumber1(`-${number1}`);
      }
      return setNumber1(number1.replace('-', ''));
    }
    if (number2.length === 0) return;
    if (parseFloat(number2) > 0) {
      return setNumber2(`-${number2}`);
    }
    return setNumber2(number2.replace('-', ''));
  };

  const handlePercent = (e) => {
    e.preventDefault();
    if (currentNb === 1) {
      return setNumber1((parseFloat(number1) / 100).toString());
    }
    return setNumber2((parseFloat(number2) / 100).toString());
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>React Calculator</p>
        <div className="container">
          <div className="row result">{displayNum()}</div>
          <div className="row">
            <button className="grey" onClick={clear}>
              AC
            </button>
            <button className="grey" onClick={toggleSign}>
              +/-
            </button>
            <button className="grey" onClick={handlePercent}>
              %
            </button>
            <button className="orange" onClick={handleOp('/')}>
              ÷
            </button>
          </div>
          <div className="row">
            <button onClick={handleNumber(7)}>7</button>
            <button onClick={handleNumber(8)}>8</button>
            <button onClick={handleNumber(9)}>9</button>
            <button className="orange" onClick={handleOp('x')}>
              x
            </button>
          </div>
          <div className="row">
            <button onClick={handleNumber(4)}>4</button>
            <button onClick={handleNumber(5)}>5</button>
            <button onClick={handleNumber(6)}>6</button>
            <button className="orange" onClick={handleOp('-')}>
              -
            </button>
          </div>
          <div className="row">
            <button onClick={handleNumber(1)}>1</button>
            <button onClick={handleNumber(2)}>2</button>
            <button onClick={handleNumber(3)}>3</button>
            <button className="orange" onClick={handleOp('+')}>
              +
            </button>
          </div>
          <div className="row">
            <button onClick={handleNumber(0)}>0</button>
            <button onClick={handleNumber('.')}>,</button>
            <button className="enter orange" onClick={showRes}>
              =
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
