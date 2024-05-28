import "./DefaultButton.css"
const DefaultButton = ({ buttonText }) => {
  return (
    <button
    className="default-button"
    >
      {buttonText}
    </button>
  );
};

export default DefaultButton;