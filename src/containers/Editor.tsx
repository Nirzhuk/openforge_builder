import { useState, useEffect, useRef, Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, GizmoHelper, GizmoViewcube, TransformControls, useCursor, useProgress, useGLTF } from '@react-three/drei'
import { STLLoader, OBJLoader, TransformControls as TransformControlsImpl } from 'three-stdlib'
import Wall from './Wall'
import { useStore } from '../store'
import { Intro } from './ui/Intro'



const MeshWithToolkit = ({ Component }: any) => {
    const setTarget = useStore((state) => state.setTarget)
    const [hovered, setHovered] = useState(false)
    useCursor(hovered)
    return <Component
        onClick={(e: any) => setTarget(e.object)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)} />
}

function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <p>{progress} % loaded</p>;
}


export default function App() {
    const { target, setTarget } = useStore()
    const transformControls = useRef<TransformControlsImpl>(null!);
    useEffect(() => {
        if (transformControls.current) {
            const { current: controls } = transformControls
            const callback = (e) => console.log(e.target.object.position, target.position);
            controls.addEventListener('dragging-changed', callback)
            return () => controls.removeEventListener('dragging-changed', callback)
        }
    })

    useEffect(() => {
        const testFunc = (e: any) => {
            console.log(target.rotation, e.key);
        }
        document.addEventListener("keydown", testFunc)
        return () => {
            document.removeEventListener("keydown", testFunc)
        }
    }, [])

    return (
        <Intro>
            <div className="col-end-auto" >
                <Canvas dpr={[1, 2]} onPointerMissed={() => setTarget(null)}>
                        <MeshWithToolkit Component={Wall} />
                    {target && <TransformControls ref={transformControls} showY={true} translationSnap={1} object={target} mode={'rotate'} />}
                    <PerspectiveCamera makeDefault position={[20, 20, 20]} />
                    <OrbitControls makeDefault />
                    <gridHelper args={[100, 100, `#8f8f8f`, `#1f1f1f`]} />
                </Canvas>
            </div>
        </Intro>
    )
}
