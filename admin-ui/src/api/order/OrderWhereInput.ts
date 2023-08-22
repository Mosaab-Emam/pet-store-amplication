import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type OrderWhereInput = {
  complete?: BooleanFilter;
  id?: StringFilter;
  petId?: PetWhereUniqueInput;
  quantity?: IntFilter;
  shipDate?: DateTimeNullableFilter;
  status?: "placed" | "approved" | "delivered";
};
