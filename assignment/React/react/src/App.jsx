import React from "react"
import Welcome from "./welcomejsx"
import JsxParagraph from "./jsxparagraph";
import Greeting from "./greeting";
import UserCard from "./usecard";
import Counter from "./counter";
import ClickButton from "./ClickButton";
import InputForm from "./InputForm";
import LoginLogout from "./LoginLogout";
import VoteEligibility from "./VoteEligibility";
import FruitList from "./FruitList";
import UserList from "./UserList";
import MyForm from "./UseForm";
import UserForm from "./UseForm";
import ValidatedForm from "./ValidatedForm";
import ApiData from "./ApiData";
import LifecycleLogger from "./LifecycleLogger";
import StateCounter from "./StateCounter";
import FetchData from "./FetchData";

function App() {

  return (
    <>
     <Welcome/>
     <JsxParagraph/>
     <Greeting name="Tisha" />
     <UserCard  name="Tisha" age={22} location="India"/>
     <Counter/>
     <ClickButton/>
     <InputForm/>
     <LoginLogout/>
     <VoteEligibility age={20}/>
     <FruitList/>
     <UserList/>
     <UserForm/>
     <ValidatedForm/>
     <ApiData/>
     <LifecycleLogger/>
     <StateCounter/>
     <FetchData/>
    </>
  );
}

export default App
