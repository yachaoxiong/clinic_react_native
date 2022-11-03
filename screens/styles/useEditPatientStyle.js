import getAppStyle from '../../common/styles';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getAppStyle().colors.background,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  scrollContainer: {
    marginBottom: 50,
  },
  buttonContainer: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
