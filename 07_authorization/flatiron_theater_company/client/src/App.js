import { Route, Switch } from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'
import {useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Home from './components/Home'
import ProductionForm from './features/production/ProductionForm'
import EditProductionForm from './features/production/EditProductionForm'
import Navigation from './components/Navigation'
import ProductionDetail from './features/production//ProductionDetail'
import UserPage from './features/user/UserPage'
import SignUp from './features/user/Signup'
import Login from './features/user/Login'
import NotFound from './components/NotFound'
import { UserContext } from './context/userContext'
import {getCurrentUser} from "./features/user/userSlice"
import { getProductionsAsync, productionSelector } from './features/production/productionSlice'

function App() {
  // const [productions, setProductions] = useState([])
  // const [errors, setErrors] = useState(false)
  // const [currentUser, setCurrentUser] = useState(false)
  // const {fetchCurrentUser, user, setUser} = useContext(UserContext)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    // const fetchProductions = () => {
    //   fetch('/productions')
    //   .then(res => {
    //     if(res.ok){
    //       res.json().then(setProductions)
    //     }else {
    //       res.json().then(data => setErrors(data.error))
    //     }
    //   })
    // }
    dispatch(getCurrentUser())
    .then(() => dispatch(getProductionsAsync()))
  },[dispatch])


  // const updateUser = (user) => setUser(user)
  
  // if(!user) return (
  //   <>
  //   <GlobalStyle />
  //   <h1>{errors}</h1>
  //   <Login />
  //   </>
  // )


  return (
    <>
    <GlobalStyle />
    <Navigation />
    { !user? <Login error={'please login'} /> :
      <Switch>

      <Route  path='/productions/new'>
        <ProductionForm />
      </Route>
    {/* TODO make edit component */}
      <Route  path='/productions/:id/edit'>
        <EditProductionForm />
      </Route>
     
      <Route path='/productions/:id'>
          <ProductionDetail />
      </Route>

      <Route path='/users/new'>
        <SignUp />
      </Route>

      <Route path='/users/:id'>
        <UserPage />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>

    
      <Route exact path='/'>
        <Home />
      </Route>

      <Route>
        <NotFound />
      </Route>
      
      </Switch>
    }
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
    body{
      background-color: black; 
      color:white;
    }
    `

