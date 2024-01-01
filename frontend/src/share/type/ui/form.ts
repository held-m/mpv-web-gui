import React from "react";
import { Entity } from "../entity";

type FormProps = {
  entity: Entity;
  submitLabel: string;
  submitHandler: (e: React.FormEvent<HTMLFormElement>, entity: Entity) => void;
};

export interface Form {
  (props: FormProps): JSX.Element;
}
