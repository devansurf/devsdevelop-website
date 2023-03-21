const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/devansurf">
        <i className="fa-brands fa-github" aria-hidden="true" title="DevsDevelop' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/devanvazquez/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Devan Vazquez' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/pocket_surf/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Pocket Surf' Instagram Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
