import React from 'react';
import { StyleSheet ,View , TouchableOpacity , Text} from 'react-native';

function ItemList(props) {
  return (
      <TouchableOpacity activeOpacity={0.8} onPress={props.delete.bind(this,props.id)} >
          <View style={styles.items}>
              <Text style={{ color: 'white' }}>
                  {props.value}
              </Text></View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    items: {
        backgroundColor: 'black',
        marginVertical: 5,
        padding: 10
    }
})

export default ItemList