import getAppStyle from '../../../common/styles';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  checkbox: {
    height: 20,
    width: 20,
    color: getAppStyle().colors.text,
    backgroundColor: getAppStyle().colors.darkGrey,
    borderRadius: 5,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    color: getAppStyle().colors.text,
    textTransform: 'uppercase',
  },
  active: {
    height: 20,
    width: 20,
    color: getAppStyle().colors.text,
    backgroundColor: getAppStyle().colors.primary,
    borderRadius: 5,
  }
});
