import * as React from "react";
import { ChoiceGroup } from "office-ui-fabric-react";

export default function ChoiceGroups() {
  return (
    <ChoiceGroup
      selectedKey="Right"
      label="Reading Pane"
      options={[
        {
          key: "Right",
          text: "Show on the right",
          //imageUri: READING_PANE_RIGHT_SVG,
          width: 280
        },
        {
          key: "Bottom",
          text: "Show on the bottom",
          //imageUri: READING_PANE_BOTTOM_SVG,
          width: 280
        },
        {
          key: "Off",
          text: "Hide",
          //imageUri: READING_PANE_OFF_SVG,
          width: 280
        }
      ]}
    />
  );
}
