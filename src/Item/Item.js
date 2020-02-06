import React from 'react'

import './item.css';

export default props => {
  return (
    <div className='form-example'>
      <h1>Item component</h1>
      <input placeholder="Username.." />
      <button>Add</button>
      <br />
      <button onClick={props.closeModal}>cancel</button>
    </div>
  )
}
