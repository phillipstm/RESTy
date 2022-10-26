import { useState } from 'react';

import './form.scss';

function Form ({handleApiCall}) {

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method:'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    handleApiCall(formData);
  }
  // callApi = (requestParams) => {
      // // mock output
      // const data = {
      //   count: 2,
      //   results: [
      //     {name: 'fake thing 1', url: 'http://fakethings.com/1'},
      //     {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      //   ],
      // };
      // this.setState({data, requestParams});

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
  
}

export default Form;
