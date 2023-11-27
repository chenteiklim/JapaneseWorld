import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const address = () => {
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(true);

  const handleDeletePress = () => {
    // Add logic here to handle the delete action
    setIsVisible(false); // Set isVisible to false to hide the container
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
         

        <View style={styles.verticalImage}>
            <View style={styles.horizontalContainer}>  
                <Text style={styles.title}>Shopping Cart</Text>
                <Text style={styles.text2}>Unit Price</Text>     
                <Text style={styles.text3}>Quantity</Text>     
                <Text style={styles.text3}>Total Price</Text>     
                <Text style={styles.text14}>Delete</Text>     
            </View>
      
            <View style={isVisible ? styles.horizontalContainer : { display: 'none' }}>
              <Image source={require('./assets/animeFigure.jpg')} style={styles.item} />
              <Text style={styles.text3}>Okita Souji Figure</Text>
              <Text style={styles.text4}>$100.00</Text>
              <Text style={styles.text4}>1</Text>
              <Text style={styles.text4}>$100.00</Text>

              <TouchableHighlight
                style={styles.rhombus3}
                underlayColor="#3633E8"
                onPress={handleDeletePress}
              >
                <Text style={styles.text9}>Delete</Text>
              </TouchableHighlight>
            </View>
    
 
            <View style={styles.horizontalContainer2}>  
                <Text style={styles.text22}>Total:</Text>     
                <Text style={styles.text24}>1 item</Text>     
                <Text style={styles.text23}>$100.00</Text>     

                <TouchableHighlight
                    style={styles.rhombus2}
                    underlayColor="#3633E8" // Change the color when the button is pressed
                    onPress={() => navigation.navigate('address')}
                    >
                        <Text style={styles.text9}>Check Out</Text>
                </TouchableHighlight>              </View>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

    horizontalContainer:{
        flexDirection:'row',
    },
    verticalImage:{
        marginLeft:200,
        flexDirection:'column',
    },
    horizontalContainer2:{
        flexDirection:"row",
        marginTop:100,
        marginLeft:400,

    },
    title2:{
        marginTop:30,
        fontSize:24,
        color:'yellow',
      },
    text2:{
        marginTop:35,
        marginLeft:300,
        color:'white',
        fontSize:20,
    },
    text3:{
        marginTop:35,
        fontSize:20,
        marginLeft:50,
        color:'white',
    },
    text14:{
        marginTop:35,
        fontSize:20,
        marginLeft:80,
        color:'white',
    },

    text4:{
        fontWeight:"500",
        fontSize:20,
        marginTop:35,
        marginLeft:100,
        color:'#Ffb6c1',
    },
    text6:{
        fontSize:20,
        marginTop:40,
        color:'white',
    },
    text5:{
        fontSize:20,
        marginTop:40,
        color:'white',
    },
    incrementImg:{
        marginTop:10,
        width:100,
        height:30,
    },

    text9:{
        fontSize:16,
        color:'black',
    },
    text22:{
        marginTop:35,
        marginLeft:300,
        color:'white',
        fontSize:20,
    },
    text23:{
        marginTop:35,
        marginLeft:30,
        color:'#Ffb6c1',
        fontSize:20,
    },
    text24:{
        marginTop:35,
        marginLeft:30,
        color:'white',
        fontSize:20,
    },
    text25:{
        marginTop:35,
        marginLeft:30,
        color:'white',
        fontSize:20,
    },
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
    marginTop:35,
    marginLeft:50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width: 120,/* Adjust the width of the rhombus */
    height: 40, /* Adjust the height of the rhombus */
    backgroundColor: '#F9E852', /* Set the background color of the rhombus */
    borderRadius:0,
    borderWidth:2,
    cursor:'pointer',
    borderColor:'white',

  },
  
  rhombus3:{
    marginTop:35,
    marginLeft:50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width: 120,/* Adjust the width of the rhombus */
    height: 40, /* Adjust the height of the rhombus */
    backgroundColor: '#F0F8C1', /* Set the background color of the rhombus */
    borderRadius:0,
    borderWidth:2,
    cursor:'pointer',
    borderColor:'white',

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
  
 
  promotionDetail: {
    marginTop:0,
    marginLeft:80,
    width: 800,
    height: 250,
  },
  
  title:{
    marginTop:30,
    marginLeft:40,
    fontSize:28,
    color:'white',
  },
  horizontalImage1:{
    flexDirection:'row',
  },
  horizontalText:{
    flexDirection:'row',
  },
  
  horizontalButton:{
    flexDirection:'row',
  },
  horizontalText2:{
    flexDirection:'row',
  },
  horizontalImage2:{
    flexDirection:'row',
  },

  item:{
    marginLeft:40,
    marginTop:40,
    width:180,
    height:200,
  },
  
  smallText1:{
    marginLeft:160,
    marginTop:20,
    fontSize:18,
    color:'white',
  },
  
  smallText2:{
    marginLeft:200,
    marginTop:20,
    fontSize:18,
    color:'white',
  },
  
  smallText3:{
    marginLeft:240,
    marginTop:20,
    fontSize:18,
    color:'white',
  },
  
  smallText4:{
    marginLeft:240,
    marginTop:20,
    fontSize:18,
    color:'white',
  },
  
  addCart1: {
    marginTop:20,
    marginLeft:180,
    width:100,
    height:40,
    fontSize: 16,
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 5,
    borderWidth: 2, 
    borderColor:'white',
    color:'#fff',
    backgroundColor: '#193913',
    transition: 'background-color 0.3s ease',
  },
  
  addCart2: {
    marginTop:20,
    marginLeft:220,
    width:100,
    height:40,
    fontSize: 16,
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 5,
    borderWidth: 2, 
    borderColor:'white',
    color:'#fff',
    backgroundColor: '#193913',
    transition: 'background-color 0.3s ease',
  },
  
  addCart3: {
    marginTop:20,
    marginLeft:250,
    width:100,
    height:40,
    fontSize: 16,
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 5,
    borderWidth: 2, 
    borderColor:'white',
    color:'#fff',
    backgroundColor: '#193913',
    transition: 'background-color 0.3s ease',
  },
  
  addCart4: {
    marginTop:20,
    marginLeft:240,
    width:100,
    height:40,
    fontSize: 16,
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 5,
    borderWidth: 2, 
    borderColor:'white',
    color:'#fff',
    backgroundColor: '#193913',
    transition: 'background-color 0.3s ease',
  },
  addCart01: {
    marginTop:20,
    marginLeft:170,
    width:100,
    height:40,
    fontSize: 16,
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 5,
    borderWidth: 2, 
    borderColor:'white',
    color:'#fff',
    backgroundColor: '#193913',
    transition: 'background-color 0.3s ease',
  },
  
  addCart02: {
    marginTop:20,
    marginLeft:250,
    width:100,
    height:40,
    fontSize: 16,
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 5,
    borderWidth: 2, 
    borderColor:'white',
    color:'#fff',
    backgroundColor: '#193913',
    transition: 'background-color 0.3s ease',
  },
  
  addCart03: {
    marginTop:20,
    marginLeft:240,
    width:100,
    height:40,
    fontSize: 16,
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 5,
    borderWidth: 2, 
    borderColor:'white',
    color:'#fff',
    backgroundColor: '#193913',
    transition: 'background-color 0.3s ease',
  },
  
  addCart04: {
    marginTop:20,
    marginLeft:240,
    width:100,
    height:40,
    fontSize: 16,
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 5,
    borderWidth: 2, 
    borderColor:'white',
    color:'#fff',
    backgroundColor: '#193913',
    transition: 'background-color 0.3s ease',
  },
  
  price1:{
    marginLeft:180,
    marginTop:10,
    fontSize:16,
    color:'#F8BCF5',
  },
  
  price2:{
    marginLeft:300,
    marginTop:10,
    fontSize:16,
    color:'#F8BCF5',
  },
  
  price3:{
    marginLeft:300,
    marginTop:10,
    fontSize:16,
    color:'#F8BCF5',
  },
  
  price4:{
    marginLeft:280,
    marginTop:10,
    fontSize:16,
    color:'#F8BCF5',
  },
  smallText01:{
    marginLeft:160,
    marginTop:10,
    fontSize:20,
    color:'white',
  },
  
  smallText02:{
    marginLeft:260,
    marginTop:10,
    fontSize:20,
    color:'white',
  },
  
  smallText03:{
    marginLeft:240,
    marginTop:10,
    fontSize:20,
    color:'white',
  },
  
  smallText04:{
    marginLeft:210,
    marginTop:10,
    fontSize:20,
    color:'white',
  },
  

});

export default address;