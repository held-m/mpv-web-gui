import { RepositoryUD } from "@src/share/type/repository";
import { UUID } from "@src/share/type/uuid";
import { ItemOneField } from "./item_one_field";
import { List } from "./list";
import { Entity } from "@src/share/type/entity";
import { NameCommentItems } from "./name_comment_items";

export interface Item {
  id: UUID;
  fields: string[];
  entity: Entity;
  repository: RepositoryUD;
  deleteAfterEvent?: (id: UUID) => void;
  updateAfterEvent?: (enity: Entity) => void;
}

export const ListEntity = List;

export const ItemTermpalates = {
  ItemOneField,
  NameCommentItems,
};
