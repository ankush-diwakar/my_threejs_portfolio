const Button = ({
  name,
  isBeam = false,
  containerClass,
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
      {name}
    </Component>
  );
};

export default Button;
