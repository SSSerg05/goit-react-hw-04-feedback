//import React, { Component } from 'react';
import { useState } from 'react';
import Notiflix from 'notiflix';

import { Section } from '../Section/Section'; 
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


const showMessage = (keyOption) => {
    const message = "You leave " + keyOption + " feedback";
    const obj = {
      positive: Notiflix.Notify.success,
      neutral: Notiflix.Notify.info,
      negative: Notiflix.Notify.warning,
    } 
    obj[keyOption](message);
}



export function Counter() {

  const [positive, setPositive] = useState(0);
  const handleCounterPositiveIncrement = () => { 
    setPositive(prevCounterPositive => prevCounterPositive + 1);  
  }

  const [neutral, setNeutral] = useState(0);
  const handleCounterNeutralIncrement = () => { 
    setNeutral(prevCounterNeutral => prevCounterNeutral + 1);  
  }

  const [negative, setNegative] = useState(0); 
  const handleCounterNegativeIncrement = () => { 
    setNegative(prevCounterNegative => prevCounterNegative + 1);  
  }

 const countTotalFeedback = () => { 
     return Object.values(this.state).reduce((acc, item) => acc + item, 0)
 } 

  const total = countTotalFeedback();
  // const { positive, neutral, negative } = this.state;

  return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={Object.keys(this.state)} 
            onLeaveFeedback={handleCounterPositiveIncrement}
          />
        </Section>

        <Section title={"Statistics"}>
          {
            total ? <Statistics 
                      positive = {positive}
                      neutral = {neutral}
                      negative = {negative}
                      total = {total} 
                      positivePercentage = {this.countPositiveFeedbackPercentage()}
                    />
                  : <Notification message="There is no feedback" />
          }
        </Section>
      </>
  );
}

// export class Counter extends Component {
  
//   state = {
//     positive: 0,
//     neutral: 0,
//     negative: 0,
//   }
  
//   increment = (option) => { 
//     this.setState((prevState) => {
//       return {
//         [option]: prevState[option] + 1,
//       };
//     });
//     showMessage(option);
//   }

//   countTotalFeedback() { 
//     return Object.values(this.state).reduce((acc, item) => acc + item, 0)
//   } 

//   countPositiveFeedbackPercentage() { 
//     const total = this.countTotalFeedback();
    
//     if (!total) {
//       return 0;
//     }

//     return +((this.state.positive / total * 100).toFixed(0));
//   }

//   render() {
//     const total = this.countTotalFeedback();
//     const { positive, neutral, negative } = this.state;

//     return (
//       <>
//         <Section title={"Please leave feedback"}>
//           <FeedbackOptions
//             options={Object.keys(this.state)} 
//             onLeaveFeedback={this.increment}
//           />
//         </Section>

//         <Section title={"Statistics"}>
//           {
//             total ? <Statistics 
//                       positive = {positive}
//                       neutral = {neutral}
//                       negative = {negative}
//                       total = {total} 
//                       positivePercentage = {this.countPositiveFeedbackPercentage()}
//                     />
//                   : <Notification message="There is no feedback" />
//           }
//         </Section>
//       </>
//     );
//   }
// }
