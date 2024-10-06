import {create} from 'zustand';

export const useCameraTarget = create((set) => ({
  cameraTarget: [0, 0, 0],
  selectedObject: null, // Referencia al objeto que se sigue
  setCameraTarget: (x, y, z) => set({ cameraTarget: [x, y, z] }),
  followObject: (objectRef) => {
    if (objectRef && objectRef.current) {
      set({ selectedObject: objectRef });
    }
  },
}));

