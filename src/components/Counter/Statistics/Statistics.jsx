import PropTypes from 'prop-types'; // ES6

export const Statistics = ({positive, neutral, negative, total, positivePercentage}) => {
  return (
    <div>
        <p>Count of positive: <span>{ positive }</span></p>
        <p>Count of neutral: <span>{ neutral }</span></p>
        <p>Count of negative: <span>{ negative}</span></p>
        <p>Total: <span>{total}</span></p>
        <p>Percentage of positive: <span>{positivePercentage+'%'}</span></p>
    </div>
  );
}

Statistics.propTypes = {
  positive : PropTypes.number.isRequired, 
  neutral : PropTypes.number.isRequired,
  negative : PropTypes.number.isRequired,
  total : PropTypes.number.isRequired,
  positivePercentage : PropTypes.number.isRequired,
}