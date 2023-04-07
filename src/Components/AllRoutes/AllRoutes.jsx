import React from 'react'
import {Routes, Route} from "react-router-dom";
import { Layout } from '../../App';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';
import WatchScreen from '../../Screens/WatchScreen/WatchScreen';


function HomeRoutes() {
  return (
    <Routes>
        <Route path={'/'} element={<Layout><HomeScreen/> </Layout> }  />
        <Route path={'/auth'} element={<LoginScreen/> }  />
        <Route path={'/search'} element={<Layout><h1>Search</h1> </Layout> }  />
        <Route path={'/watch/:id'} element={<Layout><WatchScreen/></Layout> }  />
    </Routes>
  )
}

export default HomeRoutes
