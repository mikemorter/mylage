import React from "react";
import PropTypes from "prop-types";

var hasOwn = {}.hasOwnProperty;

function classNames() {
  var classes = [];

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!arg) continue;

    var argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        var inner = classNames.apply(null, arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === "object") {
      if (arg.toString === Object.prototype.toString) {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      } else {
        classes.push(arg.toString());
      }
    }
  }

  return classes.join(" ");
}

const propTypes = {
  tag: PropTypes.elementType,
  color: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool,
  wide: PropTypes.bool,
  wideMobile: PropTypes.bool,
  disabled: PropTypes.bool,
};

const defaultProps = {
  tag: "button",
  color: "",
  size: "",
  loading: false,
  wide: false,
  wideMobile: false,
  disabled: false,
};

const Button = ({
  className,
  tag,
  color,
  size,
  loading,
  wide,
  wideMobile,
  disabled,
  ...props
}) => {
  const classes = classNames(
    "btn",
    color && `btn-${color}`,
    size && `btn-${size}`,
    loading && "is-loading",
    wide && "btn-block",
    wideMobile && "btn-wide-mobile",
    className
  );

  const Component = tag;
  return <Component {...props} className={classes} disabled={disabled} />;
};

Button.prototype = propTypes;
Button.defaultProps = defaultProps;

export default Button;
