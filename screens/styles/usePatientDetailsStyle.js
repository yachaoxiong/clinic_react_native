import getAppStyle from '../../common/styles';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getAppStyle().colors.background,
  },
  header: {
    padding: 10,
    borderBottomColor: getAppStyle().colors.lightGrey,
    borderBottomWidth: 1,
    marginHorizontal: 26,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: getAppStyle().colors.primary,
  },
  headerDepartment: {
    fontSize: 16,
    color: getAppStyle().colors.mediumGray,
  },
  headerDoctor: {
    fontSize: 16,
    color: getAppStyle().colors.black,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: getAppStyle().colors.background,
    padding: 20,
    borderRadius: 5,
    marginBottom: 50,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: getAppStyle().colors.text,
    marginBottom: 10,
  },
  modalButton: {
    position: 'absolute',
    top: -35,
    right: 10,
  },
  modalColor: {
    color: getAppStyle().colors.mediumGray
  },
  divider: {
    height: 1,
    backgroundColor: getAppStyle().colors.lightGrey,
    marginVertical: 10,
    width: "100%",
  },
  actionBtn: {
    marginVertical: 10,
  },
});