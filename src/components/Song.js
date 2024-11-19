import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
function Song({item,index,type,onSelectedSong}) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    {type === 'album' ? (
                        <Text style={styles.indexText}>{index}</Text>
                    ): (
                        <Image
                        source={{ uri: 'https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg' }}
                        style={styles.img}
                    />
                    )}
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.songName}>{item.title}</Text>
                    <Text style={styles.authorName}>{item.artist}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = {
    container: {
        backgroundColor: '#1e1e1e',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 5,
        padding: 10
    },
    imgContainer: {
        marginRight: 10
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 8
    },
    indexText: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    songName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    authorName: {
        fontSize: 14,
        color: '#aaaaaa',
        marginTop: 4,
    }
}
export default Song;