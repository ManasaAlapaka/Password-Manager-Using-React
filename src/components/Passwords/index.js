import './index.css'
import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'

const classNamesList = [
  'user-1',
  'user-2',
  'user-3',
  'user-4',
  'user-5',
  'user-6',
  'user-7',
]
class Passwords extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    count: 0,
    isShowClicked: false,
    searchInput: '',
  }

  onWebsiteChange = event => {
    this.setState({website: event.target.value})
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  OnSearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItem = id => {
    const {passwordsList} = this.state
    const filteredList = passwordsList.filter(each => each.id !== id)
    this.setState(prevState => ({
      count: prevState.count - 1,
      passwordsList: filteredList,
    }))
  }

  onCheckBoxChanged = () => {
    this.setState(prevState => ({
      isShowClicked: !prevState.isShowClicked,
    }))
  }

  addNewPass = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const randomBackgroundClassName =
      classNamesList[Math.floor(Math.random() * classNamesList.length)]
    const newPassword = {
      id: v4(),
      website,
      username,
      password,
      randomBackgroundClassName,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      count: prevState.count + 1,
      website: '',
      username: '',
      password: '',
    }))
  }

  render() {
    const {
      passwordsList,
      website,
      username,
      password,
      count,
      isShowClicked,
      searchInput,
    } = this.state
    const searchResult = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="background-con">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="add-new-pass-con">
            <form onSubmit={this.addNewPass} className="form-con">
              <h1 className="add-new-pass-text">Add New Password</h1>
              <div className="input-con">
                <div className="input-img-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-img"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-field"
                  value={website}
                  onChange={this.onWebsiteChange}
                />
              </div>
              <div className="input-con">
                <div className="input-img-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-img"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-field"
                  value={username}
                  onChange={this.onUsernameChange}
                />
              </div>
              <div className="input-con">
                <div className="input-img-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-img"
                  />
                </div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-field"
                  value={password}
                  onChange={this.onPasswordChange}
                />
              </div>
              <div className="btn-con">
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="password-manager-img"
              />
            </div>
          </div>
          <div className="your-passwords-con">
            <div className="password-search-con">
              <div className="pass-name-count-con">
                <h1 className="your-pass-title">Your Passwords</h1>
                <p className="pass-count">{count}</p>
              </div>
              <div className="input-con search-con">
                <div className="input-img-con search-img-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="input-img"
                  />
                </div>
                <input
                  type="search"
                  placeholder="Search"
                  className="input-field search-field"
                  onChange={this.OnSearchInputChange}
                />
              </div>
            </div>
            <hr className="line" />
            <div className="show-pass-con">
              <div className="show-pass-check-con">
                <input
                  type="checkbox"
                  className="check"
                  onChange={this.onCheckBoxChanged}
                  value="checkbox"
                  id="check"
                />
                <label className="show-pass-text" htmlFor="check">
                  Show Passwords
                </label>
              </div>
            </div>
            {count === 0 || searchResult.length === 0 ? (
              <div className="no-pass-img-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-pass-display-img"
                />
                <p className="no-pass-text">No Passwords</p>
              </div>
            ) : (
              ''
            )}
            <ul className="passwords-list-con">
              {searchResult.map(each => (
                <PasswordItem
                  key={each.id}
                  itemDetails={each}
                  isShowClicked={isShowClicked}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Passwords
