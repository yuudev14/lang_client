import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { get } from "./requests";

const PrivateRoute = (gssp: GetServerSideProps) => {
  return async (ctx: GetServerSidePropsContext) => {
    const { req, resolvedUrl } = ctx;
    try {
      const user = await get("/api/auth/verify", {
        headers: {
          Cookie: req.headers.cookie,
        },
      });

      if (user.data.verified === false) {
        console.log(resolvedUrl);
        if (resolvedUrl !== "/verify-email") {
          return {
            props: {},
            redirect: {
              destination: "/verify-email",
            },
          };
        }
      }
      return gssp(ctx);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      } else {
        console.log(error);
      }
      return {
        props: {},
        redirect: {
          destination: "/login",
        },
      };
    }
  };
};

export default PrivateRoute;
