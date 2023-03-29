import React, { useState } from 'react';
import './calculator.css';
import PropTypes from 'prop-types';
import calculate from '../Logic/calculate';

const CreateDigits = (props) => {
  const { digits, className, handleClick } = props;
  return (
    <button
      className={className}
      type="button"
      onClick={() => handleClick(digits)}
    >
      {digits}
    </button>
  );
};

function Calculator() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setData(calculate(data, buttonName));
  };
  return (
    <div className="App-container">
      <div>
        <header className="App-header">Lets do some Maths!</header>
      </div>
      <div className="App">
        <div className="screen">{data.next || data.total || '0'}</div>
        <div className="digits">
          <CreateDigits digits="AC" className="digit" handleClick={handleClick} />
          <CreateDigits
            digits="+/-"
            className="digit"
            handleClick={handleClick}
          />
          <CreateDigits digits="%" className="digit" handleClick={handleClick} />
          <CreateDigits
            digits="/"
            className="digit operation"
            handleClick={handleClick}
          />
          <CreateDigits digits="7" className="digit" handleClick={handleClick} />
          <CreateDigits digits="8" className="digit" handleClick={handleClick} />
          <CreateDigits digits="9" className="digit" handleClick={handleClick} />
          <CreateDigits
            digits="x"
            className="digit operation"
            handleClick={handleClick}
          />
          <CreateDigits digits="4" className="digit" handleClick={handleClick} />
          <CreateDigits digits="5" className="digit" handleClick={handleClick} />
          <CreateDigits digits="6" className="digit" handleClick={handleClick} />
          <CreateDigits
            digits="-"
            className="digit operation"
            handleClick={handleClick}
          />
          <CreateDigits digits="1" className="digit" handleClick={handleClick} />
          <CreateDigits digits="2" className="digit" handleClick={handleClick} />
          <CreateDigits digits="3" className="digit" handleClick={handleClick} />
          <CreateDigits
            digits="+"
            className="digit operation"
            handleClick={handleClick}
          />
          <CreateDigits
            digits="0"
            className="digit zero"
            handleClick={handleClick}
          />
          <CreateDigits
            digits="."
            className="digit dot"
            handleClick={handleClick}
          />
          <CreateDigits
            digits="="
            className="digit operation"
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

CreateDigits.propTypes = {
  digits: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Calculator;
