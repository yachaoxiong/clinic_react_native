import { StyleSheet, Text, View } from 'react-native';
import getAppStyle from '../../../common/styles';

const styles = StyleSheet.create({
  btnGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  actionBtn: {
    margin: 10,
  },
  recordContainer: {
    height: "90%",
    padding: 10,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: getAppStyle().colors.background,
    padding: 10,
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
  modalText: {
    paddingVertical: 10,
    fontSize: 16, 
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: getAppStyle().colors.lightGrey,
    marginVertical: 10,
    width: "100%",
  },
  actionBtn: {
    marginVertical: 10,
  }
});

export default styles;