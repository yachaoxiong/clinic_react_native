import { StyleSheet, Text, View } from 'react-native';
import getAppStyle from '../../../common/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: getAppStyle().colors.background,
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    backgroundColor: getAppStyle().colors.lightGrey,
    height: 1,
    width: '100%',
  },
  text: {
    color: getAppStyle().colors.mediumGray,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 14,
  },
  value: {
    color: getAppStyle().colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    
  }, 
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    
  }

});

export default styles;