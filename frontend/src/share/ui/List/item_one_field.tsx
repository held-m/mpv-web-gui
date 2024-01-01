import { useEffect, useState } from "react";
import { Button } from "@share/ui/Button";
import { Textarea } from "../Textarea";
import { Item } from ".";

export const ItemOneField = (props: Item) => {
  const [value, setValue] = useState<any>();
  const [oldValue, setOldValue] = useState<any>();
  const [readOnly, setReadOnly] = useState(true);
  const [border, setBorder] = useState("border-0");
  const [editHide, setEditHide] = useState(false);
  const [saveHide, setSaveHide] = useState(true);
  const [cancelEditHide, setCancelEditHide] = useState(true);
  const [deleteHide, setDeleteHide] = useState(false);
  const [deleteWarningHide, setDeleteWarningHide] = useState("hidden");
  const handleEditItem = () => {
    setBorder("border");
    setReadOnly(false);
    setEditHide(true);
    setSaveHide(false);
    setDeleteHide(true);
    setCancelEditHide(false);
    setOldValue(value);
  };

  useEffect(() => {
    setValue(props.entity[props.fields[0] as keyof typeof props.entity]);
  }, [props]);
  const handleSaveItem = () => {
    const body = {
      ID: props.id,
      [props.fields[0]]: value,
    };
    props.repository.Update(body);
    setBorder("border-0");
    setReadOnly(true);
    setSaveHide(true);
    setEditHide(false);
    setDeleteHide(false);
    setCancelEditHide(true);
  };
  const handleCancelEditItem = () => {
    setBorder("border-0");
    setReadOnly(true);
    setSaveHide(true);
    setEditHide(false);
    setDeleteHide(false);
    setCancelEditHide(true);
    setValue(oldValue);
  };
  const handleRequestDeleteItem = () => {
    setDeleteWarningHide("");
  };
  const handleDeleteItem = () => {
    props.repository.Delete(props.id).then(() => {
      props.deleteAfterEvent?.(props.id);
    });
  };
  const handleCancelDeleteItem = () => {
    setDeleteWarningHide("hidden");
  };
  return (
    <li className="grid grid-cols-1 gap-1">
      <div className="grid grid-cols-6 gap-1">
        <Textarea
          className={`col-span-4 h-8 ${border} text-black`}
          value={value}
          readOnly={readOnly}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button
          label="edit"
          size="sm"
          onClick={handleEditItem}
          className={`${editHide ? "hidden" : ""}`}
        />
        <Button
          label="save"
          size="sm"
          onClick={handleSaveItem}
          className={`${saveHide ? "hidden" : ""}`}
        />
        <Button
          label="delete"
          size="sm"
          onClick={handleRequestDeleteItem}
          type="danger"
          className={`${deleteHide ? "hidden" : ""}`}
        />
        <Button
          label="Cancel"
          size="sm"
          onClick={handleCancelEditItem}
          className={`${cancelEditHide ? "hidden" : ""}`}
        />
      </div>
      <div
        className={`grid grid-cols-6 gap-1 items-center ${deleteWarningHide}`}
      >
        <div className="col-span-4 mr-2 text-sm text-right">Are you sure?</div>
        <Button
          label="Yes"
          size="sm"
          type="danger"
          onClick={handleDeleteItem}
        />
        <Button label="No" size="sm" onClick={handleCancelDeleteItem} />
      </div>
    </li>
  );
};
