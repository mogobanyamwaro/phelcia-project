import React from 'react';
import { View, StyleSheet } from 'react-native';

const Rating = () => {
  return (
    <View style={styles.ratingsContainer}>
      {[0, 0, 0, 0, 0].map((el, i) => (
        <FontAwesome
          key={i}
          style={styles.star}
          name={'star'}
          size={18}
          color={'#e47911'}
        />
      ))}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: { margin: 2 },
});
