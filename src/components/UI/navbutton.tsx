export const NavButton = (props: {
  icon?: React.ElementType;
  text?: string;
  className?: string;
  iconClass?: string;
}) => {
  return (
    <button type="button" className={props.className}>
      {props.icon && <props.icon className={props.iconClass} />}
      {props.text}
    </button>
  );
};
