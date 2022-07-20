import { selected } from '../stores/selectedItemId';
let subscribe = false;

	export function editFontStyleBold() {
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
				fontStyle: 'bold'
		
			});
			subscribe = false;
			unSubscribe();
		});
	}
	export function editFontStyleItalic() {
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
				fontStyle: 'italic'
		
			});
			subscribe = false;
			unSubscribe();
		});
	}
	export function editFontStyleItalicBold() {
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
				fontStyle: 'italic bold'
		
			});
			subscribe = false;
			unSubscribe();
		});
	}
	export function editFontStyleNormal() {
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
				fontStyle: 'normal'
		
			});
			subscribe = false;
			unSubscribe();
		});
	}
