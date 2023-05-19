const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('change', function() {
  if (this.checked) {
    change_theme();
  } else {
    // Handle unchecked state if needed
    chnage_theme_light();
  }
});

function change_theme() {
    var y = document.getElementsByClassName('container');
    y[0].style.backgroundColor = "black";
    y[0].style.color = "white";
    document.querySelector('.container h1').style.color = "white";
    
    document.querySelector('.hobby_container').style.backgroundColor = "black";
    var p = document.getElementsByClassName('section-title');
    for(let i = 0; i < p.length; i++){
      p[i].style.backgroundColor = "#383838";
      p[i].style.color = "white";
    }

    var a = document.getElementsByClassName('section-content');
    for(let i = 0; i < a.length; i++){
      a[i].style.backgroundColor = "#383838";
      a[i].style.color = "white";
    }

    var b = document.getElementsByClassName('section-container');
    for(let i = 0; i < b.length; i++){
      b[i].style.backgroundColor = "#383838";
      b[i].style.color = "white";
    }
}

function chnage_theme_light(){
  var y = document.getElementsByClassName('container');
    y[0].style.backgroundColor = "white";
    y[0].style.color = "black";
    document.querySelector('.container h1').style.color = "black";
    
    document.querySelector('.hobby_container').style.backgroundColor = "white";
    var p = document.getElementsByClassName('section-title');
    for(let i = 0; i < p.length; i++){
      p[i].style.backgroundColor = "white";
      p[i].style.color = "black";
    }

    var a = document.getElementsByClassName('section-content');
    for(let i = 0; i < a.length; i++){
      a[i].style.backgroundColor = "white";
      a[i].style.color = "black";
    }

    var b = document.getElementsByClassName('section-container');
    for(let i = 0; i < b.length; i++){
      b[i].style.backgroundColor = "white";
      b[i].style.color = "black";
    }
}
