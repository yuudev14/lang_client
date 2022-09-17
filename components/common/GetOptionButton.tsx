import { useRouter } from "next/router";
import { navOptionType } from "../../types/types";

type GetOptionButtonProps = {
  option: navOptionType;
  navOptions: any;
};

const GetOptionButton = ({ option, navOptions }: GetOptionButtonProps) => {
  const Icon = navOptions[option as navOptionType].Icon;
  const path = navOptions[option].path;
  const router = useRouter();
  return (
    <>
      <Icon
        size={30}
        className={router.pathname === path ? "text-secondary" : ""}
      />
      <p
        className={`cursor-pointer w-max ${
          router.pathname === path ? "text-secondary" : ""
        }`}>
        {option}
      </p>
    </>
  );
};

export default GetOptionButton;
