/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import PlayerScreen from './src/screens/PlayerScreen.js'
import LibraryScreen from './src/screens/LibraryScreen'
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import trackPlayerService from './src/services/trackPlayerService.js'
import SongListScreen from './src/screens/SongListScreen.js';
import Song from './src/components/Song.js';
import AlbumScreen from './src/screens/AlbumScreen.js'
import PlaylistScreen from './src/screens/PlaylistScreen.js';
AppRegistry.registerComponent(appName, () => SongListScreen);
TrackPlayer.registerPlaybackService(() => trackPlayerService) // registering playback service