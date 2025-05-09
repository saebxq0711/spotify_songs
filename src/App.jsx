const CLIENT_ID = "67b5d61bcd214dd380fa7537d81b1ffa";  // tu Client ID
const REDIRECT_URI = "https://spotify-love-songs.netlify.app/dashboard";  // tu Redirect URI
const SCOPES = ["user-library-read", "playlist-modify-private", "user-top-read"];

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${SCOPES.join('%20')}&show_dialog=true`;


function App() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h1>🎵 Spotify Dashboard</h1>
      <a href={AUTH_URL}>
        <button style={{ fontSize: '1.2rem' }}>Iniciar sesión con Spotify</button>
      </a>
    </div>
  );
}

export default App;
