import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, StatusBar , Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorFontDarkGithub = '#4F565E';

const linkProfile = 'https://github.com/LeticiaTrindade/'
const profileImage = 'https://avatars.githubusercontent.com/u/61462194?v=4';



const App = () => {

  const handlePressGoGithub = async ()  => {
    console.log("Verificando link");
    const res = await Linking.canOpenURL(linkProfile);
    console.log("Link aprovado");
    if (res){
      Linking.openURL(linkProfile);
    }
  };

  return (
    <SafeAreaView style={styles.container}> 
    <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View style={styles.container}>
        <Image 
          accessibilityLabel='Apenas o rosto de letícia com o fundo branco.'
          style={styles.imgProfile} 
          source={{uri: profileImage}}/>

        <Text 
        accessibilityLabel='Nome: Letícia Trindade'
        style={[styles.defaultText, styles.name]}>Letícia Trindade</Text>

        <Text 
        accessibilityLabel='Nickname: Leticia Trindade'
        style={[styles.defaultText, styles.nickname]}>LeticiaTrindade</Text>

        <Text 
        accessibilityLabel='Descrição: Estudante de Licenciatura em Computação na Universidade Federal Rural de Pernambuco e professoa de programação na escola Byjus FutureSchool. @leticiatrindadet'
        style={[styles.defaultText, styles.description]}>Estudante de Licenciatura em Computação na Universidade Federal Rural de Pernambuco e professoa de programação na escola Byju's FutureSchool. @leticiatrindadet
        </Text>

        <Pressable onPress={handlePressGoGithub}> 
          <View style={styles.button}>
            <Text style={[styles.defaultText, styles.colorFontDarkGithub]}>Open in Github</Text>
          </View>

        <StatusBar style="auto" />
        </Pressable>
      </View>

    </SafeAreaView>
);

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, //expande para a tela inteira.
    backgroundColor: colorGithub,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 23,
  },

  imgProfile: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 2,
    borderColor: 'gray',
    margin: 10,
  },

  defaultText: {
    color: colorFontGithub,
    textAlign: 'justify', 
     
  },

  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  nickname: {
    color: colorFontDarkGithub,
    fontSize: 15,
  },

  description: {
    fontSize: 17,
    fontWeight: 'bold', 
    margin: 15,
  },

  button: {
    backgroundColor: colorFontDarkGithub,
    borderRadius: 40,
    padding: 17,
    margin: 10,
  }
  

});
