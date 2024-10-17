import { useState } from "react";
import toast from "react-hot-toast";

function DynamicForm() {
  const [inputName, setInputName] = useState("");
  const [inputLabel, setInputLabel] = useState("");
  const [inputPlaceHolder, setInputPlaceHolder] = useState("");
  const [inputs, setInputs] = useState([]);

  const inputTypes = [
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ];

  function handleSubmit() {
    if (!inputName || !inputPlaceHolder || !inputLabel) {
      return toast.error("Please Provide All Input Information");
    }
    if (inputTypes.includes(inputName)) {
      setInputs([
        ...inputs,
        { name: inputName, label: inputLabel, placeholder: inputPlaceHolder },
      ]);

      setInputName("");
      setInputLabel("");
      setInputPlaceHolder("");
      toast.success("Input Generated Successfully");
    } else {
      return toast.error("Please Provide Valid Input Name");
    }
  }

  return (
    <div className="main h-screen flex flex-col md:flex-row">
      <div className="form-container w-full md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Create Input</h2>
        <div className="grid grid-cols-1 gap-6 w-full max-w-md">
          <div>
            <label
              htmlFor="inputType"
              className="block text-sm font-medium text-gray-200"
            >
              Select Input Type
            </label>
            <select
              onChange={(e) => setInputName(e.target.value)}
              id="inputType"
              value={inputName}
              className="mt-1 px-4 py-2 border rounded-lg w-full outline-none focus:ring-2 focus:ring-white"
            >
              <option value="">Select Input Type...</option>
              {inputTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="label"
              className="block text-sm font-medium text-gray-200"
            >
              Enter Label
            </label>
            <input
              onChange={(e) => setInputLabel(e.target.value)}
              id="label"
              type="text"
              placeholder="Type Label Here..."
              value={inputLabel}
              className="mt-1 px-4 py-2 border rounded-lg w-full outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <label
              htmlFor="placeholder"
              className="block text-sm font-medium text-gray-200"
            >
              Enter Placeholder Text
            </label>
            <input
              onChange={(e) => setInputPlaceHolder(e.target.value)}
              id="placeholder"
              type="text"
              placeholder="Type Placeholder Here..."
              value={inputPlaceHolder}
              className="mt-1 px-4 py-2 border rounded-lg w-full outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          Create Input
        </button>
      </div>
      <div className="output-container w-full md:w-1/2 flex flex-col bg-gray-100 p-4 ">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-blue-600 ">
            Your Generated Inputs
          </h1>
          {inputs.length > 0 ? (
            <h3
              onClick={() => setInputs([])}
              className="text-2xl font-bold text-red-600 cursor-pointer "
            >
              Clear Inputs
            </h3>
          ) : (
            ""
          )}
        </div>
        <div className="output-text overflow-y-auto flex flex-col gap-4">
          {inputs.length > 0 ? (
            inputs.map((input) => (
              <div
                key={input.name}
                className="flex border border-blue-400 bg-white rounded-lg shadow-md p-4 justify-between items-center"
              >
                <span className="text-gray-800 font-semibold">
                  {input.name}
                </span>
                <label className="text-blue-700 font-semibold">
                  {input.label}:
                </label>
                <input
                  type={input.name}
                  placeholder={input.placeholder}
                  className="border border-blue-400 p-2 rounded w-1/2 outline-none focus:none"
                />
              </div>
            ))
          ) : (
            <p>There are no inputs</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DynamicForm;
