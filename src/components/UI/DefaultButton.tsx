export const DefaultButton = (props: {
  text?: string;
  className?: string;
  customFunc?: () => void;
  icon?: React.ElementType;
}) => {
  return (
    <button
      type="button"
      className={props.className ? props.className : "flex"}
      onClick={props.customFunc}
    >
      {props.icon && <props.icon />}
      {props.text}
    </button>
  );
};
