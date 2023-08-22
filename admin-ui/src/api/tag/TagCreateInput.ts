import { PetCreateNestedManyWithoutTagsInput } from "./PetCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  name: string;
  pets?: PetCreateNestedManyWithoutTagsInput;
};
