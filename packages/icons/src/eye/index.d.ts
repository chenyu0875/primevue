import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class EyeIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        EyeIcon: DefineComponent<EyeIcon>;
    }
}

export default EyeIcon;
