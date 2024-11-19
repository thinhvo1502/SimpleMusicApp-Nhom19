import React from "react";
import { 
    Image,
    View,
    Text,
    TouchableOpacity
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SongList from '../components/SongList.js';
import { play } from "react-native-track-player/lib/src/trackPlayer.js";

const SongListScreen = ({item, index, type = "playlist", data}) => {
    const playlistData = {
        title: 'Người về từ lòng đất',
        artist: 'Chúc Anh Đài',
        album: 'Tình yêu mù quáng',
        year: 2020,
        songs: [
            { id: '3', title: 'Cát bụi cuộc đời', artist: 'Chúc Anh Đài' },
            { id: '4', title: 'Tình là bể khổ', artist: 'Lương Sơn Bá' },
            { id: '5', title: 'Tình là bể khổ', artist: 'Lương Sơn Bá' },
            { id: '6', title: 'Tình là bể khổ', artist: 'Lương Sơn Bá' },
            { id: '7', title: 'Tình là bể khổ', artist: 'Lương Sơn Bá' }
        ]
    };

    const onSelectSong = (item) => {
        console.log(item.artist);
    };
    const onShufflePlay = () => {
        console.log('Phát ngẫu nhiên');
        // Thực hiện chức năng phát ngẫu nhiên ở đây
    }; 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="arrow-undo-outline" size={40} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.listHeader}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg' }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{playlistData.title}</Text>
                    {type === "playlist" ? (
                        <Text style={styles.details}>{playlistData.songs.length} bài hát</Text>
                    ) : (
                        <>
                            <Text style={styles.artist}>{playlistData.artist}</Text>
                            <Text style={styles.year}>Album: {playlistData.year}</Text>
                        </>
                    )}
                </View>
                <TouchableOpacity style={styles.shuffleButton} onPress={onShufflePlay}>
                    <Text style={styles.shuffleButtonText}>PHÁT NGẪU NHIÊN</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.shuffleButtonContainer}>
                <TouchableOpacity style={styles.shuffleButton} onPress={onShufflePlay}>
                    <Text style={styles.shuffleButtonText}>Phát ngẫu nhiên</Text>
                </TouchableOpacity>
            </View> */}
            <View style={styles.listItems}>
                <SongList
                    songs={playlistData.songs} onSelectSong={onSelectSong} type={type}
                />
            </View>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        flex: 0.1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    listHeader: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 300,
        height: 250,
        borderRadius: 10,
    },
    titleContainer: {
        width: '100%',
        alignItems: 'center',
        // paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    details: {
        fontSize: 16,
        color: '#aaaaaa',
        marginTop: 5
    },
    artist: {
        fontSize: 16,
        color: 'white',
        marginTop: 5,
        textAlign: 'center'
    },
    year: {
        fontSize: 16,
        color: '#aaaaaa',
        marginTop: 5,
    },
    shuffleButtonContainer: {
        // flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    shuffleButton: {
        padding: 14,
        marginTop: 10,
        backgroundColor: 'green',
        borderRadius: 15,
        width: '50%',
        alignItems: 'center'
    },
    shuffleButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    listItems: {
        flex: 0.3,
        marginBottom: 20, // Thêm margin dưới cùng
    }
};

export default SongListScreen;
