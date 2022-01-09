import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "./Navbar";
import NProgress from "nprogress";

const lAYOUT = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>
      <footer className="bg-dark text-light text-center">
        <div className="container p-4">
          <h3>&copy; Alex Villanueva Soto Portfolio</h3>
          <p>2019 - {new Date().getFullYear()} </p>
        </div>
      </footer>
    </>
  );
};

export default lAYOUT;
