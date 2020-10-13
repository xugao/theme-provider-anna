import React from "react";
import { ThemeProvider } from "@fluentui/react-theme-provider";
import { Label } from "office-ui-fabric-react";
import Buttons from "./buttons";
import Checkboxes from "./checkboxes";
import ChoiceGroups from "./choicegroup";
import Dropdowns from "./dropdowns";
import Toggles from "./toggles";
import ContexualMenus from "./contextualMenus";
import Dialog from "./dialog";

export default function ComponentSet({ theme, themeName }) {
  const label = `Baseline: ${themeName}`;
  const styles = {
    "font-size": "16px",
    "text-align": "left",
    padding: "20px 0"
  };
  const xsTextStyle = {
    "font-size": theme.fonts.xSmall.fontSize,
    "font-weight": theme.fonts.xSmall.fontWeight
  };
  const smallTextStyle = {
    "font-size": theme.fonts.small.fontSize,
    "font-weight": theme.fonts.small.fontWeight
  };
  const smallPlusTextStyle = {
    "font-size": theme.fonts.smallPlus.fontSize,
    "font-weight": theme.fonts.smallPlus.fontWeight
  };
  const mTextStyle = {
    "font-size": theme.fonts.medium.fontSize,
    "font-weight": theme.fonts.medium.fontWeight
  };
  const mediumPlusTextStyle = {
    "font-size": theme.fonts.mediumPlus.fontSize,
    "font-weight": theme.fonts.mediumPlus.fontWeight
  };
  const lTextStyle = {
    "font-size": theme.fonts.large.fontSize,
    "font-weight": theme.fonts.large.fontWeight
  };
  const xLargeTextStyle = {
    "font-size": theme.fonts.xLarge.fontSize,
    "font-weight": theme.fonts.xLarge.fontWeight
  };

  return (
    <ThemeProvider theme={theme}>
      <Label style={styles}>{label}</Label>
      <div className="App">
        <div style={xsTextStyle}>this is xsmall font</div>
        <div style={smallTextStyle}>this is small font</div>
        <div style={smallPlusTextStyle}>this is smallPlus font</div>
        <div style={mTextStyle}>this is medium font</div>
        <div style={mediumPlusTextStyle}>this is mediumPlus font</div>
        <div style={lTextStyle}>this is large font</div>
        <div style={xLargeTextStyle}>this is xLarge font</div>

        <Label style={styles}>Buttons</Label>
        <Buttons />
        <Label style={styles}>Checkboxes</Label>
        <Checkboxes />
        <Label style={styles}>ChoiceGroups</Label>
        <ChoiceGroups />
        <Label style={styles}>Dropdowns</Label>
        <Dropdowns />
        <Label style={styles}>Toggles</Label>
        <Toggles />
        <Label style={styles}>ContexualMenus</Label>
        <ContexualMenus />
        <Label style={styles}>Dialog</Label>
        <Dialog />
      </div>
    </ThemeProvider>
  );
}
