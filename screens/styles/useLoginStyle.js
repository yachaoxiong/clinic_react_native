import getAppStyle from '../../common/styles';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: getAppStyle().colors.background,
    paddingHorizontal: 30,
  },
  title: {
    color: getAppStyle().colors.text,
    fontSize: 28,
    fontWeight: 'bold',
  },
  logo: {
    width: "100%",
    height: 160,
    resizeMode: 'contain',
  },
  text: {
    color: getAppStyle().colors.text,
    fontSize: 16,
    
  },
  link: {
    color: getAppStyle().colors.primary,
    marginLeft: 5,
    fontSize: 16,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  message: {
    color: getAppStyle().colors.danger,
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
