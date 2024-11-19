import React from "react";
import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    PixelRatio,
    Dimensions
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
const { width } = Dimensions.get('window'); // Lấy chiều rộng của màn hình
function PlayerScreen() {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="arrow-undo-outline" size={40} color="white" />
                </TouchableOpacity>
                <View>
                    <Text>

                    </Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Ionicons name="heart-outline" size={40} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.imgArea}>
                <Image
                    source={{ uri: 'https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg' }}
                    style={{ width: 250, height: 250 }}
                />
            </View>

            <View style={styles.nameArea}>
                <TouchableOpacity>
                    <Ionicons name='arrow-down-circle-outline' size={40} color='white' />
                </TouchableOpacity>
                <View style={styles.nameText}>
                    <Text style={styles.songName}>Thương nhớ người dưng</Text>
                    <Text style={styles.authorName}>Nguyễn Ngọc Ngan</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name='list-circle-outline' size={40} color='white' />
                </TouchableOpacity>
            </View>
            <View style = {styles.sliderContainer}>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={300} // Giới hạn là tổng thời gian
                // value={currentTime}
                // onValueChange={(value) => setCurrentTime(value)} // Cập nhật thời gian hiện tại khi di chuyển thanh
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                thumbTintColor="#FFFFFF" // Màu của tay cầm
            />

            {/* Hiển thị thời gian */}
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>0:00</Text> 
                <Text style={styles.timeText}>1:30</Text> 
            </View>
            </View>

            <View style={styles.mainArea}>
                <TouchableOpacity>
                <Ionicons name='shuffle-outline' size={40} color='white' />
                    
                </TouchableOpacity>
                <TouchableOpacity>
                <Ionicons name='play-skip-back-sharp' size={40} color='white' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name = 'play-outline' size = {40} color = 'white'/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Ionicons name='play-skip-forward-sharp' size={40} color='white' />
                </TouchableOpacity>
                <TouchableOpacity>
                <Ionicons name='repeat-outline' size={40} color='white' />
                </TouchableOpacity>
            </View>
            {/* <View>
            </View> */}

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
        padding: 10
    },
    imgArea: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    
   nameArea: {
        flex: 0.2,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // flexWrap: 'wrap'
    },
    mainArea: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    nameText: {
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center'
    },
    songName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    authorName: {
        fontSize: 15,
        color: 'white',
        
    },
    sliderContainer:{
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width
    },
    slider: {
        width: width*0.9,
        height: 10
    },
    timeContainer: {
        width: width*0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    timeText: {
        color: 'white',
        fontSize: 16,
    }


}
export default PlayerScreen;
