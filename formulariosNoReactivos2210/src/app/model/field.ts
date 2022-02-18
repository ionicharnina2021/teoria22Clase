import { InputForm } from './inputForm';
export interface Field {
  value: unknown;
  input: InputForm;
  validator(value: unknown): boolean;
}
