import './index.css'

const PasswordItem = props => {
  const {itemDetails, isShowClicked, deleteItem} = props
  const {
    id,
    website,
    username,
    password,
    randomBackgroundClassName,
  } = itemDetails
  const firstLetter = username[0].toUpperCase()

  const passToDisplay = isShowClicked ? (
    <p className="pass userdetails-item">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-img"
    />
  )

  const deletePassItem = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div className="password-item-con">
        <div className="logo-user-con">
          <div className={`user-name-logo ${randomBackgroundClassName}`}>
            <p>{firstLetter}</p>
          </div>
          <div className="user-details-con">
            <p className="website-name userdetails-item">{website}</p>
            <p className="username userdetails-item">{username}</p>
            {passToDisplay}
          </div>
        </div>
        <button
          type="button"
          className="del-btn"
          onClick={deletePassItem}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
