import { PresentationControls } from '@react-three/drei';
import React, { useRef } from 'react';
import MacbookModel14 from '../models/Macbook-14';
import MacbookModel16 from '../models/Macbook-16';
import { Controls } from 'three';

import { gsap } from 'gsap';

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE =5;

const fadeMeshes = (meshes, toOpacity) => {
    if(!group) return;

    group.traverse((child) => {
        if(child.isMesh){
            child.material.transparent = true;
            gsap.to(child.material, {opacity, duration: ANIMATION_DURATION} );
        }
})

}


const movegroup = (group, x) => {
    if(!group) return;

    gsap.to(group.position, {x, duration: ANIMATION_DURATION});
}

const ModelSwitcher = ({scale, isMobile}) => {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const ShowLargeMacbook = scale === 0.08 || scale === 0.05 ;

    const ControlsConfig = {
        snap:true,
        speed: 1,
        zoom: 1,
       // polar: [Math.PI / 2, Math.PI / 2],
        azimuth: [-Infinity, Infinity],
        config: {mass: 1, tension: 0, friction: 26}
     
    }




  return (
    <>
    <PresentationControls {...ControlsConfig}>
        <group ref={largeMacbookRef}>
            <MacbookModel16 scale={isMobile ? 0.05 : 0.08}/>
        </group>        
    </PresentationControls>

    <PresentationControls {...ControlsConfig}>
        <group ref={smallMacbookRef}>
            <MacbookModel14 scale={isMobile ? 0.03 : 0.06}/>
        </group>        
    </PresentationControls>
    </>
  )
}

export default ModelSwitcher