function UserCard({ user }) {
  if (!user) return null

  return (
    <article className="user-card">
      <div className="user-card__header">
        <h3 className="user-card__name">{user.name}</h3>
        <span className="user-card__username">@{user.username}</span>
      </div>
      <div className="user-card__body">
        <p className="user-card__email">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="user-card__phone">
          <strong>Teléfono:</strong> {user.phone}
        </p>
        <p className="user-card__website">
          <strong>Web:</strong> {user.website}
        </p>
        <address className="user-card__address">
          <strong>Dirección:</strong> {user.address?.city}, {user.address?.street}
        </address>
      </div>
      <div className="user-card__company">
        <strong>Empresa:</strong> {user.company?.name}
      </div>
    </article>
  )
}

export default UserCard