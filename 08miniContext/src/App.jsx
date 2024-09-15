
import './App.css'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Learning how to use context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
