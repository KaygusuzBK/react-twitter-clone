function OtherButton({ isActive }) {
  const buttonClassName = isActive ? "active-button" : "inactive-button";

  return <button className={buttonClassName} />;
}

export default OtherButton;
