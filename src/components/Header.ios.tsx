import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

interface HeaderProps {
  handleNightMode: () => void;
  nightMode: boolean;
}

export function Header({ handleNightMode, nightMode }: HeaderProps) {
  return (
    <SafeAreaView
      style={[styles.container, nightMode && { backgroundColor: '#191932' }]}>
      <View
        style={[styles.header, nightMode && { backgroundColor: '#191932' }]}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>to.</Text>
          <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>
            do
          </Text>
        </View>
        <TouchableOpacity
          style={styles.setNightModeContainer}
          onPress={handleNightMode}>
          <View style={styles.setNightModeContent}>
            <Text style={styles.setNightModeText}>
              {nightMode ? 'Light' : 'Dark'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
  },

  header: {
    paddingBottom: 44,
    backgroundColor: '#273FAD',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  setNightModeContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    paddingTop: 5,
    paddingRight: 28,
  },
  setNightModeContent: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 3,
  },
  setNightModeText: {
    fontSize: 12,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
});
