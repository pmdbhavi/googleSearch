import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {input: ''}

  searchInput = event => {
    this.setState({input: event.target.value})
  }

  suggestionLine = suggestion => {
    this.setState({input: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {input} = this.state
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(input.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="logo"
          />
          <div className="search-container">
            <div className="con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search"
              />
              <input
                type="search"
                className="input"
                placeholder="Search Google"
                value={input}
                onChange={this.searchInput}
              />
            </div>
            <ul className="suggestionList">
              {searchResult.map(each => (
                <SuggestionItem
                  details={each}
                  inputValue={this.suggestionLine}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
