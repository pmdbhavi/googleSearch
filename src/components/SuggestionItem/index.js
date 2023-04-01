import './index.css'

const SuggestionItem = props => {
  const {details, inputValue} = props
  const {suggestion} = details

  const suggest = () => {
    inputValue(suggestion)
  }

  return (
    <li className="suggestionCon">
      <p className="para">{suggestion}</p>
      <button className="button" type="button" onClick={suggest}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
