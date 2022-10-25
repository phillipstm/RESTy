// import './results.scss';


const Results = ({data}) => {
  
    return (
      <section>
        <pre>{{data} ? JSON.stringify({data}, undefined, 2) : null}</pre>
      </section>
    );
  
}

export default Results;
