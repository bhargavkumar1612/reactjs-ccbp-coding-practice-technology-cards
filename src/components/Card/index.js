// Write your code here.
import './index.css'

const Card = props => {
  const {cardDeets} = props
  const {title, description, imgUrl, className} = cardDeets
  return (
    <div className={`card ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <img className="img" src={imgUrl} alt="img" />
    </div>
  )
}

export default Card
