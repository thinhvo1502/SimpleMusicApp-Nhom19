import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    FlatList
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import CollectionItem from "../components/CollectionItem";
function PlaylistScreen() {
    const collections = [
        { id: 1, title: 'Những bài hát hay nhất của Sơn Tùng', coverUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg', type: 'playlist', trackCount: 20 },
        { id: 2, title: 'Chill Vibes', coverUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg', type: 'playlist', trackCount: 15 },
        { id: 3, title: 'Greatest Hits', coverUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg', type: 'album', artist: 'Artist Name' },
        // Thêm các item khác...
    ];
    
    return (
        <View style = {styles.container}>
            <View style={styles.header}>
                {/* nút back*/}
                <TouchableOpacity>
                    <Ionicons name='arrow-back-outline' size={40} color='white' />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Playlists</Text>

                <TouchableOpacity>
                    <Ionicons name='add-circle-outline' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='add-circle-outline' size={40} color='white'></Ionicons>
                </TouchableOpacity>
            </View>
            <View style = {styles.content}>
            <Text style = {styles.sectionTitle}>Your Playlists</Text>
                <FlatList
                    data={collections}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        //   <Song item = {item}/>
                        <CollectionItem collection={item} />
                    )}
                    contentContainerStyle={{ padding: 16 }}
                />
                <View style = {styles.separator}></View>
        
            {/*Tiêu đề và danh sách playlist trong hệ thống */}
          
                <Text style = {styles.sectionTitle}>System Playlists</Text>
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
    )
}
const styles = {
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    header: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    content: {
        flex: 0.9,
    },
    headerTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 70,
        // opacity: 0.9
        textTransform: 'uppercase'
    },
    sectionTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 8,
        color: 'white',
        paddingHorizontal: 10
    },
    separator: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 16
    }

}
export default PlaylistScreen;