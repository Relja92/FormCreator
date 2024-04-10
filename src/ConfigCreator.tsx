import React, { useState } from "react";
import { FieldConfig } from "./App";

interface ConfigCreatorProps {
  onConfigChange: (newField: FieldConfig) => void;
}

const ConfigCreator: React.FC<ConfigCreatorProps> = ({ onConfigChange }) => {
  const [fieldType, setFieldType] = useState<"text" | "select">("text");
  const [fieldName, setFieldName] = useState("");
  const [fieldLabel, setFieldLabel] = useState("");
  const [fieldRequired, setFieldRequired] = useState(false);
  const [fieldPlaceholder, setFieldPlaceholder] = useState("");
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    []
  );
  const [optionValue, setOptionValue] = useState("");
  const [optionLabel, setOptionLabel] = useState("");

  const addOption = () => {
    if (!optionValue || !optionLabel) return;
    const newOption = { value: optionValue, label: optionLabel };
    setOptions((currentOptions) => [...currentOptions, newOption]);
    setOptionValue("");
    setOptionLabel("");
  };

  const addField = () => {
    if (!fieldName || !fieldLabel) return;

    const newField: FieldConfig = {
      name: fieldName,
      label: fieldLabel,
      type: fieldType,
      required: fieldRequired,
      ...(fieldType === "text" && { placeholder: fieldPlaceholder }),
      ...(fieldType === "select" && { options }),
    };

    onConfigChange(newField);

    // Reset form fields
    setFieldType("text");
    setFieldName("");
    setFieldLabel("");
    setFieldRequired(false);
    setFieldPlaceholder("");
    setOptions([]);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="mb-4 w-full max-w-xs">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Field Type:
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={fieldType}
          onChange={(e) => setFieldType(e.target.value as "text" | "select")}
        >
          <option value="text">Text</option>
          <option value="select">Select</option>
        </select>
      </div>
      <div className="mb-4 w-full max-w-xs">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Field Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
        />
      </div>
      <div className="mb-4 w-full max-w-xs">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Field Label:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={fieldLabel}
          onChange={(e) => setFieldLabel(e.target.value)}
        />
      </div>
      <div className="mb-4 w-full max-w-xs">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Required:
        </label>
        <input
          className="shadow leading-tight focus:outline-none focus:shadow-outline"
          type="checkbox"
          checked={fieldRequired}
          onChange={(e) => setFieldRequired(e.target.checked)}
        />
      </div>
      {fieldType === "text" && (
        <div className="mb-4 w-full max-w-xs">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Placeholder:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={fieldPlaceholder}
            onChange={(e) => setFieldPlaceholder(e.target.value)}
          />
        </div>
      )}
      {fieldType === "select" && (
        <>
          <div className="mb-4 w-full max-w-xs">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Option Value:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={optionValue}
              onChange={(e) => setOptionValue(e.target.value)}
            />
          </div>
          <div className="mb-4 w-full max-w-xs">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Option Label:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={optionLabel}
              onChange={(e) => setOptionLabel(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={addOption}
            >
              Add Option
            </button>
          </div>
        </>
      )}
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={addField}
      >
        Add Field
      </button>
    </div>
  );
};

export default ConfigCreator;
