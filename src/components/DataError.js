import React from 'react';

const DataError = ({message, onRetry}) => (
    <div>
      <p>Could not able to fetch data {message}</p>
      <button onClick={onRetry} >Retry</button>
    </div>
  )


export default DataError;
