const btnstyle = {
  root: {
    // fontSize: "12px",
    padding: "6px 8px",
    height: "24px"
  },
  icon: { fontSize: "12px" }
};
export default {
  fonts: {
    xSmall: { fontSize: "10px", fontWeight: "regular" },
    small: { fontSize: "10px", fontWeight: "regular" },
    smallPlus: { fontSize: "10px", fontWeight: "regular" },
    medium: { fontSize: "12px", fontWeight: "regular" },
    mediumPlus: { fontSize: "12px", fontWeight: "semibold" },
    large: { fontSize: "16px", fontWeight: "regular" },
    xLarge: { fontSize: "14px", fontWeight: "semibold" }
  },
  components: {
    Icon: {
      styles: {
        root: {
          fontSize: "12px"
        }
      }
    },
    DefaultButton: {
      styles: btnstyle
    },
    SecondaryButton: {
      styles: btnstyle
    },
    Link: {
      styles: {
        root: {
          height: "28px",
          lineHeight: "28px"
        }
      }
    },
    CommandBarButton: {
      styles: btnstyle
    },
    IconButton: {
      styles: btnstyle
    },
    Checkbox: {
      styles: {
        checkbox: {
          height: "16px",
          width: "16px"
        },
        checkmark: {
          fontSize: "10px"
        }
      }
    },
    ChoiceGroup: {
      styles: {
        flexContainer: {},
        label: {}
      }
    },
    ChoiceGroupOption: {
      styles: {
        root: {
          minHeight: "20px",
          marginTop: 0
        },
        field: {
          "&::before": {
            width: "12px",
            height: "12px",
            top: "3px",
            left: "3px"
          },
          "&::after": {
            width: "3px",
            height: "3px",
            borderWidth: "3px",
            top: "6px",
            left: "6px"
          },
          "&:hover::after": {
            width: "6px",
            height: "6px",
            top: "6px",
            left: "6px"
          }
        },
        choiceFieldWrapper: {},
        labelWrapper: {}
      }
    },
    Dropdown: {
      styles: {
        title: {
          height: "28px",
          minHeight: "28px",
          lineHeight: "28px"
        },
        dropdownItem: {
          minHeight: "28px",
          lineHeight: "28px"
        },
        dropdownItemSelected: {
          height: "28px",
          minHeight: "28px",
          lineHeight: "28px"
        }
      }
    },
    Label: {
      styles: {
        root: {}
      }
    },
    ContextualMenuItem: {
      styles: {
        root: {
          height: "28px",
          lineHeight: "28px"
        },
        itemText: {
          height: "28px",
          lineHeight: "28px"
        }
      }
    },
    TextField: { styles: { root: {} } },
    Toggle: {
      styles: {
        pill: {
          width: "28px",
          height: "14px"
        },
        thumb: {
          width: "8px",
          height: "8px",
          borderWidth: "4px"
        }
      }
    }
  }
};
