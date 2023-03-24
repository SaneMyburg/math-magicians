import React, { useState } from 'react';
import './calculator.css';
import PropTypes from 'prop-types';
import calculate from '../Logic/calculate';
import QuoteDisplay from './quotes';

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

  // const category = 'inspirational';
  // const apiKey = 'Ts3DsEKJEWz1h/mZb5Vq1w==fLTigDUcx1O7ndJT';

  return (
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
      <div className="quotes">
        <QuoteDisplay />
      </div>
    </div>
  );
}

CreateDigits.propTypes = {
  digits: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Calculator;
