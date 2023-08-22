import { StringFilter } from "../../util/StringFilter";
import { PetListRelationFilter } from "../pet/PetListRelationFilter";

export type TagWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  pets?: PetListRelationFilter;
};
