import { useState, useEffect } from 'react';

export const useSpotify = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {

    const localToken = window.localStorage.getItem("plot_twist_token");
    const hash = window.location.hash;

    if (!localToken && hash) {
      const params = new URLSearchParams(hash.substring(1));
      const tokenFromUrl = params.get("access_token");

      if (tokenFromUrl) {
        window.localStorage.setItem("plot_twist_token", tokenFromUrl);
        setToken(tokenFromUrl);
        window.location.hash = "";
      }
    } else {
      setToken(localToken);
    }
  }, []);

  const logout = () => {
    window.localStorage.removeItem("plot_twist_token");
    setToken(null);
    window.location.href = "/"; 
  };

  return { token, logout };
};