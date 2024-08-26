import type { RouteLocationNormalized } from "vue-router";
import {defineAsyncComponent} from "vue";

export async function loadLayoutMiddleware(route: RouteLocationNormalized): Promise<void> {
    const { layout } = route.meta;
    const normalizedLayoutName = layout || 'default';
    const component = defineAsyncComponent(()=> import(`../layouts/${normalizedLayoutName}/layout.vue`));
    route.meta.layoutComponent = component;
}
