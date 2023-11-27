import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableHighlight,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
 
const login = () => {
    const navigation = useNavigation();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (value) => {
      setSearchTerm(value);
      // Add your search logic here
      console.log('Searching for:', value);
    }
    navigation.navigate('login');
  
  return (
    <LinearGradient
    colors={['#3498db', '#7B24D3']}
   start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.container}
  >
      <View style={styles.navBar}>
          <Text style={styles.japaneseWorld}>JAPANESE WORLD</Text>
          <Text style={styles.Figure}>Figure</Text>
          <Text style={styles.Doll}>Doll</Text>
          <Text style={styles.Pillow}>Pillow</Text>
          <Text style={styles.manCloth}>Man Cloth</Text>
          <Text style={styles.womanCloth}>Woman Cloth</Text>
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
          <Image source={require('./assets/notification.jpg')} style={styles.notificationIcon} />     
          <Image source={require('./assets/profile.png')} style={styles.profileIcon} />     
          <Image source={require('./assets/cart.png')} style={styles.cartIcon} /> 
             
        </View>
        <LinearGradient colors={['#FC710C', '#FD9D55']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.limitedContainer}>
          <View style={styles.decoration}>
            <View style={styles.promotionText}>
              <Text style={styles.limitedText}>Limited Edition.</Text>
              <View style={styles.promotionContent}>
                <View style={styles.rhombus1}>
                  <Text style={styles.text1}>Free Shipping</Text>
                </View>
                <View style={styles.rhombus2}>
                  <Text style={styles.text2}>Shocking price</Text>
                </View>
              </View>
                <View style={styles.limitedButton}>
                 <Text style={styles.text3}>Shop Now</Text>
                </View>
            </View>
            <View style={styles.row1}>
              <Image source={require('./assets/mikuPillow.png')} style={styles.item1} />    
              <Image source={require('./assets/animeCloth.png')} style={styles.item2} />     
              <Image source={require('./assets/animedvd .png')} style={styles.item3} />     
              <Image source={require('./assets/pillow2.png')} style={styles.item4} />  
              <Image source={require('./assets/animeShirt.png')} style={styles.item5} />  

            </View>
            <View style={styles.row2}>
             <Image source={require('./assets/animeShirt2.png')} style={styles.item6} />  
             <Image source={require('./assets/animeFigure6.png')} style={styles.item7} /> 
             <Image source={require('./assets/animeFigure5 .png')} style={styles.item8} /> 
             <Image source={require('./assets/animeDoll2.png')} style={styles.item9} /> 
             <Image source={require('./assets/deathAngel.png')} style={styles.item10} />  

            </View>
          </View>
          <View style={styles.signupContainer}> 
            <Text style={styles.title}>Log In</Text>
            <View style={styles.email}>
              <TextInput
                style={styles.emailInput}
                placeholder="Email/ Phone Number/ Username "
              />  
            </View>
            <View style={styles.email}>
            <TextInput
              style={styles.emailInput}
              placeholder="Password "
            />  
            </View>
            <View style={styles.dividerContainer}>
              <View style={styles.divider}></View>
              <Text style={styles.dividerText}>Or</Text>
              <View style={styles.divider2}></View>
            </View>
            <View style={styles.row3}>
              <View style={styles.facebook}>
                <Image source={require('./assets/facebookIcon.png')} style={styles.facebookIcon} />
                <Text style={styles.facebookText}>Facebook</Text>
              </View>
              <View style={styles.facebook}>
                <Image source={require('./assets/googleIcon.jpg')} style={styles.facebookIcon} />
                <Text style={styles.facebookText}>Google</Text>
              </View>
            </View>
            <View>
              <Text style={styles.policy}>     
                Forgot Password
              </Text>
            </View>
            <View style={styles.loginContainer}>
              <Text style={styles.loginDescription}>New to Japanese World?</Text>
              <TouchableHighlight
                underlayColor="#3633E8" // Change the color when the button is pressed
                onPress={() => navigation.navigate('signup')}
                >
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableHighlight>     
            </View>
            <TouchableHighlight style={styles.button1}
                underlayColor="#3633E8" // Change the color when the button is pressed
                onPress={() => navigation.navigate('mainpage')}
                >
                <Text style={styles.loginText2}>Log In</Text>
              </TouchableHighlight>    
                
          </View> 
            
          
          </LinearGradient>
  </LinearGradient>
);
}
const styles = StyleSheet.create({
      container: {
          height:1400,
          flex: 1,
        },
        policy:{
          fontSize:12,
          marginLeft:40,
          marginTop:10,
          color:'darkblue'
        },
      signupContainer:{
        marginLeft:300,
        marginTop:100,
        width:400,
        height:520,
        backgroundColor:'#FFFDD0',
      },
      dividerContainer:{
        marginTop:20,
        marginLeft:30,
        flexDirection:'row',
      },
      loginContainer:{
        flexDirection:'row',
        marginTop:30,
        marginLeft:100,
      },
      dividerText:{
        marginLeft:20,
      },
      divider2:{
        marginTop:10,
        width:130,
        height:1, 
        backgroundColor:'#808080',
        marginLeft:20,
      },
      row1:{
        marginTop:20,
        flexDirection:'row',
      },
      row2:{
        marginTop:30,
        flexDirection:'row',
      },
      facebook:{
        flexDirection:'row',
        marginLeft:25,
        width:150,
        height:35,
        borderWidth: 1,
        borderRadius:2,
        backgroundColor: '#AEFAF1',
      },
      divider:{
        marginTop:10,
         width:130,
         height:1, 
         backgroundColor:'#808080',
      },
      facebookText:{
        marginLeft:10,
        marginTop:7,

      },
      row3:{
        marginLeft:10,
        marginTop:40,
        flexDirection:'row',
      },
      facebookIcon:{
        marginLeft:25,
        marginTop:5,
        width:25,
        height:25,
      },
      title:{
        fontSize:20,
        marginLeft:40,
        marginTop:30,
      },
      item2:{
        marginLeft: 20,
        width:150,
        height:150,
        marginTop:10,
      },
      item1:{
        position: 'absolute',
        width:170,
        height:170,
        left:130,
        zIndex:20,
      },
      item3:{
        position: 'absolute',
        width:150,
        height:150,
        left:260,
        top:20,
        zIndex:99
      },
      item4:{
        position: 'absolute',
        width:170,
        height:170,
        left:380,
        top:10,
        zIndex:40,
      },
      item5:{
        position: 'absolute',
        width:150,
        height:150,
        left:510,
        top:10,
        zIndex:30,
      },
      item6:{
        position: 'absolute',
        width:170,
        height:200,
        left:10,
        zIndex:20,
      },
      item7:{
        position: 'absolute',
        width:150,
        height:180,
        left:110,
        top:10,
        zIndex:90,
      },
      item8:{
        position: 'absolute',
        width:170,
        height:200,
        left:200,
        zIndex:20,
      },
      item9:{
        position: 'absolute',
        width:100,
        height:190,
        left:300,
        zIndex:20,
      },
      item10:{
        position: 'absolute',
        width:190,
        height:190,
        left:400,
        zIndex:30,
      },
      item11:{
        position: 'absolute',
        width:170,
        height:170,
        left:510,
        zIndex:10,
        top:20,
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
      emailInput: {
        marginTop:20,
        marginLeft:30,
        width: '330px',
        height: '35px', // Adjust the height as needed
        backgroundColor: '#AEFAF1',
        borderWidth: 1,
        borderRadius: 5, // Optional: Add border radius for rounded corners
        paddingHorizontal: 10, // Optional: Add padding for better aesthetics
        flexDirection: 'row', // Optional: Align text input horizontally
        alignItems: 'center', // Optional: Center text input vertically
      },

       email: {
        padding: 5,
        fontSize: 16,
      },
      searchIcon: {
        width: 25,
        height: 25,
        marginLeft: 10,
      },
      
      input: {
        flex: 1,
        padding: 5,
        fontSize: 16,
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
        height:700,
      },
      decoration:{
        flexDirection: 'column', // horizontal arrangement of items
      },
      promotionText:{
        marginTop:20,
        marginLeft:200,
        flexDirection:'column',
      },
      limitedText:{
        fontSize: 28,
        color:'white',
        marginLeft:60,
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
      
      button1:{
        marginLeft: 30,
        marginTop: 30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width: 330,/* Adjust the width of the rhombus */
        height: 40, /* Adjust the height of the rhombus */
        backgroundColor: 'yellow', /* Set the background color of the rhombus */
        borderRadius:4,
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
        color:'#fff',
        backgroundColor: '#193913',
        transition: 'background-color 0.3s ease',
      },
      
    
      text3:{
        marginTop:10,
        marginLeft:20,
        color:'white',
      },
      promotionDetail2: {
        marginTop:30,
        marginLeft:0,
        width: 700,
        height: 390,
      },
      loginImg:{
        marginTop:40,
        marginLeft:0,
        width: 400,
        height: 500,
      },
      loginButton:{
        marginLeft: 10,
        position: 'absolute',
        top: 480,
        left: 820,
        
        width: 120,/* Adjust the width of the rhombus */
        height: 40, /* Adjust the height of the rhombus */
        backgroundColor: '#161471', /* Set the background color of the rhombus */
      },
      loginText:{
        fontSize:16,
        color:'red',
        marginLeft:20,
        marginBottom:15,
      },
      loginText2:{
        fontSize:16,
        marginLeft:18,
      },
    
})
export default login;