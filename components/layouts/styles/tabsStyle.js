import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 90,
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  addNew: {
    height: 60,
    top: -20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    padding: 10,
    elevation: 10,
  },
  settingTab: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 20 
  }
});

export default styles;