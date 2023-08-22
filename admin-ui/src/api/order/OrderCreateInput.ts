import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";

export type OrderCreateInput = {
  complete: boolean;
  petId: PetWhereUniqueInput;
  quantity: number;
  shipDate?: Date | null;
  status: "placed" | "approved" | "delivered";
};
