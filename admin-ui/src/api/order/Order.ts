import { Pet } from "../pet/Pet";

export type Order = {
  complete: boolean;
  createdAt: Date;
  id: string;
  petId?: Pet;
  quantity: number;
  shipDate: Date | null;
  status?: "placed" | "approved" | "delivered";
  updatedAt: Date;
};
