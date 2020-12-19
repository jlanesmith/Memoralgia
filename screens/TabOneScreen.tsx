import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { View } from '../components/Themed';
import Memories from '../Memories';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
       <TouchableOpacity
        style={{
            borderWidth:4,
            borderColor:'rgba(0,0,0,0.4)',
            alignItems:'center',
            justifyContent:'center',
            width:150,
            height:150,
            backgroundColor:'#00cc00',
            borderRadius:75,
          }}
        onPress={onPress}
      >
        <Text style={styles.title}>Go</Text>
      </TouchableOpacity>
    </View>
  );
}

const onPress = () => {
  let allMemories = Memories.split("•");
  for (let i = 0; i < allMemories.length; i++) {
    console.log(allMemories[i]);
    let splitsies = (allMemories[i].split(" "));
    let monthString = "";
    let counter = 0;
    while (monthString.length == 0) {
      monthString = splitsies[counter++];
    }
    let monthNum = new Date(Date.parse(monthString +" 1, 2012")).getMonth()+1;
    if (isNaN(monthNum)) {
      console.log("Not a month")
      continue;
    }
    let dayString = "";
    while (dayString.length == 0) {
      dayString = splitsies[counter++];
    }
    let dayNum = parseInt((dayString.split("-")[0]).split(",")[0]);
    if (isNaN(dayNum) || dayNum > 31) {
      console.log("Not a day")
      continue;
    }
    let yearString = "";
    while (yearString.length == 0) {
      yearString = splitsies[counter++];
    }
    let yearNum = parseInt(yearString);
    if (isNaN(yearNum)) {
      console.log("Not a year")
      continue; 
    }
    let finalDate = new Date(yearNum, monthNum-1, dayNum)
    console.log(finalDate)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
