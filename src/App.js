import { useState } from 'react'
import Section from './components/Section/Section'
import Statistics from './components/Statistics/Statistics'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Notification from './components/Notification/Notification'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGoodFeedback = () => {
    setGood(() => good + 1)
  }

  const clickNeutralFeedback = () => {
    setNeutral(() => neutral + 1)
  }

  const clickBadFeedback = () => {
    setBad(() => bad + 1)
  }

  const totalFeedbackAmount = () => {
    let total = good + neutral + bad
    return total
  }

  const positiveFeedbackPercentage = () => {
    let positivePercentage = Math.floor((good * 100) / totalFeedbackAmount())
    return positivePercentage
  }

  return (
    <div className='App'>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          clickGoodFeedback={clickGoodFeedback}
          clickNeutralFeedback={clickNeutralFeedback}
          clickBadFeedback={clickBadFeedback}
        />

        {totalFeedbackAmount() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbackAmount()}
            positivePercentage={positiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </Section>
    </div>
  )
}

export default App
