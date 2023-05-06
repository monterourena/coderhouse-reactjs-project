import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({component}) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{component}</>;
}