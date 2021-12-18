import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Wall = React.forwardRef((props:any,ref) => {
    const { nodes }: any = useGLTF(`${import.meta.env.BASE_URL}wall.gltf`)
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
