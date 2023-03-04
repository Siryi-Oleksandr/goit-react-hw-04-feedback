import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './FeedbackOptions.styled';
import { AiFillDislike, AiFillLike, AiFillDownCircle } from 'react-icons/ai';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionKeys = Object.keys(options);
  return (
    <ButtonWrapper>
      <Button
        type="button"
        style={{ backgroundColor: '#22c367' }}
        onClick={() => onLeaveFeedback(optionKeys[0])}
      >
        {optionKeys[0]}
        <AiFillLike />
      </Button>
      <Button
        type="button"
        style={{ backgroundColor: '#07b8f4' }}
        onClick={() => onLeaveFeedback(optionKeys[1])}
      >
        {optionKeys[1]}
        <AiFillDownCircle />
      </Button>
      <Button
        type="button"
        style={{ backgroundColor: 'red' }}
        onClick={() => onLeaveFeedback(optionKeys[2])}
      >
        {optionKeys[2]}
        <AiFillDislike />
      </Button>
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
