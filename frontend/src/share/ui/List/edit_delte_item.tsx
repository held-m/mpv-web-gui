import { useState } from "react";
import { Button } from "../Button";

type Props = {
  deleteEvent?: () => void;
  editEvent?: () => void;
  saveEvent?: () => void;
  cancelEditEvent?: () => void;
};

export const EditDeleteItem = (props: Props) => {
  const [editHide, setEditHide] = useState(false);
  const [saveHide, setSaveHide] = useState(true);
  const [cancelEditHide, setCancelEditHide] = useState(true);
  const [deleteHide, setDeleteHide] = useState(false);
  const [deleteWarningHide, setDeleteWarningHide] = useState("hidden");

  const handleEdit = () => {
    props.editEvent?.();
    setEditHide(true);
    setSaveHide(false);
    setDeleteHide(true);
    setCancelEditHide(false);
    handleCancelDelete();
  };
  const handleSave = () => {
    props.saveEvent?.();
    setSaveHide(true);
    setEditHide(false);
    setDeleteHide(false);
    setCancelEditHide(true);
  };
  const handleCancelEdit = () => {
    props.cancelEditEvent?.();
    setSaveHide(true);
    setEditHide(false);
    setDeleteHide(false);
    setCancelEditHide(true);
  };
  const handleRequestDelete = () => {
    setDeleteWarningHide("");
  };
  const handleDelete = () => {
    props.deleteEvent?.();
  };
  const handleCancelDelete = () => {
    setDeleteWarningHide("hidden");
  };
  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Button
            label="edit"
            size="full-sm"
            type="edit"
            onClick={handleEdit}
            className={`${editHide ? "hidden" : ""}`}
          />
          <Button
            label="save"
            size="full-sm"
            type="save"
            onClick={handleSave}
            className={`${saveHide ? "hidden" : ""}`}
          />
        </div>
        <div>
          <Button
            label="delete"
            size="full-sm"
            onClick={handleRequestDelete}
            type="danger"
            className={`${deleteHide ? "hidden" : ""}`}
          />
          <Button
            label="Cancel"
            size="full-sm"
            type="cancel"
            onClick={handleCancelEdit}
            className={`${cancelEditHide ? "hidden" : ""}`}
          />
        </div>
      </div>
      <div
        className={`grid grid-cols-3 gap-2 items-center mt-2 ${deleteWarningHide}`}
      >
        <div className="text-sm text-center">Delete?</div>
        <Button
          label="Yes"
          size="full-sm"
          type="danger"
          onClick={handleDelete}
        />
        <Button
          label="No"
          size="full-sm"
          type="cancel"
          onClick={handleCancelDelete}
        />
      </div>
    </div>
  );
};
