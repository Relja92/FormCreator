import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

// Define the structure of a field configuration object
interface FieldConfig {
  name: string;
  label: string;
  type: "text" | "select"; // Specify possible types to make it more strict
  placeholder?: string; // Make optional as it's not applicable for select
  required: boolean;
  options?: { value: string; label: string }[]; // Optional, only for 'select' type
}

interface FormBuilderProps {
  config: FieldConfig[];
}

// Use generic typing for useForm for stricter type checking
interface FormValues {
  [key: string]: unknown; // This can be more specific based on your form fields
}

const FormBuilder: React.FC<FormBuilderProps> = ({ config }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center space-y-4 mt-5"
    >
      {config.map((field) => (
        <div key={field.name} className="w-full max-w-md">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {field.label}
          </label>
          {field.type === "text" && (
            <input
              {...register(field.name, { required: field.required })}
              placeholder={field.placeholder || ""}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          )}
          {field.type === "select" && (
            <select
              {...register(field.name, { required: field.required })}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
          {errors[field.name] && (
            <span className="text-red-500 text-xs italic">
              This field is required
            </span>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default FormBuilder;
