import './calculator.css';
import PropTypes from 'prop-types';

const CreateDigits = (props) => {
  const { digits, className } = props;
  return (
    <button className={className} type="button">
      {digits}
    </button>
  );
};

function Calculator() {
  return (
    <div className="App">
      <div className="screen">0</div>
      <div className="digits">
        <CreateDigits digits="AC" className="digit" />
        <CreateDigits digits="+/-" className="digit" />
        <CreateDigits digits="%" className="digit" />
        <CreateDigits digits="/" className="operation" />
        <CreateDigits digits="7" className="digit" />
        <CreateDigits digits="8" className="digit" />
        <CreateDigits digits="9" className="digit" />
        <CreateDigits digits="x" className="operation" />
        <CreateDigits digits="4" className="digit" />
        <CreateDigits digits="5" className="digit" />
        <CreateDigits digits="6" className="digit" />
        <CreateDigits digits="-" className="operation" />
        <CreateDigits digits="1" className="digit" />
        <CreateDigits digits="2" className="digit" />
        <CreateDigits digits="3" className="digit" />
        <CreateDigits digits="+" className="operation" />
        <CreateDigits digits="0" className="digit zero" />
        <CreateDigits digits="." className="digit" />
        <CreateDigits digits="=" className="operation" />
      </div>
    </div>
  );
}

CreateDigits.propTypes = {
  digits: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default Calculator;
