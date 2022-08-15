import { GetServerSideProps, GetServerSidePropsContext } from "next";

const PrivateRoute = (gssp: GetServerSideProps) => {
  return async (ctx: GetServerSidePropsContext) => {
    try {
    } catch (error) {
      console.log(error);
      return {
        props: {},
        redirect: {
          destination: "/login",
        },
      };
    }
    return gssp(ctx);
  };
};

export default PrivateRoute;
