import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text:
        'Consume Context: In the Text component, we use the useContext hook to get the onboardingRoles, handleDelete, and editItem functions.',
    },
    {
      id: 2,
      rating: 9,
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel eveniet rem enim! Minus blanditiis, velit modi eius sint alias.',
    },
    {
      id: 3,
      rating: 8,
      text:
        'Edit Button: Added a simple handleEdit function that prompts the user for new data and calls editItem with the new data.',
    },
  ])

  //
  // state to manage edit

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  const deleteFeedback = (id) => {
    if (window.confirm('are you sure you want to delete this item?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  // function to update app
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
  }

  // update edit mode
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        editFeedback,
        deleteFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
