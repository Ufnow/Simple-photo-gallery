const Http = new XMLHttpRequest();
const url='http://www.splashbase.co/api/v1/images/search?query=tree';
Http.open("GET", url, true);
Http.send();
Http.onreadystatechange=(e)=>{
    
        var Arr = JSON.parse(Http.responseText);

        var Arr2 = Arr.images
        filter('all')
        
        }

//load images depends on filter value

window.filter = function filter(value)  {
 
  removeImg()
  var Arr = JSON.parse(Http.responseText);
  var Arr2 = Arr.images
  var out = "";
  var i;
  var id = 0;
  var loadedImages = 0;
  for(i = 0; i < Arr2.length && loadedImages < 10; i++) {
      if(Arr2[i].site === value || value === 'all') {
          if(i>0&&(i%4 === 0 || i%8 === 0)) {
      out += '<div class="imgcontainer ' + Arr2[i].site + ' box2">' + '<img class = "img" src="' + Arr2[i].url + '">' + 
      '</div>';
      loadedImages++
    }
      else {
        out += '<div id =' + '"' + id + '"'+ ' class="imgcontainer ' + Arr2[i].site + ' box1">' + '<img class = "img" src="' + Arr2[i].url + '">' + 
        '</div>';
        id++
        loadedImages++
      }
     
  } }
  document.getElementById("images").innerHTML = '<div id ="container" class = "container">' + out + '</div>';
  
  keepObjectsSquare()  
 
  if(loadedImages>9){
    document.getElementById("showmore").innerHTML = '<div id ="showmore-container"><button id="showmore-btn" onclick="Clicked()">Show More</button></div>';
    GlobalArrayState = i;
    GlobalFilterValue = value;
    GlobalId = id;

    
  }
  else {
    removeShowMore()
    return false;

  }
  
  }


  //Removing all images from index.html
function removeImg() {
  var x = document.getElementById("container");
  x.parentNode.removeChild(x);
  return false;
} 
//Removing show more button
function removeShowMore() {
  var x = document.getElementById("showmore-container");
  x.parentNode.removeChild(x);
  return false;
} 


//buttons "ative" status controller
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//keeps square images "square" after resizing
window.keepObjectsSquare = function keepObjectsSquare() {


var objects= document.getElementsByClassName("box1");

for(var i = 0; i < objects.length; i++) {
var width = document.getElementById(i).offsetWidth;
document.getElementById(i).style.height= width+'px';
}
}

//Show more images button
window.ShowMore = function ShowMore(filterValue, arrayPosition, idGeneratorPosition) {
  
  var Arr = JSON.parse(Http.responseText);
  var Arr2 = Arr.images;
  var out = "";
  var id = idGeneratorPosition;
  var loadedImages = 0; //param to count how many images are loaded after click on "show more" button.
  var allImagesLoaded= Arr2.length;
  var counter = 0; //this param is some kind of helper to choose in if statment which picture will have class box1 or box2, in filter fuction it works on modulo
  for(i = arrayPosition; i < Arr2.length && loadedImages<10; i++) {
    if(Arr2[i].site === filterValue || filterValue === 'all') {
        if(counter===4 || counter===9) {
    out += '<div class="imgcontainer ' + Arr2[i].site + ' box2">' + '<img class = "img" src="' + Arr2[i].url + '">' + 
    '</div>';
    loadedImages++
  }
    else {
      out += '<div id =' + '"' + id + '"'+ ' class="imgcontainer ' + Arr2[i].site + ' box1">' + '<img class = "img" src="' + Arr2[i].url + '">' + 
      '</div>';
      id++
      loadedImages++
    }
    counter++
    if (counter===10){
      counter =0;
    }
  } 

GlobalArrayState = i+1;
GlobalId = id;
if(i+1===allImagesLoaded){
  removeShowMore()
}
}


document.getElementById("container").lastChild.insertAdjacentHTML('afterend', out);
keepObjectsSquare()  

}


var GlobalId;
var GlobalArrayState;
var GlobalFilterValue;


window.Clicked = function Clicked  () {
ShowMore(GlobalFilterValue,GlobalArrayState,GlobalId);



}




