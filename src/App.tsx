import { hot } from 'react-hot-loader/root';
import React, { FC } from 'react';
import './styles/reset.scss';
import './styles/index.scss';

import Routes from './routes';

const App: FC = () => (
  <>
    {/* <header>Header</header> */}
    <Routes />
    {/* <footer>Footer</footer> */}
  </>
);

export default hot(App);
