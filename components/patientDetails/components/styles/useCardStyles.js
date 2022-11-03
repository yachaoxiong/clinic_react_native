import { StyleSheet, Text, View } from 'react-native';

import getAppStyle from '../../../../common/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: getAppStyle().colors.background,
    ...getAppStyle().boxShadow.large,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 12,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomColor: getAppStyle().colors.lightGrey,
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
  infoItem: {
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  contactSection:{
    padding: 20,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  }
});

export default styles;