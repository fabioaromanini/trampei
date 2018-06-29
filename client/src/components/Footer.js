import React from 'react';
import { Layout } from 'antd';

export default () => {
  return (
    <Layout.Footer className="footer">
      Software desenvolvido por{' '}
      <a
        href="https://www.linkedin.com/in/fabioaromanini/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Fábio Romanini
      </a>
      .<br />
      Código disponível no{' '}
      <a
        href="https://www.github.com/fabioaromanini/trampei"
        rel="noopener noreferrer"
        target="_blank"
      >
        Github.
      </a>
    </Layout.Footer>
  );
};
