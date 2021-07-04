import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from 'react-native';

export function FlatListHeaderComponent(nightMode: boolean) {
  return (
    <View>
      <Text style={[styles.header, nightMode && {color: '#6B6FFF'}]}>Minhas tasks</Text>
    </View>
  );
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  nightMode: boolean;
}

export function MyTasksList({
  nightMode,
  tasks,
  onLongPress,
  onPress,
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onLongPress={() => onLongPress(item.id)}
            onPress={() => onPress(item.id)}
            style={[item.done ? styles.taskButtonDone : styles.taskButton]}>
            <View
              testID={`marker-${index}`}
              style={[
                item.done
                  ? [
                      styles.taskMarkerDone,
                      nightMode && { backgroundColor: '#565BFF' },
                    ]
                  : [
                      styles.taskMarker,
                      nightMode && { borderColor: '#565BFF' },
                    ],
              ]}
            />
            <Text
              style={[
                item.done ? styles.taskTextDone : styles.taskText,
                nightMode && { color: '#E1E1E6' },
              ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}

      ListHeaderComponent={FlatListHeaderComponent(nightMode)}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10,
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10,
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through',
  },
});
