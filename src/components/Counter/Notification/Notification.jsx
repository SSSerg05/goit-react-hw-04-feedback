import PropTypes from 'prop-types'; // ES6'

export const Notification = ({message}) => {
  
  return (
    <p>{message}</p>
    
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}