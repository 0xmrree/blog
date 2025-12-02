function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <img 
              src="mrree_0.png" 
              alt="Profile" 
              className="profile-image"
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Mr Ree</h1>
            <p className="profile-title">Software Engineer</p>
            <p className="profile-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
