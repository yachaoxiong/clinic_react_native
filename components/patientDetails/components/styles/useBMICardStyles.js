import { StyleSheet, Text, View } from 'react-native';

import getAppStyle from '../../../../common/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: getAppStyle().colors.primary,
    ...getAppStyle().boxShadow.large,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
  },
  containerLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: getAppStyle().colors.grey,
    borderRightWidth: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: getAppStyle().colors.white,
  },
  smTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: getAppStyle().colors.white,
  },
  value: {
    fontSize: 14,
    color: getAppStyle().colors.white,
    padding: 2,
    marginTop: 5,
    borderColor: getAppStyle().colors.white,
    borderWidth: 1,
    borderRadius: 5,
  },
  containerRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20
  },
  height: {
    fontSize: 22,
    fontWeight: 'bold',
    color: getAppStyle().colors.white,
  },
  heightUnit: {
    fontSize: 16,
    color: getAppStyle().colors.mediumGray,
  },
  heightLabel: {
    fontSize: 16,
    color: getAppStyle().colors.mediumGray,
  },
  bodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  bodyInfoRow: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  infoValue: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default styles;