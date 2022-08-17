const DarkMode = () => {
  
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  }

  const setDark = () => {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  const setLight = () => {
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
        />
        <div className="slider"></div>
      </label>
      <span>🌒</span>
    </div>
  );
};

export default DarkMode;
