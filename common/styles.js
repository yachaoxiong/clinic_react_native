import { getMode } from "../utils/functions";
export const AppStyles = {
  colors: {
    primary: '#052F5F',
    secondary: '#005377',
    black: '#383838',
    white: '#fff',
    grey: '#464646',
    mediumGray:"#b4b4b4",
    lightGrey: '#f5f6fa',
    darkGrey: '#7f8c8d',
    dark: '#000',
    danger: '#e74c3c',
    success: '#2ecc71',
    critical: '#FF97C1',
    circle: '#41C78E',
  },
  boxShadow: {
    small: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.12,
      shadowRadius: 2,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
  },
  border: {
    radius: 5,
    borderWidth: 1,
    borderColor: '#052F5F',
  }
}

export const lightTheme = {
  ...AppStyles,
  text: {
      color: AppStyles.colors.black,
  },
  card: {
    style: {
      backgroundColor: AppStyles.colors.white
    }
  },
  Button: {
    buttonStyle: {
      backgroundColor: AppStyles.colors.primary,
    },
    titleStyle: {
      color: AppStyles.colors.white,
    },
  },
  Input: {
    inputStyle: {
      color: AppStyles.colors.black,
    },
  },
  colors: {
    ...AppStyles.colors,
    background: AppStyles.colors.white,
    card: AppStyles.colors.white,
    text: AppStyles.colors.black,
    border: AppStyles.colors.grey,
    notification: AppStyles.colors.primary,
  },
};

// export const darkTheme = {
//   ...AppStyles,
//   text: {
//       color: AppStyles.colors.white,
//   },
//   card: {
//       backgroundColor: AppStyles.colors.dark
//   },
//   Button: {
//     buttonStyle: {
//       backgroundColor: AppStyles.colors.primary,
//     },
//     titleStyle: {
//       color: AppStyles.colors.white,
//     },
//   },
//   Input: {
//     inputStyle: {
//       color: AppStyles.colors.white,
//     },
//   },
//   colors: {
//     ...AppStyles.colors,
//     background: AppStyles.colors.black,
//     card: AppStyles.colors.black,
//     text: AppStyles.colors.white,
//     border: AppStyles.colors.grey,
//     notification: AppStyles.colors.primary,
//   },
// };

export default function getAppStyle() {
  return lightTheme
}

  