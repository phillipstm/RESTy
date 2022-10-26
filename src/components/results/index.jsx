import './results.scss';
// import { useState } from 'react';


const Results = ({data}) => {
  
    return (
      <section>
        <pre>{{data} ? JSON.stringify({data}, undefined, 2) : null}</pre>
      </section>
    );
  
}

export default Results;
