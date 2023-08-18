//import React, { Component } from 'react';
import { useState } from 'react';
import Notiflix from 'notiflix';

import { Section } from '../Section/Section'; 
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export function Counter() {
  
  // create useState
  const [positive, setPositive] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [negative, setNegative] = useState(0); 
  
  // functions for increment data
  const handleCounterPositiveIncrement = () => { 
    setPositive(prevCounterPositive => prevCounterPositive + 1);  
  }
  
  const handleCounterNeutralIncrement = () => { 
    setNeutral(prevCounterNeutral => prevCounterNeutral + 1);  
  }

  const handleCounterNegativeIncrement = () => { 
    setNegative(prevCounterNegative => prevCounterNegative + 1);  
  }


  // run callback increment function for selected state
  const handleCounterIncrement = (activeState) => {
    if (!activeState) { 
      return
    }
    
    const objState = {
      positive: handleCounterPositiveIncrement,
      neutral: handleCounterNeutralIncrement,
      negative: handleCounterNegativeIncrement,
    }

    objState[activeState]();
    showMessage(activeState);

    // for (let item of Object.keys(objState)) {
    //   if (activeState === item) {
    //     objState[item]();
    //     showMessage(activeState);
    //   }
    // }
  }

  
  // Calc total feedback
  const countTotalFeedback = () => { 
   return positive + neutral + negative;
   //Object.values(state).reduce((acc, item) => acc + item, 0)
  } 

  
  
const showMessage = (keyOption) => {
  const message = "You leave " + keyOption + " feedback";
  const obj = {
    positive: Notiflix.Notify.success,
    neutral: Notiflix.Notify.info,
    negative: Notiflix.Notify.warning,
  } 
  obj[keyOption](message);
}

  
const countPositiveFeedbackPercentage = () => { 
  if (!total) {
     return 0;
  }

  return +(positive / countTotalFeedback() * 100).toFixed(0);
}
  
  
const total = countTotalFeedback();
const state = { positive, neutral, negative };

  return (
      <>
        <Section title={"Please leave feedback: HW4-Hook"}>
          <FeedbackOptions
            options={Object.keys(state)} 
            onLeaveFeedback={handleCounterIncrement}
          />
        </Section>

        <Section title={"Statistics"}>
          {
            total ? <Statistics 
                      positive = {positive}
                      neutral = {neutral}
                      negative = {negative}
                      total = {total} 
                      positivePercentage = {countPositiveFeedbackPercentage()}
                    />
                  : <Notification message="There is no feedback" />
          }
        </Section>
      </>
  );
}

