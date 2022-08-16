import { GetServerSidePropsContext } from "next";
import { get } from "./requests";

const alreadylogin = async ({ req }: GetServerSidePropsContext) => {
  try {
    await get("/api/auth/verify", {
      headers: {
        Cookie: req.headers.cookie,
      },
    });
    return {
      props: {},
      redirect: {
        destination: "/",
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};

export default alreadylogin;
