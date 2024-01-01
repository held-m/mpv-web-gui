import { UUID } from "@share/type/uuid";
import { RepositoryRead, RepositoryCRUD } from "../repository";

export interface Entity {
  ID: UUID;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}

export interface EntityWithName extends Entity {
  Name: string;
}

export interface UI {
  Form: React.FC<{ entity: Entity; createEntity: (entity: Entity) => void }>;
}

export interface EntityModul {
  Entity: Entity;
  Repository: RepositoryRead | RepositoryCRUD;
  UI: UI;
}
