import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const INITIAL_VALUES = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
}

function App() {
  const [userInput, setUserInput] = useState(INITIAL_VALUES);

  function handleChange(input, value) {
    setUserInput(prevUserInputs => {
        return {
            ...prevUserInputs,
            [input]: + value
        }
    })
  }

  const inputIsValid = userInput.duration >= 1 ; 

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Enter a valid duration</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
