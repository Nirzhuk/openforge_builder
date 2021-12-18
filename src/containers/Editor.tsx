import { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Outline } from '@react-three/postprocessing'
import { OrbitControls, PerspectiveCamera, TransformControls, useCursor } from '@react-three/drei'
import { TransformControls as TransformControlsImpl } from 'three-stdlib'
import { useStore } from '../store'
import { Intro } from './ui/Intro'

const MeshWithToolkit = ({ Component, ...props }: any) => {
    const setSelected = useStore((state) => state.setSelected)
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    useCursor(hovered)
    return <Component
        ref={ref}
        {...props}
        onClick={(e: any) => setSelected(e.object,ref)}
        onDrag={(v:any) => console.log(v.toArray())}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)} />
}

export default function App() {
    const { selected,tiles, actions, transformControlProps, setSelected }:any = useStore()
    const transformControls = useRef<TransformControlsImpl>(null!);
    useEffect(() => {
        if (transformControls.current) {
            const { current: controls } = transformControls
            const callback = (e:any) => console.log(e.target.object.position);
            controls.addEventListener('dragging-changed', callback)
            return () => controls.removeEventListener('dragging-changed', callback)
        }
    })

    useEffect(() => {
        const testFunc = (e: any) => {
            if(e.key.toLowerCase() === 'r') {
                actions.onTransformControlChange();
            }
            
        }
        document.addEventListener("keydown", testFunc)
        return () => {
            document.removeEventListener("keydown", testFunc)
        }
    }, [])

    const renderTiles = () => {
        console.log(tiles)
        return tiles.length > 0 &&  tiles.map((tile:any, i:number) => {
            return <MeshWithToolkit key={i} Component={tile.component} position={tile.position} rotation={tile.rotation} />
        });
    }
    console.log(selected)
    return (
        <Intro>
            <div className="col-end-auto" >
                <Canvas dpr={[1, 2]} onPointerMissed={() => setSelected(null)}>
                    {renderTiles()}
                    {selected && selected.object && <TransformControls size={0.5} ref={transformControls} translationSnap={1} object={selected.object} {...transformControlProps} />}
                    <PerspectiveCamera makeDefault position={[20, 20, 20]} />
                    <OrbitControls makeDefault />
                    <gridHelper args={[100, 100, `#8f8f8f`, `#1f1f1f`]} />
                </Canvas>
            </div>
        </Intro>
    )
}

//Posible change to the movement https://codesandbox.io/s/objective-bash-gpon7?file=/src/Obj.jsx:132-151