import React, { Component } from 'react';
//context
import ProductContextProvider from './context/ProductContextProvider';
//components
import Store from './components/Store';
class App extends Component {
  render() {
    return (
      <ProductContextProvider>
         <Store />
      </ProductContextProvider>
    );
  }
}

export default App;