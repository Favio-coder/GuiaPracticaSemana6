function UserCard({ user }) {
  if (!user) return null

  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`

  return (
    <article className="user-card">
      <div className="user-card__avatar-wrapper">
        <img
          src={avatarUrl}
          alt={`Avatar de ${user.name}`}
          className="user-card__avatar"
          loading="lazy"
        />
        <span className="user-card__status" aria-label="Usuario activo">●</span>
      </div>
      <div className="user-card__content">
        <header className="user-card__header">
          <h3 className="user-card__name">{user.name}</h3>
          <span className="user-card__username">@{user.username}</span>
        </header>
        <div className="user-card__details">
          <div className="user-card__detail">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>{user.email}</span>
          </div>
          <div className="user-card__detail">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{user.phone}</span>
          </div>
          <div className="user-card__detail">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>{user.website}</span>
          </div>
        </div>
        <address className="user-card__address">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{user.address?.city}, {user.address?.street}</span>
        </address>
        <footer className="user-card__footer">
          <span className="user-card__company">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            {user.company?.name}
          </span>
          <span className="user-card__catchphrase">
            "{user.company?.catchPhrase}"
          </span>
        </footer>
      </div>
    </article>
  )
}

export default UserCard