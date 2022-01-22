// import React from 'react';
// import {TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native';
// class Card extends React.PureComponent {
//   render() {
//     const {item} = this.props;
//     return (
//       <TouchableOpacity style={styles.container}>
//         <Image
//           style={styles.image}
//           source={{uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}}
//         />
//       </TouchableOpacity>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 5,
//     position: 'relative',
//   },
//   image: {
//     height: 120,
//     width: 60,
//     borderRadius: 10,
//   },
// });
// export default Card;

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const placeholderImage = require('../assets/images/placeholder.png');
const Card = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={
          item.poster_path
            ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
            : placeholderImage
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
});
export default Card;
