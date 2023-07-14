import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { titles, colors, btn1, hr80 } from '../../globals/style'
import { TextInput } from 'react-native-web'
import { AntDesign, Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';


const SignUpScreen = ({ navigation }) => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [namefocus, setNamefocus] = useState(false);
  const [phonefocus, setPhonefocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const [showcpassword, setShowcpassword] = useState(false);
  const [cpasswordfocus, setcPasswordfocus] = useState(false);

  return (
   
    <View style={styles.container}>
      <Text style={styles.head1}>Sign Up</Text>
   {/* Name */}
   <View style={styles.inputout} >
        <AntDesign name="user" size={24} color={namefocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder="Full Name"
          onFocus={() => {
            setEmailfocus(false)
            setNamefocus(true)
            setPasswordfocus(false)
            setShowpassword(false)
            setcPasswordfocus(false)
            setPhonefocus(false)
          }}
        ></TextInput>
      </View>

      {/* Email */}
      <View style={styles.inputout} >
      <MaterialCommunityIcons name="email-outline" size={24} color={emailfocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder="Email"
          onFocus={() => {
            setEmailfocus(true)
            setPasswordfocus(false)
            setShowpassword(false)
            setNamefocus(false)
            setcPasswordfocus(false)
            setPhonefocus(false)
          }}
        ></TextInput>
      </View>

      {/* phone no */}
      <View style={styles.inputout} >
      <Feather name="smartphone" size={24} color={phonefocus === true ? colors.text1 : colors.text2}  />
     
        <TextInput style={styles.input} placeholder="Phone No"
          onFocus={() => {
            setEmailfocus(false)
            setPhonefocus(true)
            setPasswordfocus(false)
            setShowpassword(false)
            setcPasswordfocus(false)
          }}
        ></TextInput>
      </View>




      {/* password start */}
      <View style={styles.inputout}>
        <MaterialCommunityIcons name="lock-outline" size={24} color={passwordfocus == true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder="Password" onFocus={() => {
          setEmailfocus(false)
          setPasswordfocus(true)
          setNamefocus(false)
          setPhonefocus(false)
          setcPasswordfocus(false)

        }}

          secureTextEntry={showpassword === false ? true : false}
          onChangeText={(text) => setPassword(text)}
        />

        <Octicons name={showpassword == false ? "eye-closed" : "eye"} size={24} color="black" onPress={() => setShowpassword(!showpassword)} />
      </View>

      {/* password end */}

      {/* confirm password */}
      <View style={styles.inputout}>
        <MaterialCommunityIcons name="lock-outline" size={24} color={cpasswordfocus == true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder="Confirm Password" onFocus={() => {
          setEmailfocus(false)
          setcPasswordfocus(true)
          setPasswordfocus(false)
          setPhonefocus(false)
          setNamefocus(false)

        }}
    
          secureTextEntry={showcpassword === false ? true : false}
        />

        <Octicons name={showcpassword == false ? "eye-closed" : "eye"} size={24} color="black" onPress={() => setShowcpassword(!showcpassword)} />
      </View>

      {/* Address */}
      <Text style={styles.address}>Please enter your address</Text>
                    <View style={styles.inputout} >
                        <TextInput style={styles.input1} placeholder="Enter your Address" onChangeText={(text) => setAddress(text)}
                            onPress={() => {
                                setEmailfocus(false)
                                setPasswordfocus(false)
                                setShowpassword(false)
                                setNamefocus(false)
                                setPhonefocus(false)
                    
                            }}
                        />
                    </View>




      <TouchableOpacity style={btn1} onPress={() => handlelogin()}>
        <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }}>Sign Up</Text>
      </TouchableOpacity>

      {/* <Text style={styles.forgot}>Forgot Password?</Text> */}
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftxt}>Sign In With </Text>
      <View style={styles.gf}>
        <TouchableOpacity>
          <View style={styles.gficon}>
            <AntDesign name="google" size={24} color="#EA4335" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.gficon}>
            <FontAwesome name="facebook-f" size={24} color="#4267B2" /></View>
        </TouchableOpacity>
      </View>
      <View style={hr80}></View>
      <Text >Already have an account?
        <Text style={styles.signup} onPress={() => navigation.navigate('LogInPage')}> Sign In</Text>
      </Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 40,
  },
  container1: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: 'center',
    marginVertical: 10,
  },
  inputout: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
    backgroundColor: colors.col1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // alignSelf: 'center',
    elevation: 20,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: '80%',
  },
  forgot: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 10,
  },
  or: {
    color: colors.text1,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  gftxt: {
    color: colors.text2,
    marginBottom: 10,
    fontSize: 25,
  },
  gf: {
    flexDirection: 'row'
  },
  gficon: {
    backgroundColor: 'white',
    width: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 20,
  },
  signup: {
    color: colors.text1,
  },
  address: {
    fontSize: 18,
    color: colors.text2,
    textAlign: 'center',
    marginTop: 20,
  },
  errormsg: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  successmessage: {
    color: 'green',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  address: {
    fontSize: 18,
    color: colors.text2,
    textAlign: 'center',
    marginTop: 20,
},
input1: {
  fontSize: 18,
  marginLeft: 10,
  width: '80%',
},
})
export default SignUpScreen