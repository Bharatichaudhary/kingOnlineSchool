if (screen.width > 700) {

    var left = 1;
    var right = 3;
    function show() {
      for (var i = left; i <= right; i++) {
    
        document.getElementById("a" + i).style.display = "inline-block";
    
    
    
      }
    }
    function moveleft()
    {
        if (left <= 5 && right <= 8) {
    
    document.getElementById("a" + left).style.display = "none";
    left++;
    document.getElementById("a" + left).style.display = "none";
    left++;
    document.getElementById("a" + left).style.display = "none";

    left = left + 1;
    right = right + 3;
    for (i = left; i <= right; i++) {
    document.getElementById("a" + i).style.display = "inline-block";
    
    }
    } else 
    return;
    }
    function moveright() {
      if (left > 1 && right > 3 ) {
    
        document.getElementById("a" + right).style.display = "none";
        right--;
        document.getElementById("a" + right).style.display = "none";
        right--;
        document.getElementById("a" + right).style.display = "none";

        left = left - 3;
        right = right - 1;
        for (i = left; i <= right; i++) {
          document.getElementById("a" + i).style.display = "inline-block";
    
        }
      } else {
        return;
      }
    
    }
    

    }
    
    
    
    /*else if(screen.width<720){
        var i = 1;
    function show() {
    
        document.getElementById("c" + i).style.display = "inline-block";
        document.getElementById("a" + i).style.display = "inline-block";
    
    
    
      
    }
    function moveleft()
    {
        if (i < 9 ) {
    
    document.getElementById("c" + i).style.display = "none";
    i = i + 1;
    document.getElementById("c" + i).style.display = "inline-block";
    
    
    } else 
    return;
    }
    function moveright() {
      if (i>1 ) {
    
        document.getElementById("c" + i).style.display = "none";
        i= i - 1;
          document.getElementById("c" + i).style.display = "inline-block";
    
        
      } else {
        return;
      }
    
    }
    function movleft()
    {
        if (i < 8 ) {
    
    document.getElementById("a" + i).style.display = "none";
    i = i + 1;
    document.getElementById("a" + i).style.display = "inline-block";
    
    
    } else 
    return;
    }
    function movright() {
      if (i>1 ) {
    
        document.getElementById("a" + i).style.display = "none";
        i= i - 1;
          document.getElementById("a" + i).style.display = "inline-block";
    
        
      } else {
        return;
      }
    
    }
    }*/
    else{
      function show(){
        return;
      }
    }




    document.querySelector("#show-Login").addEventListener("click",function(){
        document.querySelector(".popup").classList.add("on")
    });
    document.querySelector(".popup .close-popup").addEventListener("click",function(){
        document.querySelector(".popup").classList.remove("on")
    });

    let tab =document.querySelector(".tab-form");
    let tabHeader =tab.querySelector(".tab-header");
    let tabHeaderElement =tab.querySelectorAll(".tab-header > div");
    let tabBody =tab.querySelector(".tab-body");
    let tabBodyElement =tab.querySelectorAll(".tab-body > div");

    for(let i=0;i<tabHeaderElement.length;i++){
        tabHeaderElement[i].addEventListener("click",function(){
            tabHeader.querySelector(".active").classList.remove("active");
            tabHeaderElement[i].classList.add("active");
            tabBody.querySelector(".active").classList.remove("active");
            tabBodyElement[i].classList.add("active");
        });
    }

    if(screen.width < 1100){
      document.querySelector(".navbar").classList.remove("navbar-expand-lg");
      document.querySelector(".blogger").classList.remove("container");

    }
    