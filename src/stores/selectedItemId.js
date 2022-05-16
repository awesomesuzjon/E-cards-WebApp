import { writable } from "svelte/store"

export const eventArray = writable([]);
// which element is selected will goes here
export const selected = writable(null);

