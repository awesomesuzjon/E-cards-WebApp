export function toggleSidebarFunc() {
	let toggleSidebar = document.getElementById('sidebarToggleDiv');
	let iconSidebar = document.getElementById('iconsSidebarToggle');
	let toggleDarkBtnDiv = document.getElementById('toggleDarkBtn');

	if (toggleSidebar.style.display === 'none') {
		toggleSidebar.style.display = 'block';
		iconSidebar.style.display = 'none';
		toggleDarkBtnDiv.style = 'flex-direction: row;';
		toggleDarkBtnDiv.style = 'align-items:center;';
	} else {
		toggleSidebar.style.display = 'none';
		iconSidebar.style.display = 'block';
		toggleDarkBtnDiv.style = 'flex-direction: column;';
	}
}
