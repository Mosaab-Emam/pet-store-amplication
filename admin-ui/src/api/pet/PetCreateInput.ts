import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderCreateNestedManyWithoutPetsInput } from "./OrderCreateNestedManyWithoutPetsInput";
import { InputJsonValue } from "../../types";
import { TagCreateNestedManyWithoutPetsInput } from "./TagCreateNestedManyWithoutPetsInput";

export type PetCreateInput = {
  categoryId: CategoryWhereUniqueInput;
  name: string;
  orders?: OrderCreateNestedManyWithoutPetsInput;
  photoUrls: InputJsonValue;
  status?: "available" | "pending" | "sold" | null;
  tags?: TagCreateNestedManyWithoutPetsInput;
};
