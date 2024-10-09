import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class SortAltIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SortAltIcon: DefineComponent<SortAltIcon>;
    }
}

export default SortAltIcon;
