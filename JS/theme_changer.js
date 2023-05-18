const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('change', function() {
  if (this.checked) {
    change_theme();
  } else {
    // Handle unchecked state if needed
  }
});

function change_theme() {
    var x = document.getElementsByClassName('container');
    for(let i = 0; i < x.length; i++) {
        x[i].style.color = "white";
        x[i].style.backgroundColor = "black";
    }
}
