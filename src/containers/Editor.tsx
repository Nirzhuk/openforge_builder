import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import {
  OrbitControls,
  PerspectiveCamera,
  TransformControls,
  useCursor,
} from "@react-three/drei";
import { TransformControls as TransformControlsImpl } from "three-stdlib";
import { useStore } from "../store";
import { Intro } from "./ui/Intro";

const MeshWithToolkit = ({ Component, transformControls, ...props }: any) => {
  const { selected, toggleSelected }: any = useStore();
  const ref: any = useRef();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const isSelected = selected.some((item: any) => item.index === props.index);

  return (
    <Component
      ref={ref}
      {...props}
      onClick={(e: any) => {
        toggleSelected(e.object, ref, props.index);
      }}
      isSelected={isSelected}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
};

const MeshWithToolkitTest = ({ Component, transformControls, ...props }: any) => {
  const { selected, toggleSelected }: any = useStore();
  const ref: any = useRef();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const isSelected = selected.some((item: any) => item.index === props.index);

  return (
    <mesh
      ref={ref}
      {...props}
      onClick={(e: any) => {
        toggleSelected(e.object, ref, props.index);
      }}
      isSelected={isSelected}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
                  <boxGeometry args={[1, 1, 1]} />{" "}
            {/* Define las dimensiones del cubo */}
            <meshStandardMaterial color="blue" />{" "}
    </mesh>
  );
};

const Scene = ({
  canvasRef,
  selected,
  orbit,
  tiles,
  transformControlProps,
}: any) => {
  const controls = useRef<TransformControlsImpl>(null!);
  const handleTransformControlsMouseDown = () => {
    //canvasRef.current.style.cursor = "grabbing"; // Cambia el cursor a "grabbing" cuando se presiona el ratón
  };

  const handleTransformControlsMouseUp = () => {
    //canvasRef.current.style.cursor = "auto"; // Restaura el cursor a su estado original
  };

  useEffect(() => {
    if (controls.current) {
      const { current: contr } = controls;
      const callback = (e: any) => {
        orbit.current.enabled = !e.value;
        console.log("0");
      };
      controls.current.addEventListener("dragging-changed", callback);
      return () => contr.removeEventListener("dragging-changed", callback);
    }
  });

  const renderTiles = () => {
    return (
      tiles.length > 0 &&
      tiles.map((tile: any, i: number) => {
        return (
          <MeshWithToolkit
            key={i}
            index={i}
            Component={tile.component}
            position={tile.position}
            rotation={tile.rotation}
            transformControls={controls}
          />
        );
      })
    );
  };
  return (
    <>
      {selected.length > 0 && (
        <TransformControls
          ref={controls}
          {...transformControlProps}
          objects={selected}
          space="local"
          onMouseDown={handleTransformControlsMouseDown}
          onMouseUp={handleTransformControlsMouseUp}
        >
          <mesh>
            <boxGeometry args={[1, 1, 1]} />{" "}
            {/* Define las dimensiones del cubo */}
            <meshStandardMaterial color="blue" />{" "}
            {/* Define el material y color del cubo */}
          </mesh>{" "}
          {selected.length > 0 &&
            selected.map((object: any) => (
              <primitive key={object.index} object={object.object} />
            ))}
        </TransformControls>
      )}
      {renderTiles()}
    </>
  );
};


export default function App() {
  const {
    selected,
    tiles,
    actions,
    transformControlProps,
    setSelectedClean,
  }: any = useStore();
  const ref = useRef<any>();
  const orbit = useRef<any>();

  useEffect(() => {
    const controls = (e: any) => {
      if (e.key.toLowerCase() === "r") {
        actions.onTransformControlChange();
      }
      if (e.key.toLowerCase() === "backspace") {
        if (selected) {
          //TODO REHACER PARA ELIMINAR TODOS LOS SELECTED
          actions.removeTile(selected.map((sec: any) => sec.index));
        }
      }
    };
    document.addEventListener("keydown", controls);
    return () => {
      document.removeEventListener("keydown", controls);
    };
  }, [selected]);

  const handleDragOut = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any) => {
    const data = e.dataTransfer.getData("text");
    actions.addTile(data);
    setSelectedClean([]);
  };
  useEffect(() => {
    let container = ref.current;
    container.addEventListener("dragover", handleDragOut);
    return () => {
      container.removeEventListener("dragover", handleDragOut);
    };
  });

  return (
    <Intro>
      <div className="col-end-auto">
        <Canvas
          dpr={[1, 2]}
          onPointerMissed={() => setSelectedClean([])}
          color="black"
          ref={ref}
          onDrop={handleDrop}
        >
          <ambientLight
            color={"white"}
            position={[30, 0, 50]}
            intensity={Math.PI / 2}
            castShadow
          />
          <Scene
            canvasRef={ref}
            selected={selected}
            orbit={orbit}
            tiles={tiles}
            transformControlProps={transformControlProps}
          />

          <PerspectiveCamera makeDefault position={[20, 20, 20]} />
          <OrbitControls ref={orbit} maxPolarAngle={Math.PI / 2} makeDefault />
          <gridHelper args={[100, 100, `#8f8f8f`, `#1f1f1f`]} />
        </Canvas>
      </div>
    </Intro>
  );
}

//Posible change to the movement https://codesandbox.io/s/objective-bash-gpon7?file=/src/Obj.jsx:132-151
