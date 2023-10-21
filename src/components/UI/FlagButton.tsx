export const FlagButton = (props: { index: number; flag: number }) => {
  let flag: string = "";
  let color: string = "";
  switch (props.flag) {
    case 1:
      flag = "Discussion";
      color = "bg-green-800";
      break;
    case 2:
      flag = "Need help";
      color = "bg-red-800";
      break;
    case 3:
      flag = "Resources";
      color = "bg-yellow-600";
      break;
  }
  return (
    <span
      className={`text-xs rounded-full ${color} px-2 mb-2 lg:mb-0 cursor-default `}
    >
      {flag}
    </span>
  );
};
