import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import Component from "./components/MyComponent";


const theme = createTheme({
  lightColors: {
    primary: '#000',
    secondary: ''
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
}
