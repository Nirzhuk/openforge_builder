import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props:any) {
    const group = useRef()
    const { nodes}: any = useGLTF('/wall.gltf')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                geometry={nodes.dungeon_wall.geometry}
                material={nodes.dungeon_wall.material}
            >
                <meshStandardMaterial attach="material" color={'#fff'} />
            </mesh>
        </group>
    )
}

useGLTF.preload('/wall.gltf')
