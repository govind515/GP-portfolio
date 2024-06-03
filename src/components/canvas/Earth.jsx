import React, { Suspense } from "react"; // Importing React and Suspense for lazy loading components.
import { Canvas } from "@react-three/fiber"; // Importing Canvas from react-three/fiber to create a 3D scene.
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // Importing useful components from drei for 3D models and controls.

import CanvasLoader from "../Loader"; // Importing a custom loader component.

const Earth = () => {
  // Earth component for rendering the 3D model of Earth.
  const earth = useGLTF("./planet/scene.gltf"); // Loading the GLTF model using useGLTF hook.

  return (
    <primitive
      object={earth.scene} // Rendering the loaded GLTF scene.
      scale={2.5} // Scaling the model.
      position-y={0} // Positioning the model on the Y axis.
      rotation-y={0} // Setting the initial rotation on the Y axis.
    />
  );
};

const EarthCanvas = () => {
  // EarthCanvas component for setting up the 3D canvas.
  return (
    <Canvas
      shadows // Enabling shadows.
      frameloop="demand" // Setting the frame loop to demand to optimize performance.
      dpr={[1, 2]} // Setting device pixel ratio for better resolution.
      gl={{ preserveDrawingBuffer: true }} // Preserving the drawing buffer for post-processing effects.
      camera={{
        fov: 45, // Field of view.
        near: 0.1, // Near clipping plane.
        far: 200, // Far clipping plane.
        position: [-4, 3, 6], // Camera position in the 3D space.
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Using Suspense to lazy load the Earth component, with CanvasLoader as fallback */}
        <OrbitControls
          autoRotate // Enabling auto rotation.
          enableZoom={false} // Disabling zoom.
          maxPolarAngle={Math.PI / 2} // Limiting vertical rotation.
          minPolarAngle={Math.PI / 2} // Limiting vertical rotation.
        />
        <Earth /> {/* Rendering the Earth component inside the Canvas */}
        <Preload all /> {/* Preloading all assets for better performance */}
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas; // Exporting the EarthCanvas component as default.
