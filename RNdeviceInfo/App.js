import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import DeviceInfoOne from './pages/DeviceInfoOne';
import DeviceInfoTwo from './pages/DeviceInfoTwo';

const App = () => {
  const [activeTab, setActiveTab] = useState('infoOne');

  return (
    <SafeAreaView style={styles.container}>
      {activeTab === 'infoOne' ? <DeviceInfoOne title="React Native Device Info #1" />
      : activeTab === 'infoTwo' ? <DeviceInfoTwo title="React Native Device Info #2" />
      : null}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('infoOne')}>
          <Text style={[styles.tabText, activeTab === 'infoOne' && styles.boldText]}>
            Info #1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('infoTwo')}>
          <Text style={[styles.tabText,activeTab === 'infoTwo' && styles.boldText]}>
            Info #2
        </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tabBar: {
    flexDirection: 'row',
    borderTopColor: '#333333',
    borderTopWidth: 1,
  },
  tab: {
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: '#333333',
  },
  boldText: {
    fontWeight: '700',
  },
})

export default App