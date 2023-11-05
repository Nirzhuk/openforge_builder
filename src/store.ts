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
        addTile: (type: string) => {
            const { tiles } = get();

            const tile = {
                position: [0, 0, 0],
                rotation: [0, 0, 0],
                component: tileEnum[type],
            }
            set({
                tiles: [...tiles, tile]
            })
        },
        removeTile: (indices: any[]) => {
            set((state:any) => {
                const tiles = [...state.tiles]; 
                const selected = [...state.selected];
        
                for (const index of indices) {
                  if (index >= 0 && index < tiles.length) {
                    tiles.splice(index, 1); 
                    selected.splice(index, 1); 
                  }
                }
                console.log(selected)
                return { tiles, selected };
              });
        }
    }
    return ({
        ready: false,
        selected: [],
        setSelectedClean: () => {
            set((state:any) => {
                const updatedSelected = [...state.selected]; 
              
                updatedSelected.splice(0, updatedSelected.length);
                return { selected: updatedSelected };
              });
        },
        removeSelected: (index: number) => {
            set((state:any) => {
                const updatedSelected = [...state.selected]; 
                if (index >= 0 && index < updatedSelected.length) {
                  updatedSelected.splice(index, 1); 
                }
                return { selected: updatedSelected };
              });
        },
        toggleSelected: (item: any, itemRef: any, index: number) => {
            set((state:any) => {
                const updatedSelected = [...state.selected];
          
                const existingIndex = updatedSelected.findIndex((selectedItem) => selectedItem.index === index);
          
                if (existingIndex === -1) {
                  updatedSelected.push({ object: item, ref: itemRef, index });
                } else {
                  updatedSelected.splice(existingIndex, 1);
                }
                console.log(updatedSelected)
                return { selected: updatedSelected };
              });
        },

        setReady: (ready: boolean) => set({ ready }),
        set,
        session: null,
        transformControlProps: {
            mode: 'translate',
            showY: false,
            translationSnap: 1,
            size: 0.5

        },
        tiles: [],
        actions
    })
});


export { useStore }