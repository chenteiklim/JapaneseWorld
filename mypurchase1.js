import React from 'react';
import { StyleSheet, Text, View, Image,TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const mainpage = () => {
  const navigation = useNavigation();

  
  

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
              <Image source={require('./assets/searchIcon.png')} style={styles.searchIcon} />      
            </View>
            <Image source={require('./assets/notification.jpg')} style={styles.notificationIcon} />     
            <Image source={require('./assets/profile.png')} style={styles.profileIcon} />     
            <Image source={require('./assets/cart.png')} style={styles.cartIcon} /> 
            <TouchableHighlight
              style={styles.rhombus1}
              underlayColor="#3633E8" // Change the color when the button is pressed
              onPress={() => navigation.navigate('mainpage')}
              >
              <Text style={styles.text1}>Home</Text>
            </TouchableHighlight>              
        </View>
        
            <View style={styles.verticalContainer}>
          <View style={styles.horizontalContainer}>
            <View style={styles.verticalAccount}>
                <View style={styles.horizontalContainer}>
                    <Image source={require('./assets/profileIcon.png')} style={styles.profileIcon2} /> 
                    <Text style={styles.profileText}>hqopwox_99</Text>
                </View>
                <View style={styles.horizontalContainer2}>
                    <Image source={require('./assets/profile.png')} style={styles.profileIcon2} /> 
                    <Text style={styles.accountText2}>Account</Text>
                </View>
                <Text style={styles.text001}>Profile</Text>
                <Text style={styles.text001}>Bank & Card</Text>
                <Text style={styles.text001}>Address</Text>
                <Text style={styles.text001}>Change Password</Text>
                <Text style={styles.text001}>Notification Setting</Text>
                <View style={styles.horizontalContainer2}>
                   <Image source={require('./assets/myPurchaseImg.png')} style={styles.profileIcon2} />
                    <TouchableHighlight
                    underlayColor="#3633E8" // Change the color when the button is pressed
                    onPress={() => navigation.navigate('mypurchase1')}
                    >
                        <Text style={styles.accountText2a}>My purchase</Text>
                    </TouchableHighlight>   
                    
                </View>
                <View style={styles.horizontalContainer2}>
                <Image source={require('./assets/notification.jpg')} style={styles.notification2} />     
                    <Text style={styles.accountText2}>Notification</Text>
                </View>
                <Text style={styles.text001}>Order Update</Text>
                <Text style={styles.text001}>Promotion</Text>
            </View>
            <View style={styles.verticalAccount2}> 
              <View style={styles.horizontalContainer3}>
                <Text style={styles.text02}>To pay</Text>
                <TouchableHighlight
                    underlayColor="#3633E8" // Change the color when the button is pressed
                    onPress={() => navigation.navigate('mypurchase2')}
                >
                  <Text style={styles.text01}>To Ship</Text>
                </TouchableHighlight>   
                <Text style={styles.text01}>To received</Text>
                <Text style={styles.text01}>Completed</Text>
              </View>
              <View style={styles.horizontalContainer3}>
                <Text style={styles.text09}>hqopwox_99</Text>
              
                  <Text style={styles.text010}>To Pay</Text>
            
                    
                
              </View>
              <View style={styles.horizontalContainer4}>
              <Image source={require('./assets/animeFigure.jpg')} style={styles.image1} />     
                <Text style={styles.text011}>Okita Souji Figure</Text>
                <View style={styles.verticalContainer100}>
                  <Text style={styles.text012}>x1</Text>
                  <Text style={styles.text013}>$100.00</Text>
                </View>
              </View>
              <View style={styles.horizontalContainer4}>
                <Image source={require('./assets/chopper.jpg')} style={styles.image1} />     
                <Text style={styles.text011}>Chopper Doll</Text>
                <View style={styles.verticalContainer100}>
                  <Text style={styles.text014}>x1</Text>
                  <Text style={styles.text015}>$80.00</Text>
                </View>
              </View>
              <View style={styles.horizontalContainer4}>
                <View>                
                  <Text style={styles.text016}>2 item</Text>
                </View>
                <View>                
                  <Text style={styles.text017}>Amount Payable</Text>
                </View>
                <View>                
                  <Text style={styles.text018}>$180.00</Text>
                </View>
              </View>
             
             
            </View>
          </View>  
        </View>  
        
       
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height:1400,
  },
  image1:{
    width:120,
    height:120,
  },
  rhombus99:{
    zIndex:99,
    left: 630,
    top: 120,
    width:140,
    height:40,
    position: 'absolute',
  },
  text01:{
    color:'white',
    marginLeft:80,
    fontSize:18,
  },
  text02:{
    color:'lightpink',
    fontSize:18,
    
  },
  text09:{
    color:'white',
    fontSize:18,
    
  },
  text010:{
    color:'white',
    fontSize:18,
    marginLeft:360,
  },
  text011:{
    color:'white',
    fontSize:18,
    marginLeft:40,
  },
  
  text012:{
    color:'white',
    fontSize:18,
    marginLeft:170,

  },
  
  text013:{
    color:'white',
    fontSize:18,
    marginLeft:170,
    marginTop:30,

  },
  text014:{
    color:'white',
    fontSize:18,
    marginLeft:200,

  },
  
  text015:{
    color:'white',
    fontSize:18,
    marginLeft:200,
    marginTop:30,

  },
  
  text016:{
    color:'white',
    fontSize:18,
    marginTop:50,
  },
  
  text017:{
    color:'white',
    fontSize:18,
    marginLeft:120,
    marginTop:50,

  },
  
  text018:{
    color:'white',
    fontSize:18,
    marginLeft:160,
    marginTop:50,

  },
  text03:{
    color:'white',
    marginLeft:20,
    marginTop:90,
    fontSize:18,
  },
  text04:{
    color:'white',
    marginLeft:20,
    marginTop:60,
    fontSize:18,
  },
  verticalAccount:{
    marginLeft: 150,
    marginTop: 40,
  },
  verticalAccount2:{
    marginLeft: 150,
    marginTop: 40,
    width:600,
    height:700,
    backgroundColor:'black',
  },
  orderStatus:{
    width:'700px',
    height:'700px',
    backgroundColor:'black',
    marginLeft: 150,
    marginTop: 40,
  },
  imageBackground:{
    flexDirection:'row',
    backgroundColor:'white',
    width:30,
    height:30,
    borderRadius:99,
    alignItems: 'center',
    justifyContent:'center',

  },
  addressImg:{
    marginLeft:150,
    marginTop:40,
    width:800,
    height:900,
  },
  profileIcon:{
    width:150,
    height:150,
  },
  text001:{
    color:'white',
    marginLeft: 55,
    marginTop: 20,
  },

  horizontalContainer2:{
    marginTop:30,
    flexDirection:'row',
  },
  horizontalContainer3:{
    flexDirection:'row',
    marginLeft:30,
    marginTop:30,

  },
  horizontalContainer4:{
    flexDirection:'row',
    marginLeft:30,
    marginTop:30,

  },


  profileText:{
    color:'white',
    marginLeft:20,
    fontSize:18,
  },
  accountText:{
    color:'white',
    marginLeft:25,
    fontSize:18,
  },
  accountText2:{
    color:'white',
    marginLeft:20,
    fontSize:18,
  },
  accountText2a:{
    color:'#FEC5E5',
    marginLeft:20,
    fontSize:18,
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

  searchBar:{
    marginLeft: 50,
    width:'280px',
    height: '30px',
    backgroundColor: '#2FF6DE',

  },
  searchIcon: {
    width: 30,
    height: 30,
    marginLeft: 250,
  },
  
  notificationIcon: {
    width: 30,
    height: 30,
    marginLeft: 80,
    borderRadius:99,
  },
  notification2: {
    width: 25,
    height: 25,
    borderRadius:99,
  },
  profileIcon: {
    width: 30,
    height: 30,
    marginLeft: 30,
    borderRadius:99,
  },
  profileIcon2: {
    width: 25,
    height: 25,
    borderRadius:99,
  },
  cartIcon: {
    width: 30,
    height: 30,
    marginLeft: 30,
    borderRadius:99,
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
  title:{
    color:'white',
    fontSize:24, 
    marginLeft:480,
    marginTop:40,
  },

  profileImg: {
    width: 450,
    height: 600,
    marginLeft: 160,
    marginTop: 40,

  },
  
  horizontalContainer:{
    flexDirection:'row',
  },

  uploadProfileImg:{
    width: 250,
    height: 300,
    marginLeft: 100,
    marginTop: 40,
  }

});

export default mainpage;