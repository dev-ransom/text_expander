
import { FaEdit, FaTimes } from 'react-icons/fa';
import Card from './Shared/Card'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({item}) => {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className=" close" onClick={() => deleteFeedback(item.id)}><FaTimes /></button>
      <button className="bg-purple-900 edit" onClick={() => editFeedback(item)}><FaEdit /></button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
