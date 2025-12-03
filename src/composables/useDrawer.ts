import { reactive, computed } from 'vue';

export interface DrawerState {
  rail: boolean;
  railWidth: number;
  icon: string;
}

export function useDrawer(initialWidth = 256, collapsedWidth = 64) {
  const state = reactive<DrawerState>({
    rail: false,
    railWidth: initialWidth,
    icon: 'mdi-arrow-expand-left'
  });

  const toggle = () => {
    state.rail = !state.rail;
    state.railWidth = state.railWidth === collapsedWidth ? initialWidth : collapsedWidth;
    state.icon = state.railWidth === initialWidth ? 'mdi-arrow-expand-left' : 'mdi-arrow-expand-right';
  };

  const isExpanded = computed(() => state.railWidth === initialWidth);

  return {
    state,
    toggle,
    isExpanded
  };
}
