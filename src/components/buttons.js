import React from "react";
import {
  PrimaryButton,
  DefaultButton,
  IconButton,
  CommandBarButton,
  Stack
} from "office-ui-fabric-react";

const stackTokens = { childrenGap: 20 };

export default function Buttons() {
  return (
    <div className="App">
      <Stack horizontal tokens={stackTokens}>
        <PrimaryButton
          text="Action"
          iconProps={{ iconName: "Trash" }}
          vallowDisabledFocus
          disabled={false}
        />
        <PrimaryButton
          text="Disabled"
          iconProps={{ iconName: "Trash" }}
          allowDisabledFocus
          disabled={true}
        />
      </Stack>
      <p styles="padding-bottom: 50px;" />
      <Stack horizontal tokens={stackTokens}>
        <PrimaryButton text="Action" vallowDisabledFocus disabled={false} />
        <PrimaryButton text="Disabled" allowDisabledFocus disabled={true} />
      </Stack>
      <p styles="padding-bottom: 50px;" />
      <Stack horizontal tokens={stackTokens}>
        <DefaultButton text="Action" vallowDisabledFocus disabled={false} />
        <DefaultButton
          text="Disabled"
          allowDisabledFocus
          disabled={true}
          checked={false}
        />
      </Stack>
      <p styles="padding-bottom: 50px;" />
      <Stack horizontal tokens={stackTokens}>
        <DefaultButton
          text="Action"
          iconProps={{ iconName: "Trash" }}
          vallowDisabledFocus
          disabled={false}
          checked={false}
        />
        <DefaultButton
          text="Disabled"
          iconProps={{ iconName: "Trash" }}
          allowDisabledFocus
          disabled={true}
        />
      </Stack>
      <p styles="padding-bottom: 50px;" />
      <Stack tokens={{ childrenGap: 8 }} horizontal>
        <IconButton iconProps={{ iconName: "Mail" }} disabled={false} />
        <IconButton iconProps={{ iconName: "Calendar" }} disabled={false} />
        <IconButton iconProps={{ iconName: "Send" }} disabled={false} />
        <IconButton iconProps={{ iconName: "People" }} disabled={false} />
      </Stack>
      <p styles="padding-bottom: 50px;" />
      <Stack horizontal tokens={stackTokens}>
        <CommandBarButton
          text="Action"
          iconProps={{ iconName: "Trash" }}
          vallowDisabledFocus
          disabled={false}
        />
        <CommandBarButton
          text="Disabled"
          iconProps={{ iconName: "Trash" }}
          allowDisabledFocus
          disabled={true}
        />
      </Stack>
      <p styles="padding-bottom: 50px;" />
    </div>
  );
}
