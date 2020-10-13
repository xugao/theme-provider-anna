const btnstyle = {
  root: {
    fontSize: "12px",
    padding: "6px 8px",
    height: "32px"
  },
  icon: { fontSize: "12px" }
};
export default {
  fonts: {
    xSmall: { fontSize: "10px", fontWeight: "regular" },
    small: { fontSize: "11px", fontWeight: "regular" },
    smallPlus: { fontSize: "11px", fontWeight: "regular" },
    medium: { fontSize: "12px", fontWeight: "regular" },
    mediumPlus: { fontSize: "14px", fontWeight: "semibold" },
    large: { fontSize: "18px", fontWeight: "regular" },
    xLarge: { fontSize: "16px", fontWeight: "semibold" }
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
    Checkbox: {
      styles: {
        checkbox: {
          height: "18px",
          width: "18px"
        },
        checkmark: {}
      }
    },
    CommandBarButton: {
      styles: btnstyle
    },
    ChoiceGroupOption: {
      styles: {
        root: {
          minHeight: "24px",
          marginTop: 0
        },
        field: {
          "&::before": {
            width: "16px",
            height: "16px",
            top: "4x",
            left: "4px"
          },
          "&::after": {
            width: "4px",
            height: "4px",
            borderWidth: "4px",
            top: "4px",
            left: "8px"
          },
          "&:hover::after": {
            width: "8px",
            height: "8px",
            top: "4px",
            left: "8px"
          }
        },
        choiceFieldWrapper: {},
        labelWrapper: {}
      }
    },
    Dropdown: {
      styles: {
        title: {
          height: "32px",
          minHeight: "32px",
          lineHeight: "32px"
        },
        dropdownItem: {
          height: "32px",
          minHeight: "32px",
          lineHeight: "32px"
        },
        dropdownItemSelected: {
          height: "32px",
          minHeight: "32px",
          lineHeight: "32px"
        }
      }
    },
    Toggle: {
      styles: {
        pill: {
          width: "34px",
          height: "16px"
        },
        thumb: {
          width: "10px",
          height: "10px",
          borderWidth: "5px"
        }
      }
    },
    ContextualMenu: { styles: { root: {} } }
  }
};
