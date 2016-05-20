import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Base from '../components/common/base';
import Layout from '../components/common/layout';
import Dumb from '../components/dumb';

export default () => {
  return ReactDOMServer.renderToStaticMarkup(
    <Base>
      <Layout>
        <Dumb/>
      </Layout>
    </Base>
  );
};
