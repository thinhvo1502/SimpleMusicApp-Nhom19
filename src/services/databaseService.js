// databaseService.js
import SQLite from 'react-native-sqlite-storage';

// Mở hoặc tạo cơ sở dữ liệu
const db = SQLite.openDatabase(
  {
    name: 'music.db',
    location: 'default',
  },
  () => {
    console.log('Database opened successfully');
    createTracksTable(); // Gọi hàm tạo bảng khi mở cơ sở dữ liệu
  },
  (error) => {
    console.log('Error opening database: ' + error);
  }
);

// Tạo bảng tracks
const createTracksTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS tracks (
        track_id TEXT PRIMARY KEY,        -- Mã định danh bài hát (chuỗi ID từ Spotify)
        name TEXT NOT NULL,               -- Tên bài hát
        album_id TEXT,                    -- Mã định danh album
        popularity INTEGER,               -- Độ phổ biến (từ 0 đến 100)
        duration_ms INTEGER,              -- Thời lượng bài hát (tính bằng mili giây)
        is_explicit INTEGER,              -- Cờ đánh dấu nội dung nhạy cảm (0 hoặc 1)
        track_number INTEGER              -- Số thứ tự bài hát trong album
      );`,
      [],
      () => {
        console.log('Tracks table created successfully');
      },
      (tx, error) => {
        console.log('Error creating tracks table: ' + error);
      }
    );
  });
};

// Hàm thêm bài hát vào bảng
export const addTrack = (track) => {
  const { track_id, name, album_id, popularity, duration_ms, is_explicit, track_number } = track;
  
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO tracks (track_id, name, album_id, popularity, duration_ms, is_explicit, track_number) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [track_id, name, album_id, popularity, duration_ms, is_explicit, track_number],
      (tx, results) => {
        console.log('Track added successfully: ', results.insertId);
      },
      (tx, error) => {
        console.log('Error adding track: ', error);
      }
    );
  });
};

// Hàm lấy tất cả bài hát
export const getAllTracks = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM tracks',
        [],
        (tx, results) => {
          const tracks = [];
          for (let i = 0; i < results.rows.length; i++) {
            tracks.push(results.rows.item(i));
          }
          resolve(tracks); // Trả về danh sách bài hát
        },
        (tx, error) => {
          console.log('Error fetching tracks: ', error);
          reject(error);
        }
      );
    });
  });
};
