import { useState } from "react";

export type FormValues = {
  [key: string]: string;
};
const useForm = (initialValues: FormValues) => {
  const [formData, setFormData] = useState<FormValues>(initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return { formData, handleInputChange };
};

export default useForm;
