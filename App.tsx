
import React from 'react';
import {ProductsContextProvider} from './contexts/ProductContexts'
import Controller from './screen/Controller';

const App = () => {
  return (
    <ProductsContextProvider>
      <Controller/>
    </ProductsContextProvider>
  )
};
export default App;
