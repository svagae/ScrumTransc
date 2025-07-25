# README.md

# LiveScript App

This project is a React application built with Vite, designed for audio recording and transcription functionalities. It provides a user-friendly interface for recording audio, displaying the transcription, and managing recording controls.

## Project Structure

- **src/**: Contains the main application code.
  - **App.jsx**: The main component that manages the application state and renders child components.
  - **index.css**: Global CSS styles for the application.
  - **main.jsx**: Entry point of the application, rendering the App component.
  - **assets/**: Directory for static assets like images and icons.
  - **components/**: Contains reusable components:
    - **Header.jsx**: Displays the application title or navigation.
    - **RecorderControls.jsx**: Provides UI elements for controlling audio recording.
    - **StatusIndicator.jsx**: Indicates the current status of the application.
    - **TranscriptionBox.jsx**: Displays the transcribed text from recordings.
  - **styles/**: Additional global styles.
    - **global.css**: Ensures a consistent look and feel across the application.
  - **utils/**: Utility functions for reuse across components.

- **public/**: Contains static files served by the application, such as icons.
- **.gitignore**: Specifies files and directories to be ignored by version control.
- **eslint.config.js**: Configuration for ESLint to enforce coding standards.
- **index.html**: Main HTML file serving as the entry point for the application.
- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **vite.config.js**: Configuration for Vite, specifying plugins and settings for building and serving the application.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd livescript-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Use the **Recorder Controls** to start and stop audio recordings.
- The **Status Indicator** will show the current state of the application.
- The **Transcription Box** will display the transcribed text from your recordings.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.