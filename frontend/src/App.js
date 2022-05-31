import { useState } from 'react';

import Header from './components/header';

import './App.css';
import EditPage from './components/edit';

function App() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="App">
      {
        isEdit
          ? (
            <EditPage setIsEdit={setIsEdit}/>
          )
          : (
            <Header setIsEdit={setIsEdit}/>
          )
      }
    </div>
  );
}

export default App;
