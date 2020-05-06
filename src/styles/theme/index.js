import { createMuiTheme }  from '@material-ui/core/styles'
const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none'
    },
    fontSize: 16
  },
  breakpoints: {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    values:{
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    tooltip: 1500
  },
  palette: {
    primary: { 
      main: '#467fcf'
    },
    secondary: {
      main: '#fff'
    },
    type: "light",
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    }
  },
})
export default theme