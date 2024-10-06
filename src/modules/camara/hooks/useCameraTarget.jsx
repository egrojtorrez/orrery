import {create} from 'zustand';

export const useCameraTarget = create((set) => ({
  cameraTarget: [0, 0, 0],
  selectedObject: null, // Referencia al objeto que se sigue
  isZooming: false,
  setCameraTarget: (x, y, z) => set({ cameraTarget: [x, y, z] }),
  setZooming: (isZooming) => set({ isZooming }),
  followObject: (objectRef) => {
    if (objectRef && objectRef.current) {
      set({ selectedObject: objectRef });
    }
  },
}));

