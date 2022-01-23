import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};

const List = ({title, content}) => {
  return (
    <>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>

      <FlatList
        data={content}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Card item={item} />}
        horizontal={true}
      />
    </>
  );
};

// class List extends React.PureComponent {
//   render() {
//     const {title, content} = this.props;
//     return (
//       <>
//         <View>
//           <Text style={styles.text}>{title}</Text>
//         </View>

//         <FlatList
//           data={content}
//           keyExtractor={item => item.id}
//           renderItem={({item}) => <Card item={item} />}
//           horizontal={true}
//         />
//       </>
//     );
//   }
// }

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});
List.propTypes = propTypes;
export default List;
