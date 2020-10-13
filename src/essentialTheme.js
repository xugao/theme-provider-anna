const btnstyle = {
  root: {
    fontSize: "14px",
    padding: "6px 12px"
  }
};

export default {
  fonts: {
    xSmall: { fontSize: "10px", fontWeight: "regular" },
    small: { fontSize: "12px", fontWeight: "regular" },
    smallPlus: { fontSize: "12px", fontWeight: "regular" },
    medium: { fontSize: "14px", fontWeight: "regular" },
    mediumPlus: { fontSize: "16px", fontWeight: "semibold" },
    large: { fontSize: "18px", fontWeight: "regular" },
    xLarge: { fontSize: "20px", fontWeight: "semibold" }
  },
  components: {
    Icon: {
      styles: {
        root: {
          fontSize: "16px"
        }
      }
    },
    DefaultButton: {
      styles: btnstyle
    },
    SecondaryButton: {
      styles: btnstyle
    },
    CommandBarButton: {
      styles: btnstyle
    },
    Checkbox: {
      styles: {
        checkbox: {
          height: "20px",
          width: "20px"
        },
        checkmark: {}
      }
    },
    Dropdown: {
      styles: {
        title: {
          height: "36px",
          minHeight: "36px",
          lineHeight: "36px"
        },
        dropdownItem: {
          minHeight: "36px",
          lineHeight: "36px"
        },
        dropdownItemSelected: {
          height: "36px",
          minHeight: "36px",
          lineHeight: "36px"
        }
      }
    },
    Toggle: {
      styles: {
        pill: {
          width: "40px",
          height: "20px"
        },
        thumb: {
          width: "12px",
          height: "12px"
        }
      }
    }
  }
};
