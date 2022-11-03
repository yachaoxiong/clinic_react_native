import getAppStyle from '../../../common/styles';
import { StyleSheet } from 'react-native';


const gapVertical = {
  marginVertical: 10,
}

const gapHorizontal = {
  marginHorizontal: 10,
}

export default styles = StyleSheet.create({
  container: {
    backgroundColor: getAppStyle().colors.white,
    borderRadius: 5,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  textInput: {
    marginLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    color: getAppStyle().colors.text,
    width: '90%',
  },
  icon: {
    marginRight: 5,
    color: getAppStyle().colors.text,
    width: "100%",
  },
  patientCardContainer: {
    backgroundColor: getAppStyle().colors.white,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 26,
    paddingVertical: 10,
    flexDirection: 'row',
    ...getAppStyle().boxShadow.small
  },
  patientCardLeft: {
    justifyContent: 'center',
  },
  patientCardRight: {
    borderLeftWidth: 1,
    borderLeftColor: getAppStyle().colors.lightGrey,
    marginLeft: 30,
    paddingLeft: 20,
  },
  patientCardIcon: {
    marginRight: 10,
    color: getAppStyle().colors.primary,
    paddingVertical: 10,
  },
  patientCardDepartment: {
    fontSize: 12,
    color: getAppStyle().colors.grey,
    ...gapVertical,
  },
  patientCardName: {
    fontSize: 26,
    color: getAppStyle().colors.text,
    fontWeight: 'bold',
    ...gapVertical,
  },
  patientCardInfo: {
    fontSize: 16,
    color: getAppStyle().colors.mediumGray,
    marginVertical: 2,
  },
  patientCardStatusNormal: {
    fontSize: 16,
    color: getAppStyle().colors.text,
    backgroundColor: getAppStyle().colors.mediumGray,
    textTransform: 'uppercase',
    width: 100,
    paddingHorizontal: 5,
    paddingVertical: 2,
    textAlign: 'center',
    borderRadius: 5,
    ...gapVertical,
  },
  patientCardStatusCritical: {
    fontSize: 16,
    color: getAppStyle().colors.danger,
    backgroundColor: getAppStyle().colors.critical,
    textTransform: 'uppercase',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginVertical: 8,
    textAlign: 'center',
    width: 100,
  },
});
