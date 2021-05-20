import React, { useEffect } from "react";
import "materialize-css";
import MainTable from "./MainTable";
import { useDispatch } from "react-redux";
import { getGuest } from "./reducers/users-reducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuest());
  }, [dispatch]);

  return (
    <div className='App'>
      <h4 className='App-header'>Hello Guests</h4>
      <MainTable />
    </div>
  );
}

export default App;
