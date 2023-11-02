import React, { useRef } from "react";
import { Edges, useSelect, useGLTF } from "@react-three/drei";

const Wall = React.forwardRef((props: any, ref) => {
  const { nodes }: any = useGLTF(
    `${import.meta.env.BASE_URL}wall.glb`
  );
  return (
      <mesh
      ref={ref} {...props} dispose={null}
        geometry={nodes.dungeon_stone_wallwallinch2x.geometry}
      >

        <meshLambertMaterial attach={'material'} color={'#53523e'}></meshLambertMaterial>
      </mesh>
  );
});

export default Wall;
