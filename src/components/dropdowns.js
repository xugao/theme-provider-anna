import * as React from "react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Dropdown, Icon } from "office-ui-fabric-react";

export default function DrownDowns() {
  return (
    <Stack tokens={{ childrenGap: 50 }}>
      <Dropdown
        selectedKey="none"
        label="Basic uncontrolled example"
        options={[
          { key: "none", text: "(No signature)" },
          { key: "signature1", text: "Professional signature" },
          { key: "sig2", text: "Informal Signature" }
        ]}
      />

      <Dropdown
        label=""
        defaultSelectedKey="key2"
        options={[
          { key: "key1", text: "Trash", data: { icon: "Trash" } },
          { key: "key2", text: "Mail", data: { icon: "Mail" } },
          { key: "key3", text: "Calendar", data: { icon: "Calendar" } }
        ]}
        disabled={false}
        onRenderOption={(option) => (
          <div>
            {option.data && option.data.icon && (
              <Icon
                iconName={option.data.icon}
                aria-hidden="true"
                title={option.data.icon}
              />
            )}
            <span>{option.text}</span>
          </div>
        )}
      />
    </Stack>
  );
}
