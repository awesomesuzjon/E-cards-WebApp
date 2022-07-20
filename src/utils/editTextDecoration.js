import { selected } from '../stores/selectedItemId';
let subscribe = false;

export function editFontUndeline() {
    subscribe = true;
    const unSubscribe = selected.subscribe((data) => {
        // (data);
        if (!subscribe) {
            return;
        }
        if (data == null) {
            return;
        }
        data.setAttrs({
            textDecoration : 'underline'
    
        });
        subscribe = false;
        unSubscribe();
    });
}
export function editFontNoUnderline() {
    subscribe = true;
    const unSubscribe = selected.subscribe((data) => {
        // (data);
        if (!subscribe) {
            return;
        }
        if (data == null) {
            return;
        }
        data.setAttrs({
            textDecoration : ''
    
        });
        subscribe = false;
        unSubscribe();
    });
}


export function editFontLineThrough() {
    subscribe = true;
    const unSubscribe = selected.subscribe((data) => {
        // (data);
        if (!subscribe) {
            return;
        }
        if (data == null) {
            return;
        }
        data.setAttrs({
            textDecoration : 'line-through'
    
        });
        subscribe = false;
        unSubscribe();
    });
}