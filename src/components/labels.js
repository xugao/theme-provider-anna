import * as React from "react";

import { Label } from "office-ui-fabric-react/lib/Label";
import { TextField } from "office-ui-fabric-react/lib/TextField";

export default function () {
  return (
    <div>
      <Label>I'm a Label</Label>
      <Label disabled={true}>I'm a disabled Label</Label>
      <Label required={true}>I'm a required Label</Label>
      <Label>A Label for An Input</Label>
      <TextField />
    </div>
  );
}
