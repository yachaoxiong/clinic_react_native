import getAppStyle from '../../../common/styles';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: getAppStyle().colors.background,
    ...getAppStyle().boxShadow.large,
    marginVertical: 10,
    borderRadius: 12,
    padding: 20,
    width: '100%',
  },
  infoRow: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: getAppStyle().colors.text,
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: getAppStyle().colors.text,
  }
});