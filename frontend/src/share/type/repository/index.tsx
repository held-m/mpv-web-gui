import { ClientResponse, clientPost } from "@src/share/utils/client";
import { Entity } from "../entity";
import { UUID } from "../uuid";

export interface Repository {
  URL: string;
}

export interface RepositoryCreate extends Repository {
  Create: (entity: Entity) => Promise<ClientResponse>;
}

export interface RepositoryRead extends Repository {
  GetByID: (id: UUID) => Promise<ClientResponse>;
}

export interface RepositoryUpdate extends Repository {
  Update: (entity: Entity) => Promise<ClientResponse>;
}

export interface RepositoryDelete extends Repository {
  Delete: (ID: UUID) => Promise<ClientResponse>;
}

export interface RepositoryCRUD
  extends RepositoryCreate,
  RepositoryRead,
  RepositoryUpdate,
  RepositoryDelete { }

export interface RepositoryUD extends RepositoryUpdate, RepositoryDelete { }
