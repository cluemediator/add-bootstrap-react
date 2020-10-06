import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="m-5">
      <h5 className="mb-3">Add Bootstrap in React - <a href="https://cluemediator.com" target="_blank">Clue Mediator</a></h5>
      <div className="card" style={{ width: '25rem' }}>
        <img src="https://pbs.twimg.com/profile_banners/1187404980988198914/1601635305" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Clue Mediator</h5>
          <p className="card-text">Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          <a href="https://cluemediator.com" target="_blank" className="btn btn-dark">Visit Website</a>
        </div>
      </div>
    </div>
  );
}

export default App;
