<template>
    <DocSectionText v-bind="$attrs">
        <p>Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" binary variant="filled" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Checkbox from '@/volt/Checkbox.vue';
import { ref } from 'vue';

const checked = ref(false);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" binary variant="filled" />
    </div>
</template>

<script setup lang="ts">
import Checkbox from '@/volt/Checkbox.vue';
import { ref } from 'vue';

const checked = ref(false);
<\/script>
`);
</script>
