import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const scrollOnThesePaths = ['/detailPage/1','/detailPage/2','/detailPage/3','/detailPage/4','/detailPage/5','/detailPage/6','/detailPage/7','/detailPage/8','/detailPage/9','/detailPage/10','/detailPage/11','/detailPage/12','/detailPage/13','/detailPage/14','/detailPage/15','/detailPage/16','/detailPage/17','/detailPage/18','/detailPage/19','/detailPage/20','/'];


    if (scrollOnThesePaths.includes(pathname)) {
      window.scrollTo(0, 0);
    }  
    } , [pathname]);

  return null;
};

export default ScrollToTop;
