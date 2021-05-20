import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import { fetchUsers } from "./reducers/users-reducer";
import { useForm } from "react-hook-form";

const MainTable = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const users = useSelector((state) => state.user.users);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addText = (e) => {
    setText(e.target.value);
  };

  const userList = users.map((user, id) => {
    return (
      <Message
        key={user._id}
        name={user.name}
        message={user.text}
        date={user.date}
      />
    );
  });

  const addName = (e) => {
    setName(e.target.value);
  };
  const keyPress = (e) => {
    if (e.code === "Enter" && e.ctrlKey === true) {
      handleSubmit(addMessage(e));
    }
  };
  const addMessage = (e) => {
    debugger;
    //e.preventDefault();
    let date = new Date();
    let currentDate =
      date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate();
    const addGuest = {
      name: e.name,
      text: e.text,
      date: currentDate,
    };
    dispatch(fetchUsers({ type: "ADD_USER", users: addGuest }));
    setText("");
  };

  return (
    <div className='row'>
      {userList}

      <form
        className='col s12'
        onSubmit={handleSubmit(addMessage)}
        onKeyPress={keyPress}
      >
        <div className='row'>
          <div className='input-field col s2'>
            <input
              {...register("name", {
                required: true,
                maxLength: 20,
                pattern: /\w/,
              })}
              onChange={addName}
              id='first_name2'
              type='text'
              className='validate'
              value={name}
              onKeyPress={(e) => {
                if (e.code === "Enter") {
                  e.preventDefault();
                }
              }}
            />
            {errors?.name?.type === "required" && <p>This field is required</p>}
            {errors?.name?.type === "maxLength" && (
              <p>First name cannot exceed 20 characters</p>
            )}
            {errors?.name?.type === "pattern" && (
              <p>Alphabetical characters only</p>
            )}
            <label className='active' htmlFor='first_name2'>
              Enter Name
            </label>
          </div>
          <div className='input-field col s8'>
            <textarea
              {...register("text", {
                required: true,
                pattern: /^[a-zA-Z0-9]+$/,
              })}
              id='icon_prefix2'
              className='materialize-textarea'
              onChange={addText}
              required
              rows='5'
              value={text}
            ></textarea>
            {errors?.text?.type === "required" && <p>This field is required</p>}
            {errors?.text?.type === "pattern" && (
              <p>Alphabetical characters only</p>
            )}
            <label htmlFor='icon_prefix2'>Message</label>
          </div>
          <div className='input-field col s2'>
            <button
              className='btn waves-effect waves-light'
              type='submit'
              name='action'
            >
              Add message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default MainTable;
