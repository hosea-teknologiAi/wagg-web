import React from 'react'
import { Helmet } from 'react-helmet';
import { useLocation } from "react-router-dom";
import Header from '../components/Header/Header';


type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}


const NotFound = ({ children, title = 'Wagginton' }: LayoutType) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="app-main">
    <Helmet>
      <title>Page not found &mdash; { title }</title>
    </Helmet>

    <Header isErrorPage />

    <main className={(pathname !== '/' ? 'main-page' : '')}>
      { children }
    </main>
  </div>
  )
}

export default NotFound