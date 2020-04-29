import React , {useState} from 'react';
import {StyleSheet, View, TextInput, Button, ScrollView , Text, FlatList , TouchableOpacity} from 'react-native';
import ItemList from './components/ItemList'

export default function App() {


  const [enterValue , setenterValue] = useState('')
  const [itemsValue , setitemsValue] = useState([])

  const changeHandler = text => {
   setenterValue(text)
  }

  const additemHandler = () => {
    setitemsValue(preValue => [...preValue, {id: Math.random().toString(), value: enterValue}])
    setenterValue("")
  }

  const deleteHandler = itemid => {
    setitemsValue( items => {
      return items.filter( item => {
        return item.id !== itemid
      })
    })
  }

  return (
    <View style={styles.mainContainer}>
    
      <TextInput
      style = {styles.input}
      placeholder="Enter a item"
      onChangeText={changeHandler}
      value={enterValue}/>

      <Button 
      title="Add Item"
      onPress={additemHandler}
      color="black" />

      <FlatList 
          keyExtractor={(item, index) => item.id}
          data={itemsValue}
          renderItem={itemData => (
            <ItemList
              value={itemData.item.value}
              id={itemData.item.id}
              delete = {deleteHandler}/>
          )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer : {
    padding : 20 ,
  },
  input : {
    borderColor : 'black',
    borderWidth : 1 ,
    marginBottom : 5
  },
});
