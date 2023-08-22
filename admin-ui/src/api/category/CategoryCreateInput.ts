import { PetCreateNestedManyWithoutCategoriesInput } from "./PetCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name: string;
  pets?: PetCreateNestedManyWithoutCategoriesInput;
};
