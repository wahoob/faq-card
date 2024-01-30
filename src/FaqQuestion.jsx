import React from 'react'
import arrow from '../src/images/icon-arrow-down.svg'

const FaqQuestion = ({ index, isOpen, handleClick, question, answer }) => {
    return (
        <div className='card__faq-container__question'>
            <div className='card__faq-container__question-header' onClick={() => handleClick(index)}>
                <div className={`${isOpen ? 'card__faq-container__question-header_enquiry show' : 'card__faq-container__question-header_enquiry'}`}>
                    {question}
                </div>
                <img className={`${isOpen ? 'card__faq-container__question-header_arrow rotate' : 'card__faq-container__question-header_arrow'}`} src={arrow} alt='arrow' />
            </div>
            <div className={`${isOpen ? 'card__faq-container__question-answer show' : 'card__faq-container__question-answer'}`}>
                {answer}
            </div>
            <hr />
        </div>
    )
}

export default FaqQuestion
