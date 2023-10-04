import { create } from "zustand";

export interface ComponentData {
  createdAt: string;
  updatedAt: string;
  componentTempId: number;
  parentSpaceWallTempId: number;
  templateId: number;
  thisSpaceWallId: number;
  componentId: number;
  type: string;
  visible: boolean;
  title: string;
  content: string;
  sequence: number;
  deleted: boolean;
}

interface ComponentStore {
  componentsBySpace: Record<number, Record<string, ComponentData>>;
  getSpaceComponents: (spaceId: number) => Record<string, ComponentData>;
  setSpaceComponents: (
    spaceId: number,
    componentId: number,
    componentData: ComponentData,
  ) => void;
  deleteSpaceComponents: (spaceId: number, componentId: number) => void;
  getComponent: (spaceId: number, componentId: number) => ComponentData | null;
  setComponent: (
    spaceId: number,
    componentId: number,
    componentData: Partial<ComponentData>,
  ) => void;
  deleteComponent: (spaceId: number, componentId: number) => void;
  setComponentValue: (
    spaceId: number,
    componentId: number,
    key: keyof ComponentData,
    value: any,
  ) => void;
  getComponentValue: (
    spaceId: number,
    componentId: number,
    key: keyof ComponentData,
  ) => void;
  replaceSpaceComponents: (
    spaceId: number,
    componentsData: { [key: number]: ComponentData },
  ) => void;
}

const useComponentStore = create<ComponentStore>((set, get) => ({
  componentsBySpace: {},

  getSpaceComponents: (spaceId) => {
    return get().componentsBySpace[spaceId] || {};
  },

  setSpaceComponents: (spaceId, componentId, componentData) => {
    set((state) => ({
      componentsBySpace: {
        ...state.componentsBySpace,
        [spaceId]: {
          ...state.componentsBySpace[spaceId],
          [componentId]: componentData,
        },
      },
    }));
  },

  deleteSpaceComponents: (spaceId, componentId) => {
    set((state) => {
      const newSpaceComponents = { ...state.componentsBySpace[spaceId] };
      delete newSpaceComponents[componentId];
      return {
        componentsBySpace: {
          ...state.componentsBySpace,
          [spaceId]: newSpaceComponents,
        },
      };
    });
  },

  getComponent: (spaceId, componentId) => {
    return get().componentsBySpace[spaceId]?.[componentId] || null;
  },

  setComponent: (spaceId, componentId, componentData) => {
    set((state) => ({
      componentsBySpace: {
        ...state.componentsBySpace,
        [spaceId]: {
          ...state.componentsBySpace[spaceId],
          [componentId]: {
            ...(state.componentsBySpace[spaceId]?.[componentId] || {}),
            ...componentData,
          },
        },
      },
    }));
  },

  deleteComponent: (spaceId, componentId) => {
    set((state) => {
      const newSpaceComponents = { ...state.componentsBySpace[spaceId] };
      delete newSpaceComponents[componentId];
      return {
        componentsBySpace: {
          ...state.componentsBySpace,
          [spaceId]: newSpaceComponents,
        },
      };
    });
  },

  setComponentValue: (spaceId, componentId, key, value) => {
    set((state) => ({
      componentsBySpace: {
        ...state.componentsBySpace,
        [spaceId]: {
          ...state.componentsBySpace[spaceId],
          [componentId]: {
            ...(state.componentsBySpace[spaceId]?.[componentId] || {}),
            [key]: value,
          },
        },
      },
    }));
  },

  getComponentValue: (spaceId, componentId, key) => {
    const componentData = get().componentsBySpace[spaceId]?.[componentId];
    if (componentData) {
      return componentData[key];
    } else {
      return null;
    }
  },

  replaceSpaceComponents: (spaceId, componentsData) => {
    set((state) => ({
      componentsBySpace: {
        ...state.componentsBySpace,
        [spaceId]: componentsData,
      },
    }));
  },
}));

export default useComponentStore;
