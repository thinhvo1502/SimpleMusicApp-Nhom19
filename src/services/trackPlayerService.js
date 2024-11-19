// trackPlayerService.js
import TrackPlayer from 'react-native-track-player';

module.exports = async function () {
  // Sự kiện khi người dùng nhấn nút "play"
  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play();
  });

  // Sự kiện khi người dùng nhấn nút "pause"
  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause();
  });

  // Sự kiện khi người dùng nhấn nút "stop"
  TrackPlayer.addEventListener('remote-stop', () => {
    TrackPlayer.stop();
  });
};
