import { Layout } from './layout/Layout'
import { Login } from './pages/auth/Login'
import { HomePage } from './pages/homePage/HomePage'
import { BookAboutPage } from './pages/bookAboutPage/BookAboutPage'
import { Error404Page } from './pages/error/Error404Page'
import userService from './resource/resourceBook'
import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import styles from './App.module.scss'

function App() {
  let [userData, setUserData] = useState([])

  useEffect(() => {
    userService.getUsersLIst()
    .then(setUserData)
    .catch(() => {
      console.log('error')
    })
    if(localStorage.getItem('mode') === 'true'){
      document.body.classList.add('dark')
    }
    else{
      document.body.classList.remove('dark')
    }
  }, [])



  const changeLike = (id) => {
    const like = userData.map(item => {
      if(id === item.id){
        item = {...item, like: !item.like}
      }
      return item
    })
    setUserData(like)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='sign-in'/>}/>
        <Route path='/home' element={<Layout />}>
          <Route index element={<HomePage userData={userData} changeLike={changeLike}/>}/>
          <Route path='/home/:postId' element={<BookAboutPage userData={userData}/>}/>
        </Route>
        <Route path='/sign-in' element={<Login/>}></Route>
        <Route path='/*' element={<Error404Page/>}/>
      </Routes>
    </>
  )
}

export default App
