import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class CalendarIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        CalendarIcon: DefineComponent<CalendarIcon>;
    }
}

export default CalendarIcon;
