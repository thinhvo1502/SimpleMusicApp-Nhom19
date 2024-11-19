import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import CollectionItem from '../components/CollectionItem.js'
import Song from '../components/Song.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
const collections = [
    { id: 1, title: 'Những bài hát hay nhất của Sơn Tùng', coverUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg', type: 'playlist', trackCount: 20 },
    { id: 2, title: 'Chill Vibes', coverUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg', type: 'playlist', trackCount: 15 },
    { id: 3, title: 'Greatest Hits', coverUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg', type: 'album', artist: 'Artist Name' },
    // Thêm các item khác...
];

const CollectionListScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                <Ionicons name='arrow-back-outline' size={40} color='white' />
                </TouchableOpacity>
                <Text style = {styles.headerTitle}>Albums</Text>
            </View>
            <View style = {styles.imgContainer}>
                <Image
                source = {require('../assets/images/istockphoto-1475307058-612x612-removebg-preview.png')}
                style = {styles.img}
                />
            </View>
            <View style={styles.content}>
                <FlatList
                    data={collections}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        //   <Song item = {item}/>
                        <CollectionItem collection={item} />
                    )}
                    contentContainerStyle={{ padding: 16 }}
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
        flexDirection: 'row',
        // justifyContent: 'space-between',
        margin: 10
    },
    headerTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        // opacity: 0.9
        textTransform: 'uppercase'
    },
    imgContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    img: {
        width: '85%',
        height: '85%'
    },
    content: {
        flex: 0.6
    }
}
export default CollectionListScreen;
