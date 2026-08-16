const Button = ({
  name,
  isBeam = false,
  containerClass,
  icon,
  iconPulse = false,
  as: Component = "button",
  ...props
}) => {
  return (
    <Component className={`btn ${containerClass}`} {...props}>
      {isBeam && (
        <span className="relative flex w-3 h-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {icon && (
        <span className="ml-2 inline-flex items-center">
          {iconPulse ? (
            <span className="relative flex h-4 w-4 items-center justify-center">
              <span className="btn-ping"></span>
              <span className="btn-ping_dot"></span>
              <span className="relative z-10 flex items-center justify-center">
                {icon}
              </span>
            </span>
          ) : (
            icon
          )}
        </span>
      )}
      {name}
    </Component>
  );
};

export default Button;
