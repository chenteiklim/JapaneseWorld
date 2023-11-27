import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableHighlight,Modal} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const mainpage = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [cartStatus, setCartStatus] = useState(false); // New state for cart status
  const addToCart = () => {
    console.log('Adding item to cart...');

    // Perform your logic to add item to the cart
    // For demonstration, just setting the cart status to true
    setCartStatus(true);

    // Set a timeout to reset the cart status after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      setCartStatus(false);
    }, 3000);
  };
  const handleSearch = (value) => {
    setSearchTerm(value);
    console.log('Searching for:', value);
  };
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
    <Modal
        transparent={true}
        visible={cartStatus}
        onRequestClose={() => {
          setCartStatus(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Item added to cart successfully!</Text>
          </View>
        </View>
      </Modal>
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
            <View>  
                <Text style={styles.title}>Figure</Text>
            </View>
            <View style={styles.horizontalImage1}>
            <TouchableHighlight
              onPress={() => navigation.navigate('buynow')}>
                            <Image source={require('./assets/animeFigure.jpg')} style={styles.item} />     
              
            </TouchableHighlight>              
              <Image source={require('./assets/neko.png')} style={styles.item} />     
              <Image source={require('./assets/otsufigure.jpg')} style={styles.item} />     
              <Image source={require('./assets/ena.jpg')} style={styles.item} />     
            </View>
            <View style={styles.horizontalText}>
              <Text style={styles.smallText1}>Okita Souji Figure</Text>
              <Text style={styles.smallText2}>Mikasa Figure</Text>
              <Text style={styles.smallText3}>Otsu Figure</Text>
              <Text style={styles.smallText4}>Shiro Figure</Text>
            </View>
            <View style={styles.horizontalText2}>
              <Text style={styles.price1}>$100.00</Text>
              <Text style={styles.price2}>$80.00</Text>
              <Text style={styles.price3}>$120.50</Text>
              <Text style={styles.price4}>$220.50</Text>
            </View>
            <View style={styles.horizontalButton}>
           
            <TouchableHighlight
              style={styles.addCart1}
              underlayColor="#3633E8"
              onPress={addToCart}
            >
              <Text style={styles.text3}>Add To Cart</Text>
            </TouchableHighlight>

        <TouchableHighlight
          style={styles.addCart2}
          underlayColor="#3633E8"
          onPress={addToCart}
        >
          <Text style={styles.text3}>Add To Cart</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.addCart3}
          underlayColor="#3633E8"
          onPress={addToCart}
        >
          <Text style={styles.text3}>Add To Cart</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.addCart4}
          underlayColor="#3633E8"
          onPress={addToCart}
        >
          <Text style={styles.text3}>Add To Cart</Text>
        </TouchableHighlight>
            </View>
            <View style={styles.horizontalImage1}>
              <Image source={require('./assets/abcfigure.jpg')} style={styles.item} />     
              <Image source={require('./assets/zorofigure.jpeg')} style={styles.item} />     
              <Image source={require('./assets/natsu figure.jpg')} style={styles.item} />     
              <Image source={require('./assets/narutofigure.jpg')} style={styles.item} />     
            </View>
            <View style={styles.horizontalText}>
              <Text style={styles.smallText01}>Yuki Figure</Text>
              <Text style={styles.smallText02}>Zoro Figure</Text>
              <Text style={styles.smallText03}>Natsu Figure</Text>
              <Text style={styles.smallText04}>Naruto Figure</Text>
            </View>
            <View style={styles.horizontalText2}>
              <Text style={styles.price1}>$120.00</Text>
              <Text style={styles.price2}>$90.00</Text>
              <Text style={styles.price3}>$120.50</Text>
              <Text style={styles.price4}>$200.50</Text>
            </View>
            <View style={styles.horizontalButton}>
            <TouchableHighlight
    style={styles.addCart1}
    underlayColor="#3633E8" // Change the color when the button is pressed
    onPress={addToCart}
  >
    <Text style={styles.text3}>Add To Cart</Text>
  </TouchableHighlight>

  <TouchableHighlight
    style={styles.addCart2}
    underlayColor="#3633E8" // Change the color when the button is pressed
    onPress={addToCart}
  >
    <Text style={styles.text3}>Add To Cart</Text>
  </TouchableHighlight>
  <TouchableHighlight
    style={styles.addCart3}
    underlayColor="#3633E8" // Change the color when the button is pressed
    onPress={addToCart}
  >
    <Text style={styles.text3}>Add To Cart</Text>
  </TouchableHighlight>
  <TouchableHighlight
    style={styles.addCart4}
    underlayColor="#3633E8" // Change the color when the button is pressed
    onPress={addToCart}
  >
    <Text style={styles.text3}>Add To Cart</Text>
  </TouchableHighlight>

            </View>
          </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height:1400,
  },
  modalContainer: {
    position: 'absolute', // Set position to absolute
    top: 280, // Adjust the top position as needed
    left: 580, // Adjust the left position as needed
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 300, // Set the width of the modal container
    height:200,
  },
  modalContent: {
    wdth:200,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
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
    marginTop:8,
    marginLeft:10,
    color:'white',
  },
  promotionDetail: {
    marginTop:0,
    marginLeft:80,
    width: 800,
    height: 250,
  },
  
  title:{
    marginTop:30,
    marginLeft:120,
    fontSize:20,
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
    marginLeft:120,
    marginTop:40,
    width:220,
    height:300,
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

export default mainpage;