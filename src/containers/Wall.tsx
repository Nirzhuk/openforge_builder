import React, { useRef } from 'react'
import { Edges, useGLTF } from '@react-three/drei'

const Wall = React.forwardRef((props: any, ref) => {
    const { nodes, materials }: any = useGLTF(`${import.meta.env.BASE_URL}wall.gltf`)
    console.log(materials['Material.001'])
    return (
        <group ref={ref}{...props} dispose={null}>
            <mesh
                geometry={nodes.dungeon_stone_wallwallinch2x.geometry}
                material={materials['Material.001']}
            >
            </mesh>
        </group>
    )
});


export default Wall;
