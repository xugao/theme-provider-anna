import * as React from "react";
import { Toggle } from "office-ui-fabric-react/lib/Toggle";
import { Stack } from "office-ui-fabric-react/lib/Stack";

const stackTokens = { childrenGap: 10 };

export default function () {
  return (
    <Stack tokens={stackTokens}>
      <Toggle
        label="Enabled and checked"
        defaultChecked
        onText="On"
        offText="Off"
      />

      <Toggle label="Enabled and unchecked" onText="On" offText="Off" />

      <Toggle
        label="Disabled and checked"
        defaultChecked
        disabled
        onText="On"
        offText="Off"
      />

      <Toggle
        label="Disabled and unchecked"
        disabled
        onText="On"
        offText="Off"
      />

      <Toggle label="With inline label" inlineLabel onText="On" offText="Off" />

      <Toggle
        label="Disabled with inline label"
        inlineLabel
        disabled
        onText="On"
        offText="Off"
      />

      <Toggle
        label="With inline label and without onText and offText"
        inlineLabel
      />

      <Toggle
        label="Disabled with inline label and without onText and offText"
        inlineLabel
        disabled
      />
    </Stack>
  );
}
