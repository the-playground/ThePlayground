import { AvailableGridSize } from '@tokens';

export type AvailableContainerType = 'full' | 'contained';

export interface ContainerProps {
    maxWidth?: AvailableGridSize;
    type?: AvailableContainerType;
    others?: any;
}
