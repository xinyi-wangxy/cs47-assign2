import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { ImageBackground } from 'react-native-web';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>
      <View style={styles.top_bar}>
        <Image
          source={require('./assets/Icons/menu_light.png')}
          style={styles.icon1}/>
        
        <Text
          style={{
            fontFamily: 'AlNile-Bold', // test to see if the font is loaded, feel free to remove this
            fontSize: 40,
            flexGrow: 1,
            marginLeft: 65
          }}>
          ensom
        </Text>
        <Image
          source={require('./assets/Icons/sun.png')}
          style={styles.icon2}
          />
      </View>
      
      <View style={styles.body, Themes.light.shadows}>
      
        <Image
         source={require('./assets/Profiles/mtl.jpg')}
         style={styles.profile}/>
        
        {/* <ImageBackground source={'./assets/Profiles/mtl.jpg'} resizeMode="cover" style={styles.profile}>
        <Text style={styles.mtl}>MTL</Text>
        </ImageBackground> */}
        <View style={styles.audiobox}>
          <Text
            style={{
              fontFamily: 'Arial', 
              fontSize: 20,
              flexGrow: 1,
              marginLeft: 8,
              marginTop: 5
            }}>
            My hottest take: 
          </Text>
          <View style={{flexDirection:'row'}}>
            <Image
            source={require('./assets/Icons/player_light.png')}
            style={{height: 50, width: 50, marginBottom: 20, marginLeft:10}}
            />
            <Image
            source={require('./assets/Icons/audio_waveform_light.png')}
            style={{height: 50, width: 250, marginBottom: 20, marginLeft: 10, marginRight: 10, resizeMode: 'contain'}}
            />
          </View>
        </View>
      </View>

      <View style={styles.navbar}>
        <View style={styles.bicon}>
          <Image
          source={require('./assets/Icons/discover_light.png')}
          style={{height: 50, width: 50}}
          />
          <Image
          source={require('./assets/Icons/heart_light.png')}
          style={{height: 50, width: 50}}
          />
          <Image
          source={require('./assets/Icons/messages_light.png')}
          style={{height: 50, width: 50}}
          />
        </View>

        <View style={styles.btext}>
          <Text
            style={{
              fontFamily: 'Arial', 
              fontSize: 15,
              color: 'white'
            }}>
            Discover 
          </Text>
          <Text
            style={{
              fontFamily: 'Arial', 
              fontSize: 15,
              color: 'white'
            }}>
            Matches
          </Text>
          <Text
            style={{
              fontFamily: 'Arial', 
              fontSize: 15,
              color: 'white'
            }}>
            DMs
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    //justifyContent: 'space-between',
    // alignItems: 'center',
    //justifyContent: 'flex-start',
  },
  top_bar: {
    height: 41,
    marginTop: 42,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignContent: 'space-between'
  },
  icon1: {
    height: 38,
    width: 38,
    marginTop: 8,
    marginLeft: 30,
    alignContent: 'flex-start'
  },
  icon2: {
    height: 38,
    width: 38,
    marginTop: 8,
    marginRight: 30,
    alignContent: 'flex-start'
  },
  body:{
    width: 325,
    height: 460,
    marginLeft: 17,
    marginTop: 50,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile:{
    width: 325,
    height: 357.5,
    marginLeft: 33,
    marginTop: 50,
    borderRadius: 8,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84
  },
  audiobox:{
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 8,
    // shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84,
    backgroundColor: '#ffffff',
    width: 325,
    height: 125,
    marginLeft: 33,
    marginTop: 30,
    position: 'relative',
    justifyContent: "space-around"
  },
  navbar:{
    height: 100,
    backgroundColor: 'black',
    marginTop: 100
  },
  bicon:{
    flexDirection:'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  btext:{
    flexDirection:'row',
    justifyContent: 'space-around',
    marginTop: 2
  },
  mtl:{
    color: 'white',
    fontFamily: 'Arial', 
    fontSize: 15,
  }
});
