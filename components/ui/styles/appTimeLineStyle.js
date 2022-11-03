import getAppStyle from '../../../common/styles';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  listContainer: {
    marginLeft: "26%",
    paddingVertical: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: getAppStyle().colors.circle,
    position: 'absolute',
    top: 20,
    left: "-11%",
    ...getAppStyle().boxShadow.medium,
  },
  action: {
    fontSize: 16,
    color: getAppStyle().colors.primary,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  date: {
    fontSize: 14,
    paddingHorizontal: 10,
    color: getAppStyle().colors.mediumGray,
  },
  line: {
    width: 2,
    height: 80,
    backgroundColor: getAppStyle().colors.lightGrey,
    position: 'absolute',
    zIndex: -1,
    top: 20,
    left: "-8%",
  },

});