import { v4 as uuidv4} from 'uuid'
import React, { useState } from 'react';
import './index.css'
import Header from './components/Header'
import FeedbackData from './Data/constant'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
// import TextExpand from './components/TextExpand';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if (window.confirm('are you sure you want to delete this item?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  
  return (
    <div className="container">
      <Header
        text="FeedBack UI"
        bgColor="rgba(0,0,0,0.4)"
        textColor="#ff6a95"
      />
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      {/* <TextExpand  /> */}
    </div>
  )
}

export default App
