import { writable } from "svelte/store"

export const selectedItemsArray = writable([]);
// which element is selected will goes here
export const selected = writable(null);

