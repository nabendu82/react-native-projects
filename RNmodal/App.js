import React from 'react'
import { StyleSheet, View } from 'react-native'
import ModalComp from './components/ModalComp'

const App = () => {
  return (
    <View style={styles.container}>
      <ModalComp />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
