import React from 'react';
import PropTypes from 'prop-types'; // ES6

import { Button } from './FeedbackOptions.styled';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {  
  return (
    options.map((item) => 
      <Button key={item} onClick={() => onLeaveFeedback(item)}>
        { item }
      </Button>
    )
  )
}

FeedbackOptions.propTypes = {
  options : PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback : PropTypes.func.isRequired,
}