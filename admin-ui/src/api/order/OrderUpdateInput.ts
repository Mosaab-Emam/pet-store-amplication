import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";

export type OrderUpdateInput = {
  complete?: boolean;
  petId?: PetWhereUniqueInput;
  quantity?: number;
  shipDate?: Date | null;
  status?: "placed" | "approved" | "delivered";
};
