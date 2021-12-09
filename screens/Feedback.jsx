import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import { styles } from '../components/styles';
import { Formik } from 'formik';
import MyTextInput from '../components/MyTextInput';
import FeedbackInput from '../components/FeedbackInput';
import { Colors } from '../components/styles';

const PersonIcon = require('../assets/images/feedback.png');

const Feedback = () => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View style={styles.FeedBackContainer}>
      <StatusBar style="light" />

      <Image source={PersonIcon} style={styles.FeedbackImage} />

      <View>
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
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.email}
                keyboardType="text"
              />
              <MyTextInput
                placeholder="Email Address"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.password}
                secureTextEntry={hidePassword}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
                keyboardType="email-address"
              />
              <FeedbackInput
                placeholder="Share your feedback here"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange('feedback')}
                onBlur={handleBlur('feedback')}
                value={values.password}
              />
              {!isSubmitting && (
                <View style={styles.SubmitContainer}>
                  <TouchableOpacity
                    style={styles.StyledButtonSubmit}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.ButtonTextFeedBack}>Submit</Text>
                  </TouchableOpacity>
                </View>
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

export default Feedback;
