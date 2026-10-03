import { useAuth0 } from '@auth0/auth0-react';

export default function AuthButton() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div className="auth-container">
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.name}!</p>
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="log-button nav-login"
          >
            Log Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => loginWithRedirect()}
          className="log-button nav-login"
        >
          Log In via Auth0
        </button>
      )}
    </div>
  );
}