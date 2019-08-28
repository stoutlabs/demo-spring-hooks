import React from "react"
import styled from "styled-components"

import Faq from "./Faq"
import { StyledFaqsList } from "./faq-styles"

const faqsData = [
  {
    question: "What does FAQ stand for?",
    answer: "Frequently Asked Question!",
  },
  {
    question: "What is the best ice cream flavor?",
    answer: "Coffee with fudge ripple, or homemade strawberry.",
  },
]

const FaqsList = () => {
  return (
    <StyledFaqsList>
      {faqsData.map((faq, i) => (
        <Faq key={"faq_" + i} question={faq.question} answer={faq.answer} />
      ))}
    </StyledFaqsList>
  )
}

export default FaqsList
