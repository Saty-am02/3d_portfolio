import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import pandascene from "../assets/3d/panda.glb";

export function Panda({currentAnimation,...props}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(pandascene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());
    console.log(currentAnimation);
    console.log(actions);
    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="body001"
            geometry={nodes.body001.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.body001.skeleton}
          />
          <skinnedMesh
            name="ears001"
            geometry={nodes.ears001.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.ears001.skeleton}
          />
          <skinnedMesh
            name="eyebrows001"
            geometry={nodes.eyebrows001.geometry}
            material={materials["Material.005"]}
            skeleton={nodes.eyebrows001.skeleton}
          />
          <group name="eyes001">
            <skinnedMesh
              name="Circle001"
              geometry={nodes.Circle001.geometry}
              material={materials["Material.001"]}
              skeleton={nodes.Circle001.skeleton}
            />
            <skinnedMesh
              name="Circle001_1"
              geometry={nodes.Circle001_1.geometry}
              material={materials["Material.009"]}
              skeleton={nodes.Circle001_1.skeleton}
            />
          </group>
          <skinnedMesh
            name="head001"
            geometry={nodes.head001.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.head001.skeleton}
          />
          <skinnedMesh
            name="mouth001"
            geometry={nodes.mouth001.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.mouth001.skeleton}
          />
          <skinnedMesh
            name="nose001"
            geometry={nodes.nose001.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.nose001.skeleton}
          />
          <skinnedMesh
            name="tail001"
            geometry={nodes.tail001.geometry}
            material={materials["Material.005"]}
            skeleton={nodes.tail001.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(pandascene);