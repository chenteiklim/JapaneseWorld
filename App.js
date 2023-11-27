// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import page1 from './page1';
import login from './login';
import signup from './signup';
import mainpage from './mainpage';
import limited from './limited';
import figure from './figure';
import doll from './doll';
import pillow from './pillow';
import manCloth from './manCloth';
import womanCloth from './womanCloth';
import buynow from "./buynow";
import checkout from "./checkout";
import address from "./address";
import payment from "./payment";
import paySucess from "./paySucess";
import mypurchase1 from "./mypurchase1";
import mypurchase2 from "./mypurchase2";
import mypurchase3 from "./mypurchase3";
import mypurchase4 from "./mypurchase4";
import profile from "./profile";
import notification from "./notification";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="buynow">
        <Stack.Screen name="page1" component={page1}options={{ headerShown: false }} />
        <Stack.Screen name="login" component={login}options={{ headerShown: false }} /> 
        <Stack.Screen name="signup" component={signup}options={{ headerShown: false }} /> 
        <Stack.Screen name="mainpage" component={mainpage}options={{ headerShown: false }} /> 
        <Stack.Screen name="limited" component={limited}options={{ headerShown: false }} /> 
        <Stack.Screen name="figure" component={figure}options={{ headerShown: false }} /> 
        <Stack.Screen name="doll" component={doll}options={{ headerShown: false }} /> 
        <Stack.Screen name="pillow" component={pillow}options={{ headerShown: false }} /> 
        <Stack.Screen name="manCloth" component={manCloth}options={{ headerShown: false }} /> 
        <Stack.Screen name="womanCloth" component={womanCloth}options={{ headerShown: false }} /> 
        <Stack.Screen name="buynow" component={buynow}options={{ headerShown: false }} />
        <Stack.Screen name="checkout" component={checkout}options={{ headerShown: false }} /> 
        <Stack.Screen name="address" component={address}options={{ headerShown: false }} /> 
        <Stack.Screen name="payment" component={payment}options={{ headerShown: false }} /> 
        <Stack.Screen name="paySucess" component={paySucess}options={{ headerShown: false }} /> 
        <Stack.Screen name="mypurchase1" component={mypurchase1}options={{ headerShown: false }} /> 
        <Stack.Screen name="mypurchase2" component={mypurchase2}options={{ headerShown: false }} /> 
        <Stack.Screen name="mypurchase3" component={mypurchase3}options={{ headerShown: false }} /> 
        <Stack.Screen name="mypurchase4" component={mypurchase4}options={{ headerShown: false }} /> 
        <Stack.Screen name="profile" component={profile}options={{ headerShown: false }} /> 
        <Stack.Screen name="notification" component={notification}options={{ headerShown: false }} /> 




      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;