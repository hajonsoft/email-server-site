import { useState, useEffect } from "react";

const DEFAULT_CONFIG = {
  loginUrl: "https://giow1026.siteground.us/webmail/log-in",
  featureFlag: false,
};

export function useConfig() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadConfig() {
      try {
        setIsLoading(true);
        const response = await fetch("/config.json");
        if (!response.ok) {
          throw new Error("Config file not found or could not be loaded");
        }
        const data = await response.json();
        setConfig(data);
      } catch (err) {
        console.warn("Using default config due to error:", err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadConfig();
  }, []);

  return { config, isLoading, error };
}
