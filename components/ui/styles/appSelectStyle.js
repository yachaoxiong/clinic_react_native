import getAppStyle from '../../../common/styles';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectContainer: {
    width: "80%",
    backgroundColor: getAppStyle().colors.lightGrey,
    borderRadius: 5,
    padding: 8,
  },
  label: {
    fontSize: 16, 
    color: getAppStyle().colors.text,
    textTransform: 'uppercase',
    paddingRight: 10,
  },
  select: {
    fontSize: 22,
    padding: 8,
    width: "80%",
    color: getAppStyle().colors.text,
    backgroundColor: getAppStyle().colors.danger,
    borderRadius: 5,
  },
  rowStyle: {
    backgroundColor: getAppStyle().colors.lightGrey,
    textAlign: 'left',
    borderRadius: 5,
  },
  buttonStyle: {
    backgroundColor: getAppStyle().colors.lightGrey,
    width: "100%",
    height: 45,
    borderRadius: 5,
    textAlign: 'left',
  },
  buttonTextStyle: {
    fontSize: 18,
    textAlign: 'left',
  },
});