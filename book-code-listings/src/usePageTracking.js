import { useEffect} from "react";
import { useLocation } from "react-router-dom";
//import ReactGA from "react-ga";

const usePageTracking = () => {
  const location = useLocation();



    useEffect(() => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'Pageview',
        'pagePath': 'https://www.reactjsfoundations.com/'+location.pathname + location.search,
       });
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-GVT9Z3S6EH');
      //console.log(window.dataLayer);
    //ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};

export default usePageTracking;