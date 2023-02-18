export interface formValue {
  name: string;
  email: string;
  phone: number;
  plan: { name: string; price: number };
  frequency: boolean;
  addOns: { name: string; price: number }[];
}

export interface FormErrors {
  name: boolean;
  email: boolean;
  phone: boolean;
  plan: boolean;
}
