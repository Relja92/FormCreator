# Dynamic Form Builder Project

## Overview

This project is a dynamic form builder designed to allow users to create forms with various input types, including text fields and select boxes. It leverages React for the UI and Tailwind CSS for styling, providing a modern and responsive design. The form configuration is customizable, enabling the addition of new fields on the fly.

## Features

- **Dynamic Form Configuration**: Users can dynamically add fields to the form, specifying the field type, label, placeholder (for text inputs), and whether the field is required.
- **Support for Text and Select Fields**: Currently supports text and select fields, including the ability to add options to select fields.
- **Custom Field Validation**: Utilizes React Hook Form for handling form state and validation, ensuring that required fields are filled out before submission.
- **Modern UI with Tailwind CSS**: Styled using Tailwind CSS for a responsive and modern look and feel.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Hook Form**: A library to manage forms with minimal re-renders.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **TypeScript**: An optional static type checker for JavaScript.

## Project Structure

- `ConfigCreator`: A component that allows users to add new fields to the form configuration dynamically. Users can specify the field type, name, label, whether it's required, and placeholders for text fields.
- `FormBuilder`: Takes a form configuration object and dynamically generates a form based on that configuration. It supports text and select fields, including validation for required fields.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your/repository.git
   cd your-project-directory
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn
   ```

3. **Run the Project**

   ```bash
   npm start
   ```

   Or if you are using yarn:

   ```bash
   yarn start
   ```

This will start the development server, and you should be able to view the project at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you have a feature request or bug report, please open an issue to discuss it. Feel free to fork the repository and submit pull requests.

## License

This project is open source and available under the [MIT License](LICENSE).
