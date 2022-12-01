import './index.css'

const EventItem = props => {
  const {eventItemList, onClickStatus} = props
  const {id, imageUrl, name, location, registrationStatus} = eventItemList
  // console.log(props)

  const onStatus = () => {
    onClickStatus(id, registrationStatus)
  }

  return (
    <li>
      <div>
        <button type="button" onClick={onStatus}>
          <img src={imageUrl} alt="event" className="image" />

          <p className="heading">{name}</p>
          <p className="para">{location}</p>
        </button>
      </div>
    </li>
  )
}

export default EventItem
