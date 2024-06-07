
import Card from './Shared/Card'

const FeedbackItem = ({ item, handleDelete }) => {
  
  
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="bg-purple-900 close" onClick={() => handleDelete(item.id)}>x</button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
