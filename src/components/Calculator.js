import PropTypes from 'prop-types';

const CreateDigits = (props) => {
  const { digits } = props;
  return <div className="digits">{digits}</div>;
};

function Calculator() {
  return (
    <div className="App">
      <div className="screen">0</div>
      <div className="digits">
        <CreateDigits digits="Ac" />
        <CreateDigits digits="+/-" />
        <CreateDigits digits="%" />
        <CreateDigits digits="/" />
        <CreateDigits digits="7" />
        <CreateDigits digits="8" />
        <CreateDigits digits="9" />
        <CreateDigits digits="x" />
        <CreateDigits digits="4" />
        <CreateDigits digits="5" />
        <CreateDigits digits="6" />
        <CreateDigits digits="-" />
        <CreateDigits digits="1" />
        <CreateDigits digits="2" />
        <CreateDigits digits="3" />
        <CreateDigits digits="+" />
        <CreateDigits digits="0" />
        <CreateDigits digits="." />
        <CreateDigits digits="=" />
      </div>
    </div>
  );
}

CreateDigits.propTypes = {
  digits: PropTypes.number.isRequired,
};

export default Calculator;
