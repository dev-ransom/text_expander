import { useState } from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";
import RatingSelect from "./RatingSelect";


const FeedbackForm = ({handleAdd}) => {
    const [text, setText] = useState('')
    const [btnIsDisabled, setBtnIsDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)
    const handleTextChange = (e) => {
        if (text === '') {
            setMessage(null)
            setBtnIsDisabled(true)
        } else if (text !== '' && text.trim().length <= 10 ) {
            setMessage("text must be atleast ten characters")
            setBtnIsDisabled(true)
        } else {
            setMessage(null)
            setBtnIsDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            handleAdd(newFeedback)
            setText('')
            
            
        }
    }
    
  return (
      <Card>
          <form onSubmit={handleSubmit}>
              <h2>How would you rate your service with us ?</h2>
              <RatingSelect select={(rating) => setRating(rating)} />
              <div className="input-group">
                  <input type="text" onChange={handleTextChange} value={text} placeholder="Write a review"/>
                  <Button type="submit" isDisabled={btnIsDisabled}>Send</Button>
              </div>
              {message && <div className="message">{message}</div>}
          </form>
    </Card>
  )
}

export default FeedbackForm