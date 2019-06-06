import * as React from 'react';
import { render } from 'react-dom';
import Pagination from './Pagination';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center' as 'center'
};

const App = () => (
  <div style={styles}>
    <Pagination />
  </div>
);

render(<App />, document.getElementById('root'));
