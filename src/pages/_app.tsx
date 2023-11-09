import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { ToastContainer } from "react-toastify";
import Error404 from "@/components/page/error/Error404";
import { Web3ContextProvider } from "@/context/Web3Context";

export default function App({ Component, pageProps, router }: AppProps) {
  //console.log(pageProps);
  if (pageProps.statusCode == "404") {
    return <Error404 />;
  }
  if (router.pathname.toString() == "/") {
    return <Component {...pageProps} />;
  } else {
    // return <Error404 />
    let pageFlag = Number(router.pathname.includes("boosted"));
    return (
      <>
        <Web3ContextProvider>
          <>
            <Layout color={pageFlag}>
              <Component {...pageProps} />
            </Layout>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </>
        </Web3ContextProvider>
      </>
    );
  }
}
