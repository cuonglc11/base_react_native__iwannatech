import React , {createContext , useReducer} from "react"
import authState from "./initialsStates/authState"
import ContactState from "./initialsStates/ContactState"
import auth from "./reducers/auth"
import contacts from "./reducers/contacts"

export const GlobalContext = createContext({})
const GlobalProvider=({children}) => {
  const [authRenducer , authDispatct] =   useReducer(auth , authState)
  const [contact , contactDispatct] =   useReducer(contacts , ContactState)

  return(
        <GlobalContext.Provider value={{authRenducer , contact , authDispatct , contactDispatct}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider