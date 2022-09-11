import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import Router from './routers/Router'

const App = () => {
  return (
    <SafeAreaView style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
      <StatusBar hidden />
      <Router />
    </SafeAreaView>
  )
}

export default App