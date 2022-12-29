import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './Store';
// import Home from './Home/Home';
// import  Latestmovies from './Home/Latestmovies';
// import Comedymovies from './Home/Comedymovies';
// import Test from './Test';
// import Test1 from './Test1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <Counter />
    {/* <Home1 /> */}
    {/* <App /> */}
    {/* <Home  title="popular movies"/>
    <Latestmovies title="Comedy Movies" />
    <Comedymovies title="Latest Movies"/> */}
    {/* <Test1 /> */}
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
