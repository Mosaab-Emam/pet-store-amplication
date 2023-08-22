import { Pet } from "../pet/Pet";

export type Category = {
  createdAt: Date;
  id: string;
  name: string;
  pets?: Array<Pet>;
  updatedAt: Date;
};
