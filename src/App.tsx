import { useState } from "react";
import ConfigCreator from "./ConfigCreator";

import FormBuilder from "./FormBuilder";

export interface FieldConfig {
  name: string;
  label: string;
  type: "text" | "select";
  placeholder?: string;
  required: boolean;
  options?: { value: string; label: string }[];
}

function App() {
  const [formConfig, setFormConfig] = useState<FieldConfig[]>([]);

  const handleConfigChange = (newField: FieldConfig) => {
    setFormConfig((currentConfig) => [...currentConfig, newField]);
  };

  return (
    <div>
      <ConfigCreator onConfigChange={handleConfigChange} />
      <FormBuilder config={formConfig} />
    </div>
  );
}

export default App;
