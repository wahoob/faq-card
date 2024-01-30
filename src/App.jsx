import React, { useState } from 'react'
import FaqQuestion from './FaqQuestion';
import hero from '../src/images/illustration-woman-online-desktop.svg'
import pattern from '../src/images/bg-pattern-desktop.svg'

const questionAnswer = [
  {
    question: 'How many team members can I invite?',
    answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
  },
  {
    question: 'What is the maximum file upload size?',
    answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'
  },
  {
    question: 'How do I reset my password?',
    answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes! Send us a message and we’ll process your request no questions asked.'
  },
  {
    question: 'Do you provide additional support?',
    answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
  },
]

function App() {
  const [openIndex, setOpenIndex] = useState()
  const handleClick = (index) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index)
  }
  return (
    <div className='container'>
      <div className='card'>
        <div className='card__hero'>
          <img className='card__hero-image' src={hero} alt='woman' />
        </div>
        <img className='pattern' src={pattern} alt='pattern' />
        <div className='card__faq'>
          <h1>faq</h1>
          <div className='card__faq-container'>
            {questionAnswer.map((item, index) => {
              const { question, answer } = item
              return (
                <FaqQuestion key={index} index={index} handleClick={handleClick} isOpen={openIndex === index} question={question} answer={answer} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
