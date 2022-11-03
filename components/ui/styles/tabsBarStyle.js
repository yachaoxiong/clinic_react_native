import getAppStyle from '../../../common/styles';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  tabItem: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemActive: {
    backgroundColor: getAppStyle().colors.primary,
    ...getAppStyle().boxShadow.large,
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemTextActive: {
    color: getAppStyle().colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabItemText: {
    color: getAppStyle().colors.mediumGray,
    fontSize: 16,
    fontWeight: 'bold',
  }, 
});