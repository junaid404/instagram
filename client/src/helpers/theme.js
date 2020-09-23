import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3897f0",
    },
    secondary: {
      main: "#385185",
    },
    error: {
      main: "#ed4956",
    },
    background: {
      default: "#fafafa",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: "none",
        borderBottom: "1px solid #e6e6e6",
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: "#fff",
        boxShadow: "0 0 1.4px rgba(0,0,0, .5)",
        padding: 0,
      },
      arrow: {
        fontSize: 20,
        "&::before": {
          backgroundColor: "#fff",
          boxShadow: "0 0 1.4px rgba(0,0,0, .5)",
        },
      },
    },
    MuiButton: {
      root: {
        "&.MuiButton-containedPrimary:hover": {
          boxShadow: "none",
        },
        textTransform: "unset",
      },
      contained: {
        boxShadow: "unset",
      },
    },
    MuiCard: {
      root: {
        boxShadow: "0 0 1.2px rgba(0,0,0, 0.7)",
      },
    },
  },
  mixins: {
    customInput: {
      background: "#FAFAFA",
      marginBottom: "6px !important",
      fontSize: 20,
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #ddd",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#999",
      },
    },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", Helvetica, Arial, sans-serif',
  },
  breakpoints: {
    values: {
      md: 1000,
      xs: 400,
    },
  },
});

export default theme;
