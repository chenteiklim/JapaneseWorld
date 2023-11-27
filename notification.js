import React from 'react';
import { StyleSheet, Text, View, Image,TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const mainpage = () => {
  const navigation = useNavigation();

  const navigateToSignup = () => {
    navigation.navigate('login');
  };
  const navigateToLimited = () => {
    navigation.navigate('limited');
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
                        <Text style={styles.accountText2}>My purchase</Text>
                    </TouchableHighlight>   
                    
                </View>
                <View style={styles.horizontalContainer2}>
                <Image source={require('./assets/notification.jpg')} style={styles.notification2} />     
                    <Text style={styles.accountText2a}>Notification</Text>
                </View>
                <Text style={styles.text001}>Order Update</Text>
                <Text style={styles.text001}>Promotion</Text>
            </View> 
            <View style={styles.orderStatus}>
                <Text style={styles.text01}>Subject: Order Update: Your order is on its way!</Text>
                <Text style={styles.text04}>Dear hqopwox_99</Text>
                <Text style={styles.text02}>We're excited to inform you that your order has been shipped and is on its way to you!
</Text>
                <Text style={styles.text04}> Order Detail</Text>
                <Text style={styles.text02}> Order Number: P12231231</Text>
                <Text style={styles.text02}> Order Status: completed</Text>
                <Text style={styles.text02}> Tracking Number: 123124141</Text>
                <Text style={styles.text03}> Sincerely</Text>
                <Text style={styles.text02}> Japanese World Team</Text>
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
  text01:{
    color:'white',
    marginLeft:20,
    marginTop:30,
    fontSize:18,
  },
  text02:{
    color:'white',
    marginLeft:20,
    marginTop:30,
    fontSize:18,
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