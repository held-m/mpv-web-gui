import { useState } from "react";
import { Button } from "@share/ui/Button";
import { UUID } from "@share/type/uuid";
import { RepositoryUD } from "@src/share/type/repository";

type Props = {
  id: UUID;
  value1: any;
  value2: any;
  field1: string;
  field2: string;
  repository: RepositoryUD;
  deleteAfterEvent?: (id: UUID) => void;
};

export const ItemTwoField = (props: Props) => {
  const [value1, setValue1] = useState(props.value1);
  const [value2, setValue2] = useState(props.value2);
  const [readOnly, setReadOnly] = useState(true);
  const [border, setBorder] = useState("border-0");
  const [editHide, setEditHide] = useState(false);
  const [saveHide, setSaveHide] = useState(true);
  const [cancelEditHide, setCancelEditHide] = useState(true);
  const [deleteHide, setDeleteHide] = useState(false);
  const [deleteWarningHide, setDeleteWarningHide] = useState("hidden");
  const handleEditCustomer = () => {
    setBorder("border-1 border-solid");
    setReadOnly(false);
    setEditHide(true);
    setSaveHide(false);
    setDeleteHide(true);
    setCancelEditHide(false);
  };
  const handleSaveCustomer = () => {
    const body = {
      ID: props.id,
      [props.field1]: value1,
      [props.field2]: value2,
    };
    props.repository.Update(body);
    setBorder("border-0");
    setReadOnly(true);
    setSaveHide(true);
    setEditHide(false);
    setDeleteHide(false);
    setCancelEditHide(true);
  };
  const handleCancelEditCustomer = () => {
    setBorder("border-0");
    setReadOnly(true);
    setSaveHide(true);
    setEditHide(false);
    setDeleteHide(false);
    setCancelEditHide(true);
  };
  const handleRequestDeleteCustomer = () => {
    setDeleteWarningHide("");
  };
  const handleDeleteCustomer = () => {
    props.repository.Delete(props.id).then(() => {
      props.deleteAfterEvent?.(props.id);
    });
  };
  const handleCancelDeleteCustomer = () => {
    setDeleteWarningHide("hidden");
  };
  return (
    <li className="grid grid-cols-1 gap-1">
      <div className="grid grid-cols-8 gap-1">
        <textarea
          className={`col-span-3 h-8 ${border} text-black`}
          value={value1}
          readOnly={readOnly}
          onChange={(e) => {
            setValue1(e.target.value);
          }}
        />
        <textarea
          className={`col-span-3 h-8 resize-y ${border} text-black`}
          value={value2}
          readOnly={readOnly}
          onChange={(e) => {
            setValue2(e.target.value);
          }}
        />
        <Button
          label="edit"
          size="sm"
          onClick={handleEditCustomer}
          className={`${editHide ? "hidden" : ""}`}
        />
        <Button
          label="save"
          size="sm"
          onClick={handleSaveCustomer}
          className={`${saveHide ? "hidden" : ""}`}
        />
        <Button
          label="delete"
          size="sm"
          onClick={handleRequestDeleteCustomer}
          type="danger"
          className={`${deleteHide ? "hidden" : ""}`}
        />
        <Button
          label="Cancel"
          size="sm"
          onClick={handleCancelEditCustomer}
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
          onClick={handleDeleteCustomer}
        />
        <Button label="No" size="sm" onClick={handleCancelDeleteCustomer} />
      </div>
    </li>
  );
};
