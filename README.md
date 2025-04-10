# WebBuilder

A drag-and-drop web page builder built with React and Vite. This tool allows you to visually design web pages by dragging and dropping components onto a canvas.

## Features

- **Drag and Drop Interface**: Easily build web pages using an intuitive drag and drop system
- **Component Library**: Pre-built components including containers, text fields, and flex layouts
- **Nested Components**: Support for nested layout structures with parent-child relationships
- **Properties Panel**: Customize component properties in real-time
- **Redux State Management**: Robust state management for tracking component hierarchy and properties

## Tech Stack

- **React 19**: Latest React version with improved performance
- **Vite**: Fast, modern build tool and development server
- **Redux Toolkit**: For state management
- **@dnd-kit**: Drag and drop functionality
- **TailwindCSS**: Utility-first CSS framework for styling
- **React Router**: For page navigation
- **Framer Motion**: For animations and transitions

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/WebBuilder.git
cd WebBuilder
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `src/`: Application source code
  - `components/`: Reusable UI components
  - `WebComponents/`: Core building blocks (TextField, FlexCol, FlexRow, Container)
  - `feature/`: Redux slices and state management
  - `hooks/`: Custom React hooks
  - `context/`: React context providers
  - `assets/`: Static assets

## Usage

1. Drag components from the sidebar onto the canvas
2. Select components to edit their properties
3. Nest components by dragging them onto container elements
4. Remove components using the delete button

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
