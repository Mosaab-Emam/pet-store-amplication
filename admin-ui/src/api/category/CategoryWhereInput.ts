import { StringFilter } from "../../util/StringFilter";
import { PetListRelationFilter } from "../pet/PetListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  pets?: PetListRelationFilter;
};
