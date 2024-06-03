// Importing necessary modules from "@react-three/drei".
import { Html, useProgress } from "@react-three/drei";

// Defining the CanvasLoader component.
const CanvasLoader = () => {
  const { progress } = useProgress(); // Using the useProgress hook to get the loading progress.

  return (
    // Using Html from drei to render HTML content in the canvas.
    <Html
      as="div"
      center // Centering the content.
      style={{
        display: "flex", // Setting display to flex to use flexbox properties.
        justifyContent: "center", // Centering content horizontally.
        alignItems: "center", // Centering content vertically.
        flexDirection: "column", // Aligning items in a column.
      }}
    >
      <span className="canvas-loader"></span>{" "}
      {/* Placeholder for a loading spinner or animation */}
      <p
        style={{
          fontSize: 14, // Setting the font size of the percentage text.
          color: "#F1F1F1", // Setting the text color.
          fontWeight: 800, // Making the text bold.
          marginTop: 40, // Adding margin to the top.
        }}
      >
        {progress.toFixed(2)}%{" "}
        {/* Displaying the loading progress as a percentage */}
      </p>
    </Html>
  );
};

// Exporting the CanvasLoader component for use in other parts of the application.
export default CanvasLoader;
