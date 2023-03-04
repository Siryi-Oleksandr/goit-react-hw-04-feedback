import { useState } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './App.styled';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = type => {
    switch (type) {
      case 'good':
        return setGood(ps => ps + 1);
      case 'neutral':
        return setNeutral(ps => ps + 1);
      case 'bad':
        return setBad(ps => ps + 1);
      default:
        return null;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const result = (good / total) * 100;
    return total ? Number(result.toFixed(1)) : 0;
  };

  return (
    <Container>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is not feedback" />
        )}
      </Section>
    </Container>
  );
}

export default App;
