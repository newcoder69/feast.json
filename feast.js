window.onload = getFeast;
//this automatically calls our getFeast() on page load

//Array of strings representing the img names
//add images here to include them in randomized selection
var foods = new Array("food0.png", "food1.png", "food2.png", "food3.png", "food4.png", "food5.png", "food6.png", "food7.png", "food8.png", "food9.png", "food10.png", "food11.png", "food12.png" ,"food13.png", "3090.jpg", "anipog.jpg", "m'latency.png");

//called on page load, randomizes all img tags by class
function getFeast(){
  var allfood = document.getElementsByClassName("food");

  for( i = 0; i < allfood.length; i++){
    allfood[i].src = "img/" + foods[Math.floor(Math.random() * foods.length)];
  }
}

//helper function to return a random image path, can be called onclick()
function getRF(){
  return "img/" + foods[Math.floor(Math.random() * foods.length)];
}

//****DEPRECATED [NOT USED]****
//initial implementation of multiple imgs randomized by individual ID,
//but ***hardcoded***, and therefore NOT EFFICIENT - EXAMPLE ONLY
function getFeast(){

  var allfood = document.getElementsByClassName("food");


  for( i = 0; i < allfood.length; i++){
    allfood[i].src = "img/"   + foods[Math.floor(Math.random() *
      foods.length)];



  }

}
