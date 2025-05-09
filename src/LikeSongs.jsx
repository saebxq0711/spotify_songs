// src/LikedSongs.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function LikedSongs() {
  const [tracks, setTracks] = useState([]);
  const token = localStorage.getItem("spotify_token");

  useEffect(() => {
    const fetchLikedSongs = async () => {
      try {
        const res = await axios.get("https://api.spotify.com/v1/me/tracks?limit=20", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTracks(res.data.items);
      } catch (err) {
        console.error("Error fetching liked songs", err);
      }
    };
    if (token) fetchLikedSongs();
  }, [token]);

  return (
    <div className="container">
      <h2>Mis canciones que me gustan</h2>
      {tracks.map((item, index) => (
        <div key={index} style={{ marginBottom: "1.5rem" }}>
          <iframe
            src={`https://open.spotify.com/embed/track/${item.track.id}`}
            width="100%"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default LikedSongs;
