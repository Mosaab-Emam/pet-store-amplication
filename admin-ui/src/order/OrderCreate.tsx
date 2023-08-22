import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { PetTitle } from "../pet/PetTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="complete" source="complete" />
        <ReferenceInput source="petId.id" reference="Pet" label="pet_id">
          <SelectInput optionText={PetTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantity" source="quantity" />
        <DateTimeInput label="ship_date" source="shipDate" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Placed", value: "placed" },
            { label: "Approved", value: "approved" },
            { label: "Delivered", value: "delivered" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
