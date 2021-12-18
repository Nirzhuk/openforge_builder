import create from 'zustand'
import type { GetState, SetState, StateSelector } from 'zustand'
import Wall from './containers/Wall';


const tileEnum: any = {
    wall: Wall
}


const useStore = create((set: any, get: any) => {
    const actions = {
        onTransformControlChange: () => {
            const { transformControlProps: { mode } } = get();
            console.log(mode)
            if (mode === 'translate') {
                set({
                    transformControlProps: {
                        mode: 'rotate',
                        showY: true,
                        showX: false,
                        showZ: false,
                        rotationSnap: 1.5708
                    }
                });
            } else {
                set({
                    transformControlProps: {
                        mode: 'translate',
                        showY: false,
                        showX: true,
                        showZ: true,
                        rotationSnap: 0
                    }
                });
            }
        },
        addTile: (type:string) => {
            const { tiles } = get();

            const tile = {
                position: [0,0,0],
                rotation: [0,0,0],
                component: tileEnum[type],
            }
            console.log(tiles)
            set({
                tiles: [...tiles, tile]
            })
        }
    }
    return ({
        ready: false,
        selected: null,
        setSelected: (selected: any,ref:any) => {
            console.log(ref)
            return set({ selected: {
                object: selected,
                ref
            } })
        },
        setReady: (ready: boolean) => set({ ready }),
        set,
        session: null,
        transformControlProps: {
            mode: 'translate',
            showY: false
        },
        tiles: [{
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            component: Wall,
        }],
        actions
    })
});


export { useStore }