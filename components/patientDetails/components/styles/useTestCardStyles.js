import { StyleSheet, Text, View } from 'react-native';
import getAppStyle from '../../../../common/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: getAppStyle().colors.background,
    ...getAppStyle().boxShadow.large,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerRight: {
    justifyContent: 'center',
    padding: 20,
  },
  valueNormal: {
    fontSize: 36,
    fontWeight: 'bold',
    color: getAppStyle().colors.primary,
  },
  valueDanger: {
    fontSize: 36,
    fontWeight: 'bold',
    color: getAppStyle().colors.danger,
  },
  type: {
    fontSize: 20,
    color: getAppStyle().colors.gray,
    padding: 2,
    marginTop: 5,
  },
  date: {
    fontSize: 14,
    color: getAppStyle().colors.mediumGray,
    padding: 2,
    marginTop: 5,
  },
  status: {
    fontSize: 14,
    color: getAppStyle().colors.danger,
    paddingHorizontal: 10,
    paddingVertical: 3,
    position: 'absolute',
    right: 20,
    top: 20,
    textTransform: 'uppercase',
    backgroundColor: getAppStyle().colors.critical,
  },
});

export default styles;