import * as axios from "axios";

const ADD_USER = "ADD_USER";
const LOAD_USERS = "LOAD_USERS";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, users: action.users };
    case ADD_USER:
      let infoGuest = action.users;

      return { ...state, users: [infoGuest, ...state.users] };
    default:
      return state;
  }
};

export const setMessage = (user) => ({ type: ADD_USER, user });
export const setUsers = (users) => ({ type: LOAD_USERS, users });

export const fetchUsers = (guest) => {
  return function (dispatch) {
    dispatch(guest);

    axios
      .post(
        "/api/guest",
        { ...guest.users },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        console.log("guest added");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getGuest = () => {
  return function (dispatch) {
    try {
      axios
        .get("/api", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          const data = res.data;
          dispatch(setUsers(data));
        })
        .then(() => {
          console.log("list guests loaded");
        });
    } catch (error) {
      console.log(error);
    }
  };
};
