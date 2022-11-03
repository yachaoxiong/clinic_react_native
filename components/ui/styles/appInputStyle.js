import getAppStyle from '../../../common/styles';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16, 
    color: getAppStyle().colors.text,
    textTransform: 'uppercase',
    paddingRight: 10,
  },
  input: {
    fontSize: 18,
    padding: 11,
    width: "100%",
    color: getAppStyle().colors.text,
    backgroundColor: getAppStyle().colors.lightGrey,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  inputFocused: {
    fontSize: 18,
    padding: 11,
    width: "100%",
    color: getAppStyle().colors.text,
    backgroundColor: getAppStyle().colors.lightGrey,
    borderRadius: 5,
    borderColor: getAppStyle().colors.primary,
    borderWidth: 2,
  }
});
