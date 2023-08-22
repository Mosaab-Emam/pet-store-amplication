import { PetUpdateManyWithoutTagsInput } from "./PetUpdateManyWithoutTagsInput";

export type TagUpdateInput = {
  name?: string;
  pets?: PetUpdateManyWithoutTagsInput;
};
