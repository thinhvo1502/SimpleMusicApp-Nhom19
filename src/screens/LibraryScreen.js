import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native' 

function LibraryScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>
                    THƯ VIỆN
                </Text>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.tile}>
                        <Image source={require('../assets/images/recent-played.webp')} style={styles.image} />
                        <Text style={styles.text}>Nghe gần đây</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tile}>
                        <Image source={require('../assets/images/yeu-thich.webp')} style={styles.image} />
                        <Text style={styles.text}>Yêu thích</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.tile}>
                        <Image source={require('../assets/images/tai-xuong.webp')} style={styles.image} />
                        <Text style={styles.text}>Tải xuống</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tile}>
                        <Image source={require('../assets/images/playlist.webp')} style={styles.image} />
                        <Text style={styles.text}>Playlist</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.tile}>
                        <Image source={require('../assets/images/album.webp')} style={styles.image} />
                        <Text style={styles.text}>Album</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tile}>
                        <Image source={require('../assets/images/chu-de.webp')} style={styles.image} />
                        <Text style={styles.text}>Chủ đề</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        flex: 0.1,
        justifyContent: 'center'
    },
    textHeader: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center', // Canh giữa tiêu đề
    },
    mainContainer: {
        flex: 0.9,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    tile: {
        width: 180,
        height: 180,
        backgroundColor: '#6200ee',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5, // Thêm khoảng cách giữa hình ảnh và văn bản
    },
    image: {
        width: '100%', // Để hình ảnh chiếm toàn bộ chiều rộng của tile
        height: '80%', // Điều chỉnh chiều cao của hình ảnh
        // borderRadius: 10, // Cắt góc của hình ảnh
    }
}

export default LibraryScreen;
