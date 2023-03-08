import React from 'react'
import {Routes, Route} from "react-router-dom";
import { Layout } from '../../App';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';
function HomeRoutes() {
  return (
    <Routes>
        <Route path={'/'} element={<Layout><HomeScreen/> </Layout> }  />
        <Route path={'/auth'} element={<LoginScreen/> }  />
        <Route path={'/search'} element={<Layout><h1>Search</h1> </Layout> }  />
    </Routes>
  )
}

export default HomeRoutes
