import getAppStyle from '../../../common/styles';
import { StyleSheet } from 'react-native';

const primaryButton = StyleSheet.create({
  container: {
    backgroundColor: getAppStyle().colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
  },
  text: {
    color: getAppStyle().colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  }, 
});

const secondaryButton = StyleSheet.create({
  container: {
    backgroundColor: getAppStyle().colors.white,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: getAppStyle().colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const dangerButton = StyleSheet.create({
  container: {
    backgroundColor: getAppStyle().colors.danger,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
  },
  text: {
    color: getAppStyle().colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  }, 
});

const outlineSmall = StyleSheet.create({
  container: {
    backgroundColor: getAppStyle().colors.background,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: getAppStyle().colors.mediumGray,
  },
  text: {
    color: getAppStyle().colors.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
});




export default function getButtonStyle(type)  {
  return type === 'primary'
    ? primaryButton
    : type === 'secondary'
    ? secondaryButton
    : type === 'danger'
    ? dangerButton
    : type === 'outlineSmall'
    ? outlineSmall
    : primaryButton;
};
