import { PetUpdateManyWithoutCategoriesInput } from "./PetUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string;
  pets?: PetUpdateManyWithoutCategoriesInput;
};
