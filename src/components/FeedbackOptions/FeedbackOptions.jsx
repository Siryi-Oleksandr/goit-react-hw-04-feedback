import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './FeedbackOptions.styled';
import { AiFillDislike, AiFillLike, AiFillDownCircle } from 'react-icons/ai';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      <Button
        type="button"
        style={{ backgroundColor: '#22c367' }}
        onClick={() => onLeaveFeedback(options[0])}
      >
        {options[0]}
        <AiFillLike />
      </Button>
      <Button
        type="button"
        style={{ backgroundColor: '#07b8f4' }}
        onClick={() => onLeaveFeedback(options[1])}
      >
        {options[1]}
        <AiFillDownCircle />
      </Button>
      <Button
        type="button"
        style={{ backgroundColor: 'red' }}
        onClick={() => onLeaveFeedback(options[2])}
      >
        {options[2]}
        <AiFillDislike />
      </Button>
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
