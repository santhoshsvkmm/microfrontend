import type { SessionProcessState } from '@/types/contexts/SessionManager';
import type { RndDragCallback, RndResizeCallback } from 'react-rnd';

export const initialSessionState = {
  session: {
    foregroundId: '',
    states: {},
    stackOrder: []
  },
  foreground: (): void => undefined,
  getState: (): SessionProcessState => ({
    height: 0,
    width: 0,
    x: 0,
    y: 0
  }),
  saveState: (): void => undefined
};

export const initialProcessState = {
  processes: [],
  close: (): string => '',
  load: (): void => undefined,
  maximize: (): void => undefined,
  minimize: (): string => '',
  open: (): string => '',
  position: (): RndDragCallback => () => false,
  restore: (): void => undefined,
  size: (): RndResizeCallback => () => false,
  title: (): void => undefined
};
