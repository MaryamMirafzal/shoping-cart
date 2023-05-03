import React, { Component } from 'react';
//context
import ProductContextProvider from './context/ProductContextProvider';

class App extends Component {
  render() {
    return (
      <ProductContextProvider>

      </ProductContextProvider>
    );
  }
}

export default App;