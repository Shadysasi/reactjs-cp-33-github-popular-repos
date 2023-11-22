import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = repoDetails

  return (
    <li className="repo-card-item-container">
      <img src={avatarUrl} alt={name} className="card-item-img" />
      <h1 className="card-item-name">{name}</h1>
      <div className="status-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="status-icon"
        />
        <p className="status-text">{starsCount}</p>
      </div>
      <div className="status-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="status-icon"
        />
        <p className="status-text">{forksCount}</p>
      </div>
      <div className="status-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="status-icon"
        />
        <p className="status-text">{issuesCount}</p>
      </div>
    </li>
  )
}
export default RepositoryItem
