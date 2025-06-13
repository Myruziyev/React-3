import React from "react";

const getTheme = () => {
  const hour = new Date().getHours();
  // Dark theme from 6pm (18) to 6am (5)
  if (hour >= 18 || hour < 6) {
    return {
      background: "#222",
      color: "#fff",
      boxShadow: "0 4px 16px rgba(0,0,0,0.7)"
    };
  } else {
    return {
      background: "#fff",
      color: "#222",
      boxShadow: "0 4px 16px rgba(0,0,0,0.2)"
    };
  }
};

export default function ThemeBox() {
  const theme = getTheme();

  return (
    <div style={{
      ...theme,
      padding: "2rem",
      borderRadius: "1rem",
      textAlign: "center",
      margin: "2rem auto",
      maxWidth: "400px"
    }}>
      <h2>{theme.background === "#222" ? "Dark Mode" : "Light Mode"}</h2>
      <p>
        {theme.background === "#222"
          ? "It's after 6pm or before 6am. Dark mode is on!"
          : "It's between 6am and 6pm. Light mode is on!"}
      </p>
    </div>
  );
}