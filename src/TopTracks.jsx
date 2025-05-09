import { useEffect, useState } from 'react';
import { fetchWebApi } from './utils/spotify';

function TopTracks({ token }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const getTracks = async () => {
      const data = await fetchWebApi('v1/me/top/tracks?limit=5', 'GET', null, token);
      setTracks(data.items);
    };
    getTracks();
  }, [token]);

  const createPlaylist = async () => {
    const user = await fetchWebApi('v1/me', 'GET', null, token);
    const uris = tracks.map(t => t.uri);
    const playlist = await fetchWebApi(`v1/users/${user.id}/playlists`, 'POST', {
      name: 'My Top Tracks',
      description: 'Creada desde React',
      public: false
    }, token);
    await fetchWebApi(`v1/playlists/${playlist.id}/tracks?uris=${uris.join(',')}`, 'POST', null, token);
    alert(`¡Playlist "${playlist.name}" creada!`);
  };

  return (
    <div>
      <h3>🎧 Tus Top Tracks</h3>
      <ul>
        {tracks.map(t => (
          <li key={t.id}>{t.name} - {t.artists[0].name}</li>
        ))}
      </ul>
      <button onClick={createPlaylist}>Crear Playlist</button>
    </div>
  );
}

export default TopTracks;
