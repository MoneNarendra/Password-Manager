import './index.css'

const PasswordItem = props => {
  const {eachPass, passwordVisible, deleteItem} = props

  const {id, website, name, password, profileColor} = eachPass

  const deleteClicked = () => {
    deleteItem(id)
  }

  const passwordToShow = passwordVisible ? (
    <p className="password">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="pass-img"
    />
  )

  return (
    <li className="list-item">
      <div className={`profile-con ${profileColor}`}>
        <h1 className="profile">{website[0].toUpperCase()}</h1>
      </div>
      <div className="details-con">
        <p className="website">{website}</p>
        <p className="name">{name}</p>
        {passwordToShow}
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={deleteClicked}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
