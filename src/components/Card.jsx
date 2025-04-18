import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

/**
 * Renders a reusable Bootstrap card with title, image, text, and a button.
 *
 * @component
 *
 * @example
 * // Basic usage
 * <Card
 *   title="Card Title"
 *   imageUrl="https://via.placeholder.com/150"
 *   text="This is some content inside the card."
 *   buttonText="Click Me"
 *   onButtonClick={() => alert('Button clicked!')}
 * />
 *
 * @param {Object} props - Card props
 * @param {string} props.title - The title of the card
 * @param {string} props.imageUrl - URL of the image to display
 * @param {string} props.text - Text content inside the card
 * @param {string} props.buttonText - Text for the action button
 * @param {function} props.onButtonClick - Callback when the button is clicked
 * @returns {JSX.Element} A styled card component
 */

const Card = ({
  title,
  imageUrl,
  text,
  buttonText,
  onButtonClick,
  onEdit,
  onDelete,
  showActions = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="card m-3 shadow-sm"
      style={{ width: "18rem", transition: "transform 0.3s ease" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-primary" onClick={onButtonClick}>
          {buttonText}
        </button>
        {showActions && (
          <>
            <button className="btn btn-outline-secondary me-2" onClick={onEdit}>
              Edit
            </button>
            <button className="btn btn-outline-danger" onClick={onDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  showActions: PropTypes.bool,
};
export default Card;
