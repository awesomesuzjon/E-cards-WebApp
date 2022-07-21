<script>
	import { selected } from '../../stores/selectedItemId';

	let subscribe = false;
	export function fontFamilyChangeFunc() {
		subscribe = true;
		const unSubscribe = selected.subscribe((data) => {
			// (data);
			if (!subscribe) {
				return;
			}
			const fontInput = document.getElementById('fontInput').value;
			if (data == null) {
				return;
			}
			data.setAttrs({
				fontFamily: fontInput
			});
			subscribe = false;
			unSubscribe();
		});
	}
</script>

<select
	name="selectFontFamily"
	id="fontInput"
	on:change={fontFamilyChangeFunc}
	class="text-black w-24 h-10 mx-2 rounded	 text-sm p-2"
>
	<option> Serif </option>
	<option> Brush Script MT </option>
	<option> Cursive </option>
	<option> Lucida Handwriting </option>
	<option> Sans-Serif </option>
	<option> Garamond </option>
	<option> Verdana </option>
	<option> Courier New </option>
</select>
