// services/apiService.js

import axios from 'axios';
import {addTrack} from '../databaseService'

const fetchAndSaveTracksFromAPI = async () => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
        'Content-Type': 'application/json',
      },
      params: {
        q: 'Sơn Tùng', // Từ khóa tìm kiếm
        type: 'track',
      },
    });
    
    const tracks = response.data.tracks.items.map(item => ({
      name: item.name,
      artist: item.artists[0].name,
      album: item.album.name,
      popularity: item.popularity,
      preview_url: item.preview_url,
      is_explicit: item.explicit,
    }));

    // Gọi hàm thêm track vào cơ sở dữ liệu
    addTrack(tracks);
  } catch (error) {
    console.error("Error fetching tracks: ", error);
  }
};
export {fetchAndSaveTracksFromAPI}