export const NavButton = (props: {
  icon?: React.ElementType;
  text?: string;
  className?: string;
}) => {
  return (
    <button type="button" className={props.className}>
      {props.icon && <props.icon className="w-4 h-4" />}
      {props.text}
    </button>
  );
};
