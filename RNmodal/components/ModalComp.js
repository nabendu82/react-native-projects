import React, { useState } from 'react'
import { Image, Modal, StyleSheet, Text, Pressable } from "react-native";

const ModalComp = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
              <Image 
                source={require('../assets/react-native.jpg')}
                style = {styles.image}
              />
              <Text style = {styles.text}>
              React Native combines the best parts of native development with React. 
              </Text>
              <Text 
                style={styles.closeText}
                onPress={() => setModalVisible(!modalVisible)}>Close
              </Text>
            </Modal>
            <Pressable
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>About React Native</Text>
            </Pressable>
        </>
    );
}


const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#009688',
    elevation: 8
  },
  buttonText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  image: {
    marginTop: 150,
    marginBottom: 10,
    width: '100%',
    height: 350,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: '#00479e',
    textAlign: 'center',
  }
  });

export default ModalComp