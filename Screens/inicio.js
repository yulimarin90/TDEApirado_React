import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

const Inicio = () => {
    return (
        <ImageBackground
      source={{ uri: 'https://media.giphy.com/media/T0t0XcsnJsRhHvZMOa/giphy.gif' }}
      style={styles.container}
      resizeMode="cover"
    >
        <View style={styles.overlay}>
          <Text style={styles.title}>Estás en el Limbo Digital 🌀</Text>
          <Text style={styles.title}>Tus datos ya no te pertenecen... pero al menos ahora eres parte del experimento 😈</Text>
        </View>
      </ImageBackground>
    );
  };
  

export default Inicio;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20,
        borderRadius: 10,
      },
      title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: '#f0f',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
      },
  subtitle: {
    color: '#cccccc',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 30,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#00ffff',
    padding: 12,
  }
});
