import { createTheme } from "@mui/material";

//theme for tabs
export const xsTheme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          flexDirection: "row",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          height: "30px",
          minWidth: "10px",
          paddingInline: "4px",
          color: "#737373",
          fontSize: "6px",
          fontWeight: "600",
          textTransform: "none",
          fontStyle: "normal",
          lineHeight: "33px",
          fontFamily: "Montserrat",
           "&.Mui-selected": {
            color: "#4F734F", fontWeight:"700",
          },
        },
      },
    },
  },
});

export const smTheme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          flexDirection: "row",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          height: "35px",
          minWidth: "10px",
          paddingInline: "5px",
          paddingTop: "0px",
          paddingBottom: "0px",
          color: "#737373",
          fontSize: "10px",
          fontWeight: "600",
          textTransform: "none",
          fontStyle: "normal",
          lineHeight: "33px",
          fontFamily: "Montserrat",
           "&.Mui-selected": {
            color: "#4F734F", fontWeight:"700",
          },
        },
      },
    },
  },
});

export const mdTheme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          flexDirection: "row",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          height: "40px",
          minWidth: "10px",
          paddingInline: "8px",
          color: "#737373",
          fontSize: "13px",
          fontWeight: "600",
          textTransform: "none",
          fontStyle: "normal",
          lineHeight: "33px",
          fontFamily: "Montserrat",
           "&.Mui-selected": {
            color: "#4F734F", fontWeight:"700",
          },
        },
      },
    },
  },
});

export const lgTheme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          flexDirection: "row",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          height: "40px",
          minWidth: "10px",
          padding: "12px",
          color: "#737373",
          fontSize: "16px",
          fontWeight: "600",
          textTransform: "none",
          fontStyle: "normal",
          lineHeight: "33px",
          fontFamily: "Montserrat",
           "&.Mui-selected": {
            color: "#4F734F", fontWeight:"700",
          },
        },
      },
    },
  },
});

export const xlTheme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          flexDirection: "row",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          height: "40px",
          minWidth: "10px",
          color: "#737373",
          fontSize: "20px",
          fontWeight: "600",
          textTransform: "none",
          fontStyle: "normal",
          lineHeight: "33px",
          fontFamily: "Montserrat",
            "&.Mui-selected": {
            color: "#4F734F", fontWeight:"700",
            fontWeight: "700"
          },
        },
      },
    },
  },
});

//exception for galaxy fold
export const gfTheme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          flexDirection: "row",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          height: "30px",
          minWidth: "10px",
          paddingInline: "2px",
          color: "#737373",
          fontSize: "5px",
          fontWeight: "600",
          textTransform: "none",
          fontStyle: "normal",
          lineHeight: "33px",
          fontFamily: "Montserrat",
           "&.Mui-selected": {
            color: "#4F734F", fontWeight:"700",
          },
        },
      },
    },
  },
});

//end theme for tabs
