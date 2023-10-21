export const FlagButton = (props: { index: number; flag: string }) => {
  return (
    <span className="text-xs rounded-full bg-green-800 px-2 lg:py-1 mb-2 lg:mb-0 cursor-default">
      {props.flag}
    </span>
  );
};
