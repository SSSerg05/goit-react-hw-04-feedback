import PropTypes from 'prop-types'; // ES6'
import { H3 } from './Section.styled';


export const Section = ({ title, children }) => {
  return (
    <section>
      { title && <H3>{ title }</H3> }
      { children }
    </section>
  );
}

Section.propTypes = {
  title : PropTypes.string,
}