import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Toolkit from './Toolkit';
import './fonts.css';

const load = () => render(
  (
    <AppContainer>
      <Toolkit />
    </AppContainer>
  ), document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./Toolkit', load);
}

load();
