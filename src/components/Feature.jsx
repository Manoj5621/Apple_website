// Feature.jsx
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import StudioLights from "./three/StudioLights";
import MacbookModel from "./models/Macbook";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { features } from "../constants/index";


const ModelScroll = () => {
  const groupRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  return (
    <group ref={groupRef}>
      <Suspense fallback={<Html>
        <h1 className="text-white text-3xl uppercase">Loading...</h1>
      </Html>}>
        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  )
}



const Feature = () => {
  return (
    <section id="features">
      <h2>See it all in a new light</h2>

      <Canvas id="f-canvas" camera={{}}>
        <StudioLights />
        <ambientLight />
        <ModelScroll />
      </Canvas>

      <div className="absolute inset-0">
        {features.map((feature, index) => (
          <div
            key={feature.id ?? index}
            className={clsx("box", `box${index + 1}`, feature.styles)}
          ></div>
        ))}
      </div>
    </section>
  )
}

export default Feature