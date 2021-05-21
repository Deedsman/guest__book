import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import { fetchUsers } from "./reducers/users-reducer";
import { useForm } from "react-hook-form";

const MainTable = () => {
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
        id={id}
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
    const addGuest = {
      _id: Math.random(),
      name: e.name,
      text: e.text,
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
          <div className='input-name input-field col s2'>
            <input
              {...register("name", {
                required: true,
                maxLength: 15,
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
              <p>First name cannot exceed 15 characters</p>
            )}
            {errors?.name?.type === "pattern" && (
              <p>Alphabetical characters only</p>
            )}
            <label className='label-name active' htmlFor='first_name2'>
              Name
            </label>
          </div>
          <div className='message  input-field col s6'>
            <textarea
              {...register("text", {
                required: true,
                pattern: /\w/,
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

          <button
            className='input-field btn waves-effect waves-light'
            type='submit'
            name='action'
          >
            Add message
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainTable;
