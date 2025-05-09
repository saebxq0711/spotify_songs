import { useEffect, useState } from 'react';
import TopTracks from './TopTracks';
import Player from './Player';

function Dashboard() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    const tokenFromUrl = new URLSearchParams(hash.substring(1)).get("access_token");
    window.history.pushState({}, null, "/dashboard");
    setToken(tokenFromUrl);
  }, []);

  if (!token) return <p>Cargando token...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Bienvenido a tu Dashboard de Spotify</h2>
      <TopTracks token={token} />
      <Player playlistId="0gmM5gd5O3OKHAsQYM2KEa" />
    </div>
  );
}

export default Dashboard;
