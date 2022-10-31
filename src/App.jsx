import { useState, useEffect } from 'react';
import './App.scss';
const express = require('express');

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/Header';
import Footer from './components/footer';
import Form from './components/Form';
import Results from './components/Results';

// class App extends React.Component {
const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});


  const callApi = (requestParams) => {
    // mock output
    // const data = {
    //   count: 2,
    //   results: [
    //     { name: '', url: 'http://fakethings.com/1' },
    //     { name: 'fake thing 2', url: 'http://fakethings.com/2' },
    //   ],
    // };
    setData(data);
    setRequestParams(requestParams);
  }
  useEffect{() => {
      axios({
        method: '',
        url: 'https://pokeapi.co/api/v2/pokemon',
        data: { data },
      })
    .then(response => setData(response.data.results));
    }, [requestParams];
  };

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  );

}

export default App;