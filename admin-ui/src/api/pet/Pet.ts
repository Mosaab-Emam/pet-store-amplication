import { Category } from "../category/Category";
import { Order } from "../order/Order";
import { JsonValue } from "type-fest";
import { Tag } from "../tag/Tag";

export type Pet = {
  categoryId?: Category;
  createdAt: Date;
  id: string;
  name: string;
  orders?: Array<Order>;
  photoUrls: JsonValue;
  status?: "available" | "pending" | "sold" | null;
  tags?: Array<Tag>;
  updatedAt: Date;
};
