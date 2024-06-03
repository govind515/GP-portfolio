import { useState, useRef, Suspense } from "react"; // Importing React hooks and Suspense for lazy loading.
import { Canvas, useFrame } from "@react-three/fiber"; // Importing Canvas and useFrame from react-three/fiber for 3D rendering.
import { Points, PointMaterial, Preload } from "@react-three/drei"; // Importing useful components from drei for 3D points and materials.
import * as random from "maath/random/dist/maath-random.esm"; // Importing a random utility from maath for generating random points.

const Stars = (props) => {
  // Stars component to create a starfield.
  const ref = useRef(); // Ref to directly access the Points component.
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  ); // Generating random points within a sphere using maath library.

  useFrame((state, delta) => {
    // Using useFrame to update the rotation of the points on each frame.
    ref.current.rotation.x -= delta / 10; // Rotate points around the x-axis.
    ref.current.rotation.y -= delta / 15; // Rotate points around the y-axis.
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Wrapping Points component in a group with initial rotation */}
      <Points
        ref={ref} // Attaching the ref to the Points component.
        positions={sphere} // Setting the positions of points using the generated sphere.
        stride={3} // Number of elements per vertex (x, y, z).
        frustumCulled // Optimizing rendering by culling objects outside the view frustum.
        {...props} // Spreading any additional props.
      >
        <PointMaterial
          transparent // Making the points material transparent.
          color="#f272c8" // Setting the color of the points.
          size={0.002} // Setting the size of each point.
          sizeAttenuation={true} // Enabling size attenuation based on distance.
          depthWrite={false} // Disabling depth write to avoid z-fighting.
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  // StarsCanvas component to set up the Canvas for rendering stars.
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      {/* Creating a full-screen container for the canvas */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Setting up the Canvas with initial camera position */}
        <Suspense fallback={null}>
          {/* Using Suspense to lazy load the Stars component */}
          <Stars /> {/* Rendering the Stars component inside the Canvas */}
        </Suspense>
        <Preload all /> {/* Preloading all assets for better performance */}
      </Canvas>
    </div>
  );
};

export default StarsCanvas; // Exporting the StarsCanvas component as default.
