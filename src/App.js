import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './Component/View'
import Insert from './Component/Insert'
import Edit from './Component/Edit'
import { useState, useEffect } from 'react';
import SingleView from './Component/Single_View';

function App() {
  const [oldvalue, setOldvalue] = useState([]);

  let initvalue;
  if (localStorage.getItem("Student") === null) {
    initvalue = []
  }
  else {
    initvalue = JSON.parse(localStorage.getItem("Student"))
  }


  // Insert ######################################################
  const onSubmit = (name, phone, email, roll_no, grade) => {
    console.log(name, phone, email, roll_no, grade)
    let std_id = 100;
    if (value.length === 0) {
      std_id = 100;
    }
    else {
      std_id = value[value.length - 1].std_id + 1
    }
    const details = {
      std_id: std_id,
      name: name,
      phone: phone,
      email: email,
      roll_no: roll_no,
      grade: grade
    }
    setValue([...value, details])

  }
  // ############################################################

  // Delete ################################################################
  const onDelete = (item) => {
    console.log("delete: " + JSON.stringify(item))
    setValue(value.filter((e) => {
      console.log(e)
      return e !== item
    }));
    localStorage.setItem("Student", JSON.stringify(value))
  }
  // #######################################################################

  // Edit ################################################################
  const onEdit = (val, index) => {

    console.log(val)
    console.log(index)
    console.log(value.splice(index, 1, val))
    localStorage.setItem("Student", JSON.stringify(value))

  }
  // #######################################################################

  const [value, setValue] = useState(initvalue)
  useEffect(() => {
    localStorage.setItem("Student", JSON.stringify(value))
  }, [value])


  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<View value={value} onDelete={onDelete} />} />
            <Route exact path="/single-view/:id" element={<SingleView value={value} />} />
            <Route exact path="/insert" element={<Insert onSubmit={onSubmit} />} />
            <Route exact path="/edit/:id" element={<Edit onEdit={onEdit} value={value} />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
