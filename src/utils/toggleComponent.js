export   function toggleSidebarFunc() {
  var toggleSidebar = document.getElementById("sidebarToggleDiv");
  var iconSidebar = document.getElementById("iconsSidebarToggle");


  if (toggleSidebar.style.display === "none") {
    toggleSidebar.style.display = "block";
    iconSidebar.style.display="none"



  } else {
    toggleSidebar.style.display = "none";
    iconSidebar.style.display="block"
    
  }

}



