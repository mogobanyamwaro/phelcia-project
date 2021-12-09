import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../components/styles';
import { Formik } from 'formik';
import MyTextInput from '../components/MyTextInput';
import { Colors } from '../components/styles';
// keyboard avoding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View style={styles.StyledContainer}>
      <StatusBar style="light" />

      <View>
        <Text style={styles.SubTitle}>Create Account</Text>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.email == '' || values.password == '') {
              handleMessage('Please fill in all fields');
              setSubmitting(false);
            } else {
              handleLogin(values, setSubmitting);
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
          }) => (
            <View style={styles.StyledFormArea}>
              <MyTextInput
                // label="Email Address"
                placeholder="Name"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                // label="Email Address"
                placeholder="Email"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                placeholder="Password"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              {!isSubmitting && (
                <TouchableOpacity
                  style={styles.StyledButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.ButtonText}>Sign up</Text>
                </TouchableOpacity>
              )}
              {isSubmitting && (
                <TouchableOpacity style={styles.StyledButton} disabled={true}>
                  <ActivityIndicator size="large" color={primary} />
                </TouchableOpacity>
              )}
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Signup;
