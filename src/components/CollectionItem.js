import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CollectionItem = ({ collection, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(collection)}>
      <Image source={{ uri: collection.coverUrl }} style={styles.coverImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.collectionTitle}>{collection.title}</Text>
        <Text style={styles.collectionInfo}>
          {collection.type === 'playlist' ? `${collection.trackCount} bài hát` : collection.artist}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginBottom: 16,
  },
  coverImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  collectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  collectionInfo: {
    fontSize: 14,
    color: '#888',
  },
});

export default CollectionItem;
