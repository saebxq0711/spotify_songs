// src/Callback.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const token = new URLSearchParams(hash.substring(1)).get("access_token");
    if (token) {
      localStorage.setItem("spotify_token", token);
      navigate("/liked");
    }
  }, [navigate]);

  return <p className="container">Autenticando...</p>;
}

export default Callback;
