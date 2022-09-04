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

      let destination: string = "";

      if (user.data.verified === false) {
        if (resolvedUrl !== "/verify-email") {
          destination = "/verify-email";
        }
      }

      if (
        !user.data.first_name ||
        !user.data.last_name ||
        user.data.fluent_language.length === 0 ||
        user.data.language_to_study.length === 0
      ) {
        destination = "/welcome";
      }

      if (destination !== "") {
        return {
          props: {},
          redirect: {
            destination,
          },
        };
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
