import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class AngleDoubleDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDoubleDownIcon: DefineComponent<AngleDoubleDownIcon>;
    }
}

export default AngleDoubleDownIcon;
