function Player({ playlistId }) {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>🎶 Reproductor</h3>
      <iframe
        title="Spotify Player"
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
        width="100%"
        height="360"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}

export default Player;
