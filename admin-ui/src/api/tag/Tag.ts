import { Pet } from "../pet/Pet";

export type Tag = {
  createdAt: Date;
  id: string;
  name: string;
  pets?: Array<Pet>;
  updatedAt: Date;
};
