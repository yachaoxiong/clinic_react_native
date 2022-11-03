import getAppStyle from '../../common/styles';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  filtersContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  filterItem: {
    marginRight: 40,
  },
  patientsContainer: {
    overflow: 'scroll',
    flex: 1,
    marginBottom: 50,
  },
  logo: {
    width: "100%",
    height: 260,
    resizeMode: 'contain',
    marginTop: 30,
  },
  noResultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: getAppStyle().colors.mediumGray,
  }

});
