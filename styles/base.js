import {StyleSheet, Dimensions} from 'react-native'

// ----------- Basics ----------- //
export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}

export const getColors = (theme) => {
  const palette = {
    light: {
      bg: '#fff',
      bgDefault: '#f2f2f2',
      text: '#000',
      border: '#E5E5E5',
      // blueish
      bgInteract: '#D8E6FF',
      textInteract: '#005DFF',
      // reddish
      bgDestruct: '#FFCAC9',
      textDestruct: '#FF0300',
    },
    dark: {
      bg: '#181818',
      bgDefault: '#222',
      text: '#d8d8d8',
      border: '#2a2a2a',
      // blueish
      bgInteract: '#001B4A',
      textInteract: '#D8E6FF',
      // reddish
      bgDestruct: '#3D0100',
      textDestruct: '#FFCAC9',
    }
  }
  return palette[theme]
}

export const padding = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32
}

export const fonts = {
  s: 15,
  m: 17,
  l: 19,
  xl: 23,
}

export const dropShadow = {
  shadowColor: '#000',
  shadowOffset: {width: 0, height: padding.xs},
  shadowOpacity: 0.05,
  shadowRadius: padding.s,
  elevation: 3,
}

const containerStyles = {
  padding: padding.m,
}

const baseStyles = (theme) => {
  const colors = getColors(theme)
  return {
    container: {
      ...containerStyles
    },
    boardDetailsContainer: {
      ...containerStyles,
      paddingTop: 0,
    },
    title: {
      color: colors.text,
      fontSize: fonts.xl,
      fontWeight: '600',
      marginTop: padding.m,
      marginBottom: padding.s,
    },
    icon: {
      color: colors.text,
    },
    button: {
      width: '100%',
      borderRadius: padding.m,
      padding: padding.m,
      marginVertical: padding.s,
      backgroundColor: colors.bgInteract,
    },
    buttonTitle: {
      textAlign: 'center',
      fontSize: fonts.l,
      fontWeight: '600',
      color: colors.textInteract,
    },
    buttonDestruct: {
      backgroundColor: colors.bgDestruct,
    },
    buttonTitleDestruct: {
      color: colors.textDestruct,
    },
    card: {
      backgroundColor: colors.bg,
      borderRadius: padding.m,
      padding: padding.m,
      marginBottom: padding.m,
      flexDirection: 'row',
      alignItems: 'center',
      ...dropShadow,
    },
    cardColor: {
      width: padding.m,
      height: padding.m,
      borderRadius: padding.m / 2,
      marginRight: padding.m
    },
    cardTitle: {
      color: colors.text,
      flex: 1,
      fontSize: fonts.xl
    },
    stackBar: {
      flex: 1,
      flexDirection: 'row',
      borderBottomColor: colors.border,
      borderBottomWidth: 1,
      marginBottom: padding.m,
      backgroundColor: colors.bgDefault,
      width: '100%',
      paddingLeft: padding.m,
      paddingRight: padding.m,
    },
    stackTab: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    stackTabDraggedOver: {
      backgroundColor: colors.bgInteract,
    },
    stackTabText: {
      textAlign: 'center',
      textTransform: 'uppercase',
      color: colors.text,
      padding: padding.m,
    },
    stackTabTextSelected: {
      fontWeight: 'bold'
    },
    stackTabTextNormal: {
      fontWeight: 'normal'
    },
    textWarning: {
      color: colors.text,
      textAlign: 'center',
      fontSize: fonts.l,
    },
    descriptionInput: {
      minHeight: 120,
    },
    textCheckbox: {
      color: colors.text,
      marginLeft: 5,
    },
    input: {
      color: colors.text,
      width: '100%',
      flexDirection: 'row',
      backgroundColor: colors.bg,
      borderColor: colors.border,
      fontSize: fonts.m,
      borderWidth: 1,
      borderRadius: padding.s,
      marginVertical: padding.s,
      padding: padding.m,
    },
    inputButton: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      borderRadius: padding.m,
      padding: padding.m,
      marginVertical: padding.s,
      backgroundColor: colors.bgInteract,
    },
    inputText: {
      textAlign: 'center',
      fontSize: fonts.m,
      color: colors.textInteract,
    },
    inputField: {
      marginVertical: padding.s,
    },
    inputLabel: {
      fontWeight: 'bold'
    },
  }
}

const createStyles = (theme = 'light', overrides = {}) => {
  const styles = baseStyles(theme)
  return StyleSheet.create({...styles, ...overrides})
}

export default createStyles