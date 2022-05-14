<script>
    function fontFamilyChangeFunc() {
      var selector = document.getElementById('selectFontFamily');
      var family = selector.options[selector.selectedIndex].value;
      var h1 = document.getElementById('containerId')
      h1.style.fontFamily = family;        
    }

  </script>


  
  <select id="selectFontFamily" name="selectFontFamily" on:change={fontFamilyChangeFunc} class="text-black p-2">
    <option> Serif </option>
    <option> Brush Script MT </option>
    <option> Cursive </option>                               
    <option> Lucida Handwriting </option>                               
    <option> Sans-Serif </option>                                  
    <option> Garamond </option>
    <option> Verdana </option>
    <option> Courier New </option>                               
  </select>
 

