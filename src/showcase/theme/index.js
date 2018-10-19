const blue = '#1890ff';
const lightBlue = '#e6f7ff';
const blueHover = '#40a9ff';
const blueActive = '#096dd9';
const green = '#00F281';
const greenHover = '#55EAA5';
const greenActive = '#00C368';

const Theme = {
  colors: {
    backgroundGradientHorizontal: 'linear-gradient(62deg, #001358, #125ac4);',
    backgroundGradientVertical: 'linear-gradient(to top, #001358, #125ac4);',
    blue: '#1890ff',
    lightBlue: '#e6f7ff',
    blueHover: '#40a9ff',
    blueActive: '#096dd9',
    green: '#00F281',
    greenHover: '#55EAA5',
    greenActive: '#00C368',
  },
  spin: {
    color: blue,
  },
  footer: {
    maxWidth: '1200px',
    backgroundColor: 'linear-gradient(114deg, #001358, #125ac4);',
    padding: '40px',
    titleColor: '#ffffff',
    linkColor: 'rgba(255,255,255,0.8)',
    linkColorHover: blue,
    textColor: 'rgba(255,255,255,0.8)',
    breakAt: '900px',
    titleSize: '18px',
    linkSize: '16px',
    textSize: '16px',
  },
  pagination: {
    color: 'rgba(0, 0, 0, 0.65)',
    borderColor: '#d9d9d9',
    backgroundColor: '#ffffff',
    itemActiveBorderColor: blue,
    itemHoverBorderColor: blue,
    disabledItemBorderColor: '#d9d9d9',
    disabledItemColor: 'rgba(0, 0, 0, 0.25)',
  },
  menu: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    itemHoverColor: blue,
    itemSelectedColor: blue,
    borderBottom: `2px solid ${blue}`,
    backgroundColorItem: lightBlue,
  },
  dropdown: {
    color: blue,
    colorHover: blueHover,
    submenuColorHover: blue,
    submenuBackgroundColorHover: lightBlue,
  },
  filter: {
    checkedColor: blue,
    checkedBackgroundColor: lightBlue,
    checkedBorderColor: '#91d5ff',
    unCheckedBackgroundColor: 'transparent',
    unCheckedBorderColor: 'transparent',
    unCheckedColor: 'rgba(0, 0, 0, 0.65)',
    hoverColor: blue
  },
  progressbar: {
    color: '#ccc',
    exceptionColor: '#f5222d',
    successColor: green,
    progressColor: blue
  },
  statCard: {
    color: '#4a4a4a',
    backgroundColor: '#fff'
  },
  switch: {
    checkedBackgroundColor: blue,
    uncheckedBackgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  heading: {
    color: 'black',
  },
  buttons: {
    primary: {
      green: {
        color: 'white',
        colorHover: 'white',
        colorActive: '',
        backgroundColor: green,
        backgroundColorHover: greenHover,
        backgroundColorActive: greenActive,
        borderColor: green,
        borderColorHover: greenHover,
        borderColorActive: greenActive,
      },
      blue: {
        color: 'white',
        colorHover: 'white',
        colorActive: 'white',
        backgroundColor: blue,
        backgroundColorHover: blueHover,
        backgroundColorActive: blueActive,
        borderColor: blue,
        borderColorHover: blueHover,
        borderColorActive: blueActive,
      },
    },
    secondary: {
      default: {
        color: 'white',
        colorHover: blueHover,
        colorActive: blueActive,
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        backgroundColorActive: 'transparent',
        borderColor: 'white',
        borderColorHover: blueHover,
        borderColorActive: blueActive,
      },
      back: {
        color: 'rgba(0, 0, 0, 0.65)',
        colorHover: blueHover,
        colorActive: blueActive,
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        backgroundColorActive: '#ffffff',
        borderColor: '#d9d9d9',
        borderColorHover: blueHover,
        borderColorActive: blueActive,
      },
    },
  },
};

export default Theme;
