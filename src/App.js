import React from 'react';

import useModal from './useModal';
import Item from './Item/Item';

function App() {
  const [Modal, show, toggle] = useModal(Item)

  return (
    <div className="App">
      <button onClick={() => toggle(!show)}>Add user</button>
      {!show && <Modal closeModal={toggle} />}
    </div>
  );
}

export default App;
