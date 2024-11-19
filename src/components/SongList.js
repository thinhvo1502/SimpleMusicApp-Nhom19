import React from "react";
import {View, Text, FlatList, TouchableOpacity} from 'react-native'  // flatlist: component hiệu suất cao để hiển thị danh sách cuộn, chỉ render các item đang hiển thị, giúp tiết kiệm bộ nhớ.
import Song from "./Song";
const SongList = ({ songs, onSelectSong, type}) => {
  const renderSongItem = ({ item,index}) => (
    <Song item = {item} index = {index + 1} type = {type}></Song>
  );  
  return (
    <View style = {styles.container}>
      <FlatList
        data={songs}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
}
export default SongList;
