// src/App.jsx
const CLIENT_ID = "TU_CLIENT_ID"; // Reemplaza con tu Client ID
const REDIRECT_URI = "http://localhost:5173/callback";
const SCOPES = ["user-library-read"];
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${SCOPES.join('%20')}`;

function App() {
  return (
    <div className="container">
      <h1>Mis canciones favoritas</h1>
      <a href={AUTH_URL}>
        <button>Iniciar sesión con Spotify</button>
      </a>
    </div>
  );
}

export default App;
