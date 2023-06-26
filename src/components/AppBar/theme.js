import { createTheme } from "@mui/material";
import { useContext } from "react";
import { NavigationContext } from "../../helper/context";

//theme for tabs
export const Themes = (index) => {
  return {
    xsTheme: createTheme({
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
              color: index === 0 ? "white" : "#737373",
              fontSize: "6px",
              fontWeight: "600",
              textTransform: "none",
              fontStyle: "normal",
              lineHeight: "33px",
              fontFamily: "Montserrat",
              "&.Mui-selected": {
                color: "#4F734F",
                fontWeight: "700",
              },
            },
          },
        },
      },
    }),
    smTheme: createTheme({
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
              paddingTop: "0px ",
              paddingBottom: "0px",
              color: index === 0 ? "white" : "#737373",
              fontSize: "10px",
              fontWeight: "600",
              textTransform: "none",
              fontStyle: "normal",
              lineHeight: "33px",
              fontFamily: "Montserrat",
              "&.Mui-selected": {
                color: "#4F734F",
                fontWeight: "700",
              },
            },
          },
        },
      },
    }),
    mdTheme: createTheme({
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
              paddingInline: "12px",
              color: index === 0 ? "white" : "#737373",
              fontSize: "10.5px",
              fontWeight: "600",
              textTransform: "none",
              fontStyle: "normal",
              lineHeight: "33px",
              fontFamily: "Montserrat",
              "&.Mui-selected": {
                color: "#4F734F",
                fontWeight: "700",
              },
            },
          },
        },
      },
    }),
    lgTheme: createTheme({
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
              padding: "14px",
              color: index === 0 ? "white" : "#737373",
              fontSize: "13px",
              fontWeight: "600",
              textTransform: "none",
              fontStyle: "normal",
              lineHeight: "33px",
              fontFamily: "Montserrat",
              "&.Mui-selected": {
                color: "#4F734F",
                fontWeight: "700",
              },
            },
          },
        },
      },
    }),
    xlTheme: createTheme({
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
              color: index === 0 ? "white" : "#737373",
              fontSize: "18px",
              fontWeight: "600",
              textTransform: "none",
              fontStyle: "normal",
              lineHeight: "33px",
              fontFamily: "Montserrat",
              "&.Mui-selected": {
                color: "#4F734F",
                fontWeight: "700",
                fontWeight: "700",
              },
            },
          },
        },
      },
    }),
    //galaxy fold
    gfTheme: createTheme({
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
              color: index === 0 ? "white" : "#737373",
              fontSize: "5px",
              fontWeight: "600",
              textTransform: "none",
              fontStyle: "normal",
              lineHeight: "33px",
              fontFamily: "Montserrat",
              "&.Mui-selected": {
                color: "#4F734F",
                fontWeight: "700",
              },
            },
          },
        },
      },
    }),
  };
};
