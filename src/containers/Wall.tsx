import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
useGLTF.preload('/wall.gltf')

const Wall = React.forwardRef((props:any,ref) => {
    const { nodes}: any = useGLTF('/wall.gltf')
    return (
        <group ref={ref}{...props} dispose={null}>
            <mesh
                geometry={nodes.dungeon_wall.geometry}
                material={nodes.dungeon_wall.material}
            >
                <meshStandardMaterial attach="material" color={'#fff'} />
            </mesh>
        </group>
    )
});


export default Wall;
