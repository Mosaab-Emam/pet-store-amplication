import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";

export type PetWhereInput = {
  categoryId?: CategoryWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  orders?: OrderListRelationFilter;
  photoUrls?: JsonFilter;
  status?: "available" | "pending" | "sold";
  tags?: TagListRelationFilter;
};
