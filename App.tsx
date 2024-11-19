// import * as React from 'react';
// import { Text } from 'react-native';
// import auth from '@react-native-firebase/auth';

// function App() {
//   const user = auth().currentUser;

//   if (!user) {
//     return <Text>Please login</Text>;
//   }

//   return <Text>Welcome {user.email}</Text>;
// }
import React, {useEffect} from "react"
import { View, Button } from "react-native"
import TrackPlayer from "react-native-track-player"
import storage from '@react-native-firebase/storage'
async function getMusicUrl(filename:string) {
  try {
    const reference = storage().ref(`${filename}`); // đường dẫn tới file trong firebase
    const url = await reference.getDownloadURL(); // lấy URL phát nhạc
    return url;
  } catch (error) {
    console.error("Error fetching music URL:", error);
    throw error; // throw lại lỗi để xử lý ở nơi gọi hàm
  }
}


async function setUpTrackPlayer(filename:string) {
  try {
    await TrackPlayer.setupPlayer();

    // Lấy URL từ Firebase Storage
    const url = await getMusicUrl(filename);

    // Thêm bài nhạc vào TrackPlayer
    await TrackPlayer.add({
      id: "trackId",
      url: url,
      title: "Tên bài nhạc",
      artist: "Tên nghệ sĩ",
      artwork: "URL ảnh bìa",
    });

    await TrackPlayer.play();
  } catch (error) {
    console.error("Error setting up TrackPlayer:", error);
  }
}
function App(){
  useEffect(() => {
    return () => {
      // Tạm dừng phát nhạc khi component bị hủy
      TrackPlayer.stop();
      // Xóa hàng đợi nếu cần thiết
      TrackPlayer.reset();
    };
  }, []);
  
  return (
    <View>
      <Button title="Play Music" onPress={() => setUpTrackPlayer('spotifydown.com - Từng Là.mp3')}/>
    </View>
  )
}
export default App