import { Entity } from "@src/share/type/entity";
import { RepositoryUD } from "@src/share/type/repository";
import { Item } from ".";
import { useEffect, useState } from "react";
import { Button, ButtonType } from "../Button";
import { UUID } from "@src/share/type/uuid";

export type Props = {
  entities: Entity[];
  itemTemplate: (props: Item) => JSX.Element;
  fields: string[];
  repository: RepositoryUD;
  formAdd: (props: {
    eventAddAfter?: (entity: Entity) => void;
    props?: any;
  }) => JSX.Element;
  formAddProps?: any;
  updateItemAfter?: (entity: Entity) => void;
  deleteItemAfter?: (id: UUID) => void;
  createItemAfter?: (entity: Entity) => void;
  buttonAddLabel?: string;
};
const addEntityLabelText = {
  add: "Добавить",
  close: "Закрыть",
  typeAdd: "save" as ButtonType,
  typeClose: "cancel" as ButtonType,
};

export const List = (props: Props) => {
  const [isHideFormAdd, setIsHideFormAdd] = useState<boolean>(true);
  const [addEntityLabel, setAddEntityLabel] = useState<string>(
    props.buttonAddLabel || addEntityLabelText.add
  );
  const [addEntityType, setAddEntityType] = useState<ButtonType>(
    addEntityLabelText.typeAdd
  );
  const [entities, setEntities] = useState<Entity[]>([]);

  useEffect(() => {
    setEntities(props.entities);
  }, [props.entities]);

  const handleOpenFormAddEntity = () => {
    setIsHideFormAdd(!isHideFormAdd);
    isHideFormAdd
      ? setAddEntityLabel(addEntityLabelText.close)
      : setAddEntityLabel(addEntityLabelText.add);
    isHideFormAdd
      ? setAddEntityType(addEntityLabelText.typeClose)
      : setAddEntityType(addEntityLabelText.typeAdd);
  };

  const handleAddEntity = (entity: Entity) => {
    setEntities([entity, ...entities]);
    props.createItemAfter?.(entity);
    handleOpenFormAddEntity();
  };

  const deleteItem = (id: string) => {
    setEntities(entities.filter((entity) => entity.ID !== id));
    props.deleteItemAfter?.(id);
  };

  const updateItem = (entity: Entity) => {
    props.updateItemAfter?.(entity);
  };

  return (
    <div className="grid grid-cols-1">
      <div className="">
        <Button
          label={addEntityLabel}
          onClick={handleOpenFormAddEntity}
          size="full-md"
          type={addEntityType}
        />
        <div className={isHideFormAdd ? "hidden" : ""}>
          <props.formAdd
            eventAddAfter={handleAddEntity}
            props={props.formAddProps}
          />
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-2 mt-4">
        {entities.map((entity) => {
          return (
            <props.itemTemplate
              key={entity.ID}
              id={entity.ID}
              fields={props.fields}
              entity={entity}
              repository={props.repository}
              deleteAfterEvent={deleteItem}
              updateAfterEvent={updateItem}
            />
          );
        })}
      </ul>
    </div>
  );
};
