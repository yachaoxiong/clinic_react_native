import getAppStyle from '../../../common/styles';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: getAppStyle().colors.background,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 22, 
    color: getAppStyle().colors.text,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  appInput: {
    width: "100%",
  },
  formContainer: {
    width: "100%",
  },
  buttonContainer: {
    marginVertical: 20,
  },
 
});
