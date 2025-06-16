import React, { useState, useEffect, useWindowDimensions } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  SafeAreaView,
  Platform,
  Dimensions,
  Linking,
} from 'react-native';


import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const logoSize = Platform.OS === 'web' ? width * 0.1 : width * 0.3;
import { RFValue } from "react-native-responsive-fontsize";




export default function Home({ navigation }) {
  const [isMobile, setIsMobile] = useState(Dimensions.get('window').width < 440);

  useEffect(() => {
    const onChange = ({ window }) => {
      setIsMobile(window.width < 440);
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => subscription?.remove();
  }, []);
  
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? 25 : 0 }}>
      <View style={styles.containerprincipal}>
        <View style={styles.barraverde}>
        <View style={styles.ladoizquierdobarra}>
  <MaterialIcons name="email" size={20} color="white" />
  {!isMobile && (
    <Text style={styles.correo}>Correo electrónico: virtual@tdea.edu.co</Text>
  )}
</View>

<View style={styles.ladoderechobarra}>
  <FontAwesome name="globe" size={20} color="white" />
  {!isMobile && (
    <Text style={styles.cambiodeidioma}>Español - Colombia (es_co)</Text>
  )}
  <FontAwesome name="search" size={20} color="white" />
  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
    <Text style={styles.login}>Acceder</Text>
  </TouchableOpacity>
</View>
         
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.barrablanca}>
            <Image source={require('../images1/logo.png')} style={styles.logo} />

            <TouchableOpacity onPress={() => navigation.replace('home')}>
              <View style={styles.paginaprincipalContainer}>
                <Text style={styles.paginaprincipallink}>Página Principal</Text>
                <View style={styles.greenUnderline} />
              </View>
            </TouchableOpacity>
          </View>

          <ImageBackground
            source={require('../images1/fondoc.png')}
            style={styles.imagenfondo}
            resizeMode="cover"
          >
            <View style={styles.contenedornegro}>
              <Text style={styles.titulotextnegro}>Para tu ingreso</Text>
            </View>
            <View style={styles.contenedornegro1}>
              <Text style={styles.contenidotextnegro}>
                Recuerda que el usuario y contraseña son los mismos de Campus
              </Text>
            </View>
          </ImageBackground>

          <View style={styles.contenedorbuscar}>
            <View style={styles.cajaexterna}>
              <View style={styles.cajainterna}>
                <TextInput
                  placeholder="Buscar cursos"
                  placeholderTextColor="#555"
                  style={styles.input}
                />
                <TouchableOpacity style={styles.botonlupa}>
                  <Ionicons name="search" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.footernegro}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../images1/logonegro.png')}
                style={styles.logo2}
                resizeMode="contain"
              />
              <Text style={styles.textologo}>TdeA Virtual</Text>
              <View style={{ height: 10 }} />
              <Text style={styles.textologo}>
                Soportado por la Unidad de Virtualidad del Tecnológico de Antioquia
              </Text>
            </View>

            <View style={styles.footerColumna1}>
              <Text style={styles.footerTitle}>Información</Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://moodle.org')}>
                <Text style={styles.footerLink}>Comunidad Moodle</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://moodle.org/support')}>
                <Text style={styles.footerLink}>Soporte gratuito Moodle</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://moodle.org/dev')}>
                <Text style={styles.footerLink}>Desarrollo Moodle</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://docs.moodle.org')}>
                <Text style={styles.footerLink}>Documentación Moodle</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://moodle.com')}>
                <Text style={styles.footerLink}>Moodle.com</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footerColumna2}>
              <Text style={styles.footerTitle}>Contacta</Text>
              <Text style={styles.footerText}>
                CALLE 78B NO. 72A - 220 MEDELLÍN - COLOMBIA
              </Text>
              <Text style={styles.footerText}>Correo electrónico: virtual@tdea.edu.co</Text>
              <Text style={styles.footerText}>Follow us</Text>
              <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  <FontAwesome name="facebook" size={30} color="#2e2e2e" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <FontAwesome name="pinterest" size={30} color="#2e2e2e" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <FontAwesome name="twitter" size={30} color="#2e2e2e" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <FontAwesome name="google" size={30} color="#2e2e2e" />
                </TouchableOpacity>
              </View>
            </View>
          </View>


          <View style={styles.footerBottom}>
            <Text style={styles.footerBottomText}>
              Unidad de Virtualidad - Tecnológico de Antioquia
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerprincipal: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  barraverde: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#00723e',
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  correo: {
    color: 'white',
    fontSize: width < 400 ? 16 : 20,
    fontFamily: 'Roboto',
    
  },
  ladoizquierdobarra: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ladoderechobarra: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cambiodeidioma: {
    color: 'white',
    fontSize: width < 400 ? 16 : 20,
    marginRight: 12,
    fontFamily: 'Roboto',
  },
  login: {
    color: 'white',
    fontSize: width < 400 ? 16 : 20,
    fontFamily: 'Roboto',
  },
  barrablanca: {
    backgroundColor: 'white',
    paddingVertical: Platform.OS === 'web' ? 12 : 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  logo: {
    width: logoSize,
    height: logoSize,
    resizeMode: 'contain',
  },
  paginaprincipalContainer: {
    alignItems: 'center',
  },
  paginaprincipallink: {
    color: '#00723e',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: Platform.OS === 'web' ? 20 : (width < 400 ? 16 : 18),
  },
  greenUnderline: {
    height: 2,
    width: '80%',
    backgroundColor: '#00723e',
    marginTop: 4,
  },
  imagenfondo: {
    width: width, // Usa el ancho completo exacto del dispositivo
    height: height * 0.7,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  contenedornegro: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 15,
    maxWidth: '100%', 
    marginHorizontal: 80, // espacio a izquierda y derecha
    marginTop: 90, 
  },
  contenedornegro1: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 15,
    maxWidth: '100%', 
    marginHorizontal: 80, // espacio a izquierda y derecha
    marginTop: 20, 
  },
  titulotextnegro: {
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: RFValue(17),
  },
  contenidotextnegro: {
    color: 'white',
    fontSize: RFValue(13),
    marginTop: 5,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  contenedorbuscar: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    alignItems: 'center',
  },
  cajaexterna: {
    width: Platform.OS === 'web' ? '90%' : '85%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 0,
    padding: 10,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    paddingVertical: Platform.OS === 'web' ? 30 : 20,
  },
  cajainterna: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: 45,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    height: 40,
    fontSize: width < 400 ? 12 : 16,  // si ancho es menor a 400, letra más pequeña
    color: '#333',
  },
  botonlupa: {
    backgroundColor: '#006837',
    paddingHorizontal: 14,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footernegro: {
    flexDirection: width < 768 ? 'column' : 'row',
  backgroundColor: '#2e2e2e',
  padding: 20,
  paddingVertical: 70,
  justifyContent: width < 768 ? 'center' : 'space-between', // centrado en móvil
  alignItems: width < 768 ? 'center' : 'flex-start', // importante para alinear hijos
  },
  logoContainer: {
    flexDirection: 'column',
  alignItems: width < 768 ? 'center' : 'flex-start',
  marginBottom: width < 768 ? 20 : 0,
  marginRight: width < 768 ? 0 : 10,
  },
  logo2: {
    width: logoSize,
    height: logoSize,
    resizeMode: 'contain',
  },
  textologo: {
    color: '#ccc',
    fontSize: Platform.OS === 'web' ? (width < 600 ? 14 : 16) : RFValue(12),
      textAlign: width < 300 ? 'center' : 'left',  // centra en móvil
      fontFamily: 'Roboto',
      fontWeight: 'bold',
  },
  footerColumna1: {
    flex: 1,
    marginRight: 20,
    alignItems: width < 768 ? 'center' : 'flex-start',
    marginTop: width < 768 ? 20 : 0,
  },
  footerColumna2: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: width < 768 ? 'center' : 'flex-start',
    marginTop: width < 768 ? 20 : 0,
  },
  footerTitle: {
    fontSize: RFValue(13),
      color: '#ff6600',
      marginBottom: 10,
      fontWeight: 'bold',
      textAlign: width < 400 ? 'center' : 'left',  // centra en móvil
  },
  footerText: {
    color: '#ccc',
      ffontSize: RFValue(12),
      marginVertical: 2,
      textAlign: width < 400 ? 'center' : 'left',  // centra en móvil
      fontWeight: 'bold',

  },
  footerLink: {
    color: '#ffffff',
    fontSize: Platform.OS === 'web' ? (width < 600 ? 14 : 16) : RFValue(12),
    textDecorationLine: 'underline',
    marginVertical: 2,
    textAlign: width < 400 ? 'center' : 'left',
  },
  footerBottom: {
      backgroundColor: '#111',
      padding: 35,
      alignItems: 'center',  // ya centrado
  },
  footerBottomText: {
    color: '#00aa66',
    fontSize: Platform.OS === 'web' ? (width < 600 ? 14 : 16) : RFValue(12),
    textAlign: 'center',
  },
  socialContainer: {
  flexDirection: 'row',
  marginTop: 10,
  justifyContent: width < 400 ? 'center' : 'flex-start',
},

socialButton: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 10, // espacio entre botones
},
});
