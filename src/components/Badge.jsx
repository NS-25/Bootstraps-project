import React from "react";
import PropTypes from "prop-types";

/**
 * Renders a Bootstrap-style badge with support for variants and types.
 *
 * ### Variants:
 * - `primary`
 * - `secondary`
 * - `success`
 * - `danger`
 * - `warning`
 * - `info`
 * - `light`
 * - `dark`
 *
 * ### Types:
 * - `default` (normal rectangular badge)
 * - `pill` (rounded-pill style badge)
 *
 * @component
 *
 * @example
 * // Basic usage with primary variant
 * <Badge variant="primary" label="New" />
 *
 * @example
 * // Success variant with pill type
 * <Badge variant="success" type="pill" label="Active" />
 *
 * @example
 * // Default usage (no props, uses primary/default)
 * <Badge label="Default" />
 *
 * @param {Object} props - Badge props
 * @param {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"} [props.variant="primary"] - Visual style of the badge
 * @param {"default"|"pill"} [props.type="default"] - Shape style of the badge
 * @param {string} props.label - Text displayed inside the badge
 * @returns {JSX.Element} A styled badge element
 */
const Badge = ({ variant = "primary", label, type = "default" }) => {
  // Build class name dynamically based on variant and type

  console.log("Badge rendered with:", { variant, label, type });

  return (
    <span
      className={`badge text-bg-${variant} ${
        type === "pill" ? "rounded-pill" : ""
      }`}
    >
      {label}
    </span>
  );
};

// Declare prop types for validation
Badge.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  type: PropTypes.oneOf(["default", "pill"]),
  label: PropTypes.string.isRequired,
};

export default Badge;
