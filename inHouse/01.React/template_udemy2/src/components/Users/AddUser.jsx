import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "../../css/AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AppUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    if (+enteredAge < 1) return;
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <div>
      <ErrorModal title="에러발생!" message="뭔가가 잘못됐습니다!"/>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">유저이름</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChHandler}
          />
          <label htmlFor="age">나이</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChHandler}
          />
          <Button type="submit">유저추가하기</Button>
        </form>
      </Card>
    </div>
  );
};

export default AppUser;
