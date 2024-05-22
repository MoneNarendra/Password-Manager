import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PassManagerApp extends Component {
  state = {
    listPasswords: [],
    passwordVisible: false,
    userSearch: '',
    website: '',
    name: '',
    password: '',
  }

  deleteItem = id => {
    this.setState(prevState => ({
      listPasswords: prevState.listPasswords.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  showPassword = () => {
    this.setState(prevState => ({passwordVisible: !prevState.passwordVisible}))
  }

  searchingUserName = event => {
    this.setState({userSearch: event.target.value})
  }

  addWesite = event => {
    this.setState({website: event.target.value})
  }

  addName = event => {
    this.setState({name: event.target.value})
  }

  addPassword = event => {
    this.setState({password: event.target.value})
  }

  getProfileColor = () => {
    const num = Math.ceil(Math.random() * 11)
    return `profile-color-${num}`
  }

  submitForm = event => {
    event.preventDefault()
    const {website, name, password} = this.state
    const profileColor = this.getProfileColor()
    const newItem = {id: uuidv4(), website, name, password, profileColor}
    this.setState(prevState => ({
      listPasswords: [...prevState.listPasswords, newItem],
      website: '',
      name: '',
      password: '',
    }))
  }

  render() {
    const {
      passwordVisible,
      userSearch,
      listPasswords,
      website,
      name,
      password,
    } = this.state

    const getFilterdList = listPasswords.filter(eachItem =>
      eachItem.website.toLowerCase().includes(userSearch.toLowerCase()),
    )

    return (
      <div className='bg-container'>
        <div className='inner-container'>
          <img
            src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'
            alt='app logo'
            className='app-logo'
          />
          <div className='top-container'>
            <form className='form-container' onSubmit={this.submitForm}>
              <h1 className='form-heading'>Add New Password</h1>
              <div className='input-contianer'>
                <div className='input-img-con'>
                  <img
                    src='https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png'
                    className='input-img'
                    alt='website'
                  />
                </div>
                <input
                  type='text'
                  className='input-ele'
                  placeholder='Enter Website'
                  value={website}
                  onChange={this.addWesite}
                />
              </div>
              <div className='input-contianer'>
                <div className='input-img-con'>
                  <img
                    src='https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png'
                    className='input-img'
                    alt='username'
                  />
                </div>
                <input
                  type='text'
                  className='input-ele'
                  placeholder='Enter Username'
                  value={name}
                  onChange={this.addName}
                />
              </div>
              <div className='input-contianer'>
                <div className='input-img-con'>
                  <img
                    src='https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png '
                    className='input-img'
                    alt='password'
                  />
                </div>
                <input
                  type='password'
                  className='input-ele'
                  placeholder='Enter Password'
                  value={password}
                  onChange={this.addPassword}
                />
              </div>
              <div className='button-con'>
                <button className='addButton' type='submit'>
                  Add
                </button>
              </div>
            </form>
            <div className='top-image-container'>
              <img
                src='https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
                alt='password manager'
                className='pass-mang-img'
              />
            </div>
          </div>
          <div className='bottom-pass-container'>
            <div className='bottom-section-headings'>
              <div className='counting-list-items'>
                <h1 className='bottom-section-heading'>Your passwords </h1>
                <p className='list-count'>{listPasswords.length}</p>
              </div>
              <div className='search-con'>
                <img
                  src='https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png'
                  alt='search'
                  className='search-img'
                />
                <input
                  type='search'
                  className='search-input'
                  value={userSearch}
                  onChange={this.searchingUserName}
                />
              </div>
            </div>
            <hr className='hr-line' />
            <div className='check-box-con'>
              <input
                type='checkbox'
                className='check-box-ele'
                onClick={this.showPassword}
                id='checkbox'
              />
              <label className='checkbox-name' htmlFor='checkbox'>
                Show passwords
              </label>
            </div>
            <div className='list-items-container'>
              {getFilterdList.length === 0 && (
                <div className='no-password-con'>
                  <img
                    src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'
                    alt='no passwords'
                    className='no-pass-img'
                  />
                  <p className='no-password-heading'>No Passwords</p>
                </div>
              )}
              <ul className='list-passwords-con'>
                {getFilterdList.map(eachPass => (
                  <PasswordItem
                    key={eachPass.id}
                    eachPass={eachPass}
                    passwordVisible={passwordVisible}
                    deleteItem={this.deleteItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PassManagerApp
