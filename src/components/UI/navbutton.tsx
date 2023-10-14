export const NavButton = (props: {
  icon?: React.ElementType;
  text?: string;
  className?: string;
  iconClass?: string;
  customFunc?: () => void;
}) => {
  return (
    <button
      type="button"
      className={props.className}
      onClick={props.customFunc}
    >
      {props.icon && <props.icon className={props.iconClass} />}
      {props.text}
    </button>
  );
};
