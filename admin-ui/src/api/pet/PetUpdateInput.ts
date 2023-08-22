import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderUpdateManyWithoutPetsInput } from "./OrderUpdateManyWithoutPetsInput";
import { InputJsonValue } from "../../types";
import { TagUpdateManyWithoutPetsInput } from "./TagUpdateManyWithoutPetsInput";

export type PetUpdateInput = {
  categoryId?: CategoryWhereUniqueInput;
  name?: string;
  orders?: OrderUpdateManyWithoutPetsInput;
  photoUrls?: InputJsonValue;
  status?: "available" | "pending" | "sold" | null;
  tags?: TagUpdateManyWithoutPetsInput;
};
