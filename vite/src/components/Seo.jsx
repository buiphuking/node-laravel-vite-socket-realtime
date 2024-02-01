import React from "react";
import { Helmet } from "react-helmet";

const Seo = () => {
  return (
    <div className=''>
      <Helmet>
        <meta name="title" content="aaaaa" />
        <title>My Title aaaaaaaaaaa</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      ...
    </div>
  );
};

export default Seo;
