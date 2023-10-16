function OtherButton({ isActive, ...props }) {
  return (
    <button className={`other-button ${isActive ? "active" : ""}`} {...props} />
  );
}

export default OtherButton;
