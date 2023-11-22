import './index.css'

const LanguageFilterItem = props => {
  const {isSelected, languageDetails, setSelectedLangFilterAndGetRepos} = props
  const {language, id} = languageDetails

  const btnClassName = isSelected ? 'selected-lang-button' : ''

  const onClickLanguageFilter = () => {
    setSelectedLangFilterAndGetRepos(id)
  }

  return (
    <li>
      <button
        type="button"
        className={`btn-name ${btnClassName}`}
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
