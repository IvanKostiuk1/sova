function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function vändPilen(idElement) {
    var element = document.getElementById('pil' + idElement);
    if (idElement === 1 || idElement === 2) {
        if (element.innerHTML === '▼') element.innerHTML = '►';
        else {
            element.innerHTML = '▼';
        }
    }
}