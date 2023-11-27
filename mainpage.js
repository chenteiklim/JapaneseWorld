import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,TouchableHighlight,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const page1 = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value) => {
    setSearchTerm(value);
    // Add your search logic here
    console.log('Searching for:', value);
  }
  const navigateToSignup = () => {
    navigation.navigate('login');
  };

  return (
    <LinearGradient
      colors={['#3498db', '#7B24D3']}
     start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}


    >
        <View style={styles.navBar}>
            <Text style={styles.japaneseWorld}>JAPANESE WORLD</Text>
            <TouchableHighlight
              underlayColor="#3633E8" // Change the color when the button is pressed
              onPress={() => navigation.navigate('figure')}
              >
            <Text style={styles.Figure}>Figure</Text>
            </TouchableHighlight> 
            <TouchableHighlight
              underlayColor="#3633E8" // Change the color when the button is pressed
              onPress={() => navigation.navigate('doll')}
              >
            <Text style={styles.Figure}>Doll</Text>
            </TouchableHighlight> 
            <TouchableHighlight
              underlayColor="#3633E8" // Change the color when the button is pressed
              onPress={() => navigation.navigate('pillow')}
              >
            <Text style={styles.Figure}>Pillow</Text>
            </TouchableHighlight> 
            <TouchableHighlight
              underlayColor="#3633E8" // Change the color when the button is pressed
              onPress={() => navigation.navigate('manCloth')}
              >
            <Text style={styles.Figure}>Man Cloth</Text>
            </TouchableHighlight> 
            <TouchableHighlight
              underlayColor="#3633E8" // Change the color when the button is pressed
              onPress={() => navigation.navigate('womanCloth')}
              >
            <Text style={styles.Figure}>Woman Cloth</Text>
            </TouchableHighlight> 
            <Text style={styles.DVD}>DVD</Text>
            <View style={styles.searchBar}>
            <TextInput
              style={styles.input}
              placeholder="Search..."
              value={searchTerm}
              onChangeText={handleSearch}
            />  
            <Image source={require('./assets/searchIcon.png')} style={styles.searchIcon} />      

            </View>
            <TouchableHighlight
              underlayColor="#3633E8" // Change the color when the button is pressed
              onPress={() => navigation.navigate('notification')}
              >
              <Image source={require('./assets/notification.jpg')} style={styles.notificationIcon} />     

            </TouchableHighlight>   
            <TouchableHighlight
              underlayColor="#3633E8" // Change the color when the button is pressed
              onPress={() => navigation.navigate('profile')}
              >
              <Image source={require('./assets/profile.png')} style={styles.profileIcon} />     
            </TouchableHighlight>   

            <TouchableHighlight
              underlayColor="#3633E8" // Change the color when the button is pressed
              onPress={() => navigation.navigate('checkout')}
              >
              <Image source={require('./assets/cart.png')} style={styles.cartIcon} /> 
            </TouchableHighlight> 

            <TouchableHighlight
              style={styles.rhombus1}
              underlayColor="#3633E8" // Change the color when the button is pressed
              onPress={() => navigation.navigate('login')}
              >
              <Text style={styles.text1}>Log Out</Text>
            </TouchableHighlight>        
          </View>
          <LinearGradient colors={['#FC710C', '#FD9D55']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.limitedContainer}>
            <View style={styles.promotionText}>
              <Text style={styles.limitedText}>Limited Edition</Text>
              <View style={styles.promotionContent}>
                <View style={styles.rhombus1}>
                  <Text style={styles.text1}>Free Shipping</Text>
                </View>
                <View style={styles.rhombus2}>
                  <Text style={styles.text2}>Shocking price</Text>
                </View>
                </View>
                <View style={[styles.limitedButton, styles.limitedButtonHover]}>
                 <Text style={styles.text3}>Shop Now</Text>
                </View>
            </View>
            <Image source={require('./assets/promotionDetail.png')} style={styles.promotionDetail} />     
          </LinearGradient>
          <View style={styles.verticalImage}>
            <View style={styles.horizontalImage1}>
            <TouchableHighlight
              underlayColor="#3633E8" // Change the color when the button is pressed
              onPress={() => navigation.navigate('figure')}
              >
              <Image source={require('./assets/animeFigure.jpg')} style={styles.item} />     
            </TouchableHighlight> 
            <TouchableHighlight
              underlayColor="#3633E8" // Change the color when the button is pressed
              onPress={() => navigation.navigate('doll')}
              >
              <Image source={require('./assets/animeDoll.jpg')} style={styles.item} />     
            </TouchableHighlight> 
            <TouchableHighlight
              underlayColor="#3633E8" // Change the color when the button is pressed
              onPress={() => navigation.navigate('pillow')}
              >
              <Image source={require('./assets/animePillow.jpg')} style={styles.item} />     
            </TouchableHighlight> 
            <TouchableHighlight
              underlayColor="#3633E8" // Change the color when the button is pressed
              onPress={() => navigation.navigate('manCloth')}
              >
              <Image source={require('./assets/manCloth.jpg')} style={styles.item} />     
            </TouchableHighlight> 
            
            </View>
            <View style={styles.horizontalText}>
          
              <Text style={styles.smallText1}>Figure</Text>
              <Text style={styles.smallText2}>Doll</Text>
              <Text style={styles.smallText3}>Pillow</Text>
              <Text style={styles.smallText4}>Man Cloth</Text>
            </View>
            <View style={styles.horizontalImage2}>
            <TouchableHighlight
              underlayColor="#3633E8" // Change the color when the button is pressed
              onPress={() => navigation.navigate('womanCloth')}
              >
              <Image source={require('./assets/womanCloth.png')} style={styles.item} />     
            </TouchableHighlight> 
            
              <Image source={require('./assets/animeDVD.jpg')} style={styles.item} />     
              <Image source={require('./assets/manCosplay.png')} style={styles.item} />     
              <Image source={require('./assets/womanCosplay.png')} style={styles.item} />     
            </View>
            <View style={styles.horizontalText}>
              <Text style={styles.smallText01}>Woman Cloth</Text>
              <Text style={styles.smallText02}>DVD</Text>
              <Text style={styles.smallText03}>Man Cosplay Outfit</Text>
              <Text style={styles.smallText04}>Woman Cosplay Outfit</Text>
            </View>
          </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height:1400,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  navBar:{
    flexDirection: 'row', // horizontal arrangement of items
    backgroundColor: '#290135',
    height: '60px',
    alignItems: 'center',

  },
  japaneseWorld:{
    fontSize: 16,
    marginLeft: 50,
    color:'yellow',
  },
  Figure:{
    fontSize: 16,
    marginLeft: 50,
    color:'white',

  },

  Doll:{
    fontSize: 16,
    marginLeft: 50,
    color: 'white',

  },

  Pillow:{
    fontSize: 16,
    marginLeft: 50,
    color: 'white',

  },

  manCloth:{
    fontSize: 16,
    marginLeft: 50,
    color: 'white',

  },

  womanCloth:{
    fontSize: 16,
    marginLeft: 50,
    color: 'white',

  },

  DVD:{
    fontSize: 16,
    marginLeft: 50,
    color: 'white',
  },

  notificationIcon: {
    width: 30,
    height: 30,
    marginLeft: 80,
    borderRadius:99,
  },
  profileIcon: {
    width: 30,
    height: 30,
    marginLeft: 30,
    borderRadius:99,
  },
  cartIcon: {
    width: 30,
    height: 30,
    marginLeft: 30,
    borderRadius:99,
  },

  limitedContainer:{
    flexDirection: 'row', // horizontal arrangement of items
    height:250,
  },
  promotionText:{
    marginLeft:140,
    flexDirection:'column',
  },
  limitedText:{
    fontSize: 22,
    color:'white',
    marginLeft:80,
    marginTop:30,
  },
  promotionContent:{
    flexDirection:'row',
    marginTop:20,

  },
  rhombus1:{
    marginLeft: 30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width: 120,/* Adjust the width of the rhombus */
    height: 40, /* Adjust the height of the rhombus */
    backgroundColor: '#3633E8', /* Set the background color of the rhombus */
    borderRadius:20,
  },
  text1:{
    color:'white',
  },
  rhombus2:{
    marginLeft: 10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',

    width: 120,/* Adjust the width of the rhombus */
    height: 40, /* Adjust the height of the rhombus */
    backgroundColor: '#161471', /* Set the background color of the rhombus */
    borderRadius:20,

  },
  text2:{
    color:'white',
  },

  limitedButton: {
    marginTop:20,
    marginLeft:90,
    width:100,
    height:40,
    fontSize: 16,
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 5,
    borderWidth: 2, // Set the border width

    borderColor:'white',
    color:'#fff',
    backgroundColor: '#193913',
    transition: 'background-color 0.3s ease',
  },
  

  text3:{
    marginTop:10,
    marginLeft:20,
    color:'white',
  },
  promotionDetail: {
    marginTop:0,
    marginLeft:80,
    width: 800,
    height: 250,
  },
  horizontalImage1:{
    flexDirection:'row',
  },
  horizontalText:{
    flexDirection:'row',
  },
  horizontalImage2:{
    flexDirection:'row',
  },

  item:{
    marginLeft:120,
    marginTop:60,
    width:220,
    height:220,
  },
  
  smallText1:{
    marginLeft:190,
    marginTop:20,
    fontSize:20,
    color:'white',
  },
  
  smallText2:{
    marginLeft:300,
    marginTop:20,
    fontSize:20,
    color:'white',
  },
  
  smallText3:{
    marginLeft:290,
    marginTop:20,
    fontSize:20,
    color:'white',
  },
  
  smallText4:{
    marginLeft:290,
    marginTop:20,
    fontSize:20,
    color:'white',
  },
  smallText01:{
    marginLeft:160,
    marginTop:20,
    fontSize:20,
    color:'white',
  },
  
  smallText02:{
    marginLeft:260,
    marginTop:20,
    fontSize:20,
    color:'white',
  },
  
  smallText03:{
    marginLeft:240,
    marginTop:20,
    fontSize:20,
    color:'white',
  },
  
  smallText04:{
    marginLeft:160,
    marginTop:20,
    fontSize:20,
    color:'white',
  },
  searchBar: {
    marginLeft: 50,
    width: '280px',
    height: '30px', // Adjust the height as needed
    backgroundColor: '#2FF6DE',
    border: 'none',
    borderRadius: 25, // Optional: Add border radius for rounded corners
    paddingHorizontal: 10, // Optional: Add padding for better aesthetics
    flexDirection: 'row', // Optional: Align text input horizontally
    alignItems: 'center', // Optional: Center text input vertically
  },
  
  input: {
    flex: 1,
    padding: 5,
    fontSize: 16,
  },
  
  searchIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  
});

export default page1;