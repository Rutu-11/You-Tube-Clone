import React from 'react'
import {Routes, Route} from "react-router-dom";
import { Layout } from '../../App';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';
import WatchScreen from '../../Screens/WatchScreen/WatchScreen';
import SearchScreen from '../../Screens/SearchScreen/SearchScreen';


function HomeRoutes() {
  return (
    <Routes>
        <Route path={'/'} element={<Layout><HomeScreen/> </Layout> }  />
        <Route path={'/auth'} element={<LoginScreen/> }  />
        <Route path={'/search/:query'} element={<Layout><SearchScreen/></Layout> }  />
        <Route path={'/watch/:id'} element={<Layout><WatchScreen/></Layout> }  />
    </Routes>
  )
}

export default HomeRoutes
