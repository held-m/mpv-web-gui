import { useEffect, useState } from "react";
import { Textarea } from "../Textarea";
import { Item } from ".";
import { EditDeleteItem } from "./edit_delte_item";

export const NameCommentItems = (props: Item) => {
  const [valueName, setValueName] = useState<any>();
  const [oldValueName, setOldValueName] = useState<any>();
  const [valueComment, setValueComment] = useState<any>();
  const [oldValueComment, setOldValueComment] = useState<any>();
  const [readOnly, setReadOnly] = useState(true);
  const [border, setBorder] = useState("border-0");
  const handleEditItem = () => {
    setBorder("border");
    setReadOnly(false);
    setOldValueName(valueName);
    setOldValueComment(valueComment);
  };

  useEffect(() => {
    setValueName(props.entity[props.fields[0] as keyof typeof props.entity]);
    setValueComment(props.entity[props.fields[1] as keyof typeof props.entity]);
  }, [props]);
  const handleSaveItem = () => {
    const body = {
      ID: props.id,
      [props.fields[0]]: valueName,
      [props.fields[1]]: valueComment,
    };
    props.repository.Update(body);
    setBorder("border-0");
    setReadOnly(true);
  };
  const handleCancelEditItem = () => {
    setBorder("border-0");
    setReadOnly(true);
    setValueName(oldValueName);
    setValueComment(oldValueComment);
  };
  const handleDeleteItem = () => {
    props.repository.Delete(props.id).then(() => {
      props.deleteAfterEvent?.(props.id);
    });
  };
  return (
    <li className="grid grid-cols-1 gap-1 p-2 bg-gray-100 border border-gray-200 border-solid">
      <div className="grid grid-cols-3 gap-1">
        <Textarea
          className={`col-span-2 ${border} text-black bg-gray-100`}
          value={valueName}
          readOnly={readOnly}
          onChange={(e) => {
            setValueName(e.target.value);
          }}
        />
        <EditDeleteItem
          deleteEvent={handleDeleteItem}
          editEvent={handleEditItem}
          saveEvent={handleSaveItem}
          cancelEditEvent={handleCancelEditItem}
        />
      </div>
      <div className="grid grid-cols-1 gap-1">
        <Textarea
          className={` ${border} text-gray-600 text-sm bg-gray-100`}
          value={valueComment}
          readOnly={readOnly}
          onChange={(e) => {
            setValueComment(e.target.value);
          }}
        />
      </div>
    </li>
  );
};
