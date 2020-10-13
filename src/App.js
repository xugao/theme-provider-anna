import React from "react";
import "./styles.css";
import { Stack } from "office-ui-fabric-react";
import defaultTheme from "./defaultTheme";
import essentialTheme from "./essentialTheme";
import advancedTheme from "./advancedTheme";
import ComponentSet from "./components/componentSet";

export default function App() {
  return (
    <Stack horizontal tokens={{ childrenGap: 100 }}>
      <ComponentSet theme={essentialTheme} themeName="essential" />
      <ComponentSet theme={defaultTheme} themeName="default" />
      <ComponentSet theme={advancedTheme} themeName="advanced" />
    </Stack>
  );
}
