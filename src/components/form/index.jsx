import { useState } from 'react';

import './form.scss';

function Form (props) {
  const [method, setMethod] = useState('');
  const[url, setUrl] = useState('');
  // const [json, setJson] = useState('');
  const[data, setData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    
    props.handleApiCall({method, url, data});
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
          <input data-testid="form-url" onChange={(e) => setUrl(e.target.value)} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label id="textarea">
        Data Input: 
        <textarea data-testid="form-textarea" rows="5" cols="33" onChange={(e) => setData(e.target.value)/textarea>
        </label>
        <label className="methods">
          <span id="get" onClick={(e) => setMethod('get')}>GET</span>
          <span id="post" onClick={(e) => setMethod('post')}>POST</span>
          <span id="put" onClick={(e) => setMethod('put')}>PUT</span>
          <span id="delete" onClick={(e) => setMethod('delete')}>DELETE</span>
        </label>
      </form>
    </>
  );
  
}

export default Form;
