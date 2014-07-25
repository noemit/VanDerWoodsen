
window.onload=function(){

//the products inside object wrapper
var products = document.getElementsByClassName("box");

//the product images 
var productImages = document.getElementsByClassName("boximage");

// The above two variables should always be the same length
if (products.length !== productImages.length) {
	console.log("problem with product and productimages length! images:" + productImages.length + "and products:" + products.length);
}


//sorting buttons
var tall = document.getElementById("tall");
var mini = document.getElementById("mini");

//images only?
var imagesonlyactive = "0";

//global variable to check if the price is visible
var pricevisible = "1";

//the spans that indicate a product is one of a kind
var ooakproducts = document.getElementsByClassName("oneofakind");

//button to show one of a kind items only
var ooak = document.getElementById("ooak");

// is one of a kind sort mode active?
var ooakvisible = "0";

//the spans that indicate a product is almost sold out
var lastchanceproducts = document.getElementsByClassName("lastchance");

//button to products that are almost sold out
var lastchance = document.getElementById("lastchance");

//is almost sold out sort mode active?
var lastchancevisible = "0";

//pagination buttons
var page1button = document.getElementById("page1button");
var page2button = document.getElementById("page2button");
//pagination show all
var paginationshowall = document.getElementById("paginationshowall");

//default style of 'tall'
for (var i = 0; i < products.length; ++i) {
	products[i].style.width = '200px';
	products[i].style.height = '225px';
	productImages[i].style.display = 'block';
	productImages[i].style.width = '175px';
	productImages[i].style.margin = 'auto';
	    };

//this is my poorly made semi-hard-coded pagination
//show page 1 objects only
function pageone() {

	page1button.className = "pressed";
	page2button.className = "normal";
	for (var i = 0; i < products.length; ++i) {
	products[i].style.display = 'none';
}
	for (var i = 0, limit=8; i < limit; ++i) {
	products[i].style.display = 'block';
}
}
pageone();

//go to page one when you click the page one button
page1button.onclick = function(e){
	pageone();
}
//go to page two when you click the page two button
page2button.onclick = function(e){
	page2button.className = "pressed";
	page1button.className = "normal";
	for (var i = 0; i < products.length; ++i) {
	products[i].style.display = 'none';
}

//making sure my for loop doesnt go past how many products i actually have or else it will throw an error
if (products.length > 15)
		{
			for (var i = 8, limit=15; i < limit; ++i) {
			products[i].style.display = 'block';
			} 
		}
else if (products.length < 15) 
		{
			for (var i = 8, limit=15; i < products.length; ++i) {
			products[i].style.display = 'block';
			}
		}
	}

// buttons that change product style
// tall style aka "classic" or original style
function tallstyle() {
	//revert prices to original
	pricevisible = "1";
	hideprice.innerHTML = "Hide Prices";

	//revert image style to original
	imagesonlyactive = "0";
	mini.className = "normal";


		for (var i = 0; i < products.length; ++i) {

			//show all childNodes
			if (products[i].hasChildNodes()) {
     		var children = products[i].childNodes;               

   			  // Loop through the children to make sure they all are block style.
    		 for(var c=0; c < children.length; c++) {
     		 if(children[c].title !== undefined) {
     		  children[c].style.display = 'block';
     			}
     			}
			 }

	//styling
	products[i].style.width = '200px';
	products[i].style.height = '225px';
	productImages[i].style.display = 'block';
	productImages[i].style.width = '175px';
	productImages[i].style.margin = 'auto';
	    };
	}

//initialize tall style on click	
tall.onclick = function(e) {
		console.log("clicked");
		
tallstyle();
}

// mini style aka "images only" - toggle
mini.onclick = function(e){
	if (imagesonlyactive == "0")
	{
		imagesonlyactive = "1";
		mini.className = "pressed";
		console.log("clicked");
		for (var i = 0; i < products.length; ++i) {

			//hide childNodes
			if (products[i].hasChildNodes()) {
     		var children = products[i].childNodes;               

   			  // Loop through the children
    		 for(var c=0; c < children.length; c++) {
     		 if(children[c].title !== undefined) {
     		  children[c].style.display = 'none';
     			}
     			}
			 }
	products[i].style.width = '200px';
	products[i].style.height = '200px';
	productImages[i].style.display = 'block';
	productImages[i].style.width = '200px';
	    };
	}
	else if (imagesonlyactive == "1")
	{
	
		tallstyle();
	}
	}

// toggle price visibility
hideprice.onclick = function(e){

		console.log("clicked");
if (pricevisible == "1") {
	tallstyle();
	//toggle variable to keep track of wether price is hidden or not
pricevisible = "0";
hideprice.innerHTML = "Show Prices";
for (var i = 0; i < products.length; ++i) {

			//hide childNodes
			if (products[i].hasChildNodes()) {
     		var children = products[i].childNodes;               

   			  // Loop through the children
    		 for(var c=0; c < children.length; c++) {
     		 if(children[c].title !== undefined) {
     		  children[c].style.display = 'block';
     		  if(children[c].className == 'price') {
     			children[c].style.display = 'none';	
     			}
     			}
     			
			 }

	products[i].style.width = '200px';
	products[i].style.height = '225px';
	productImages[i].style.display = 'block';
	productImages[i].style.width = '175px';
	productImages[i].style.margin = 'auto';
	    };
	}


} else if (pricevisible == "0") {
	//to toggle back, just go back to tallstyle/original/'classic'
tallstyle();
}
		

		
}


// go back to original pagination from sort modes
paginationshowall.onclick = function(e) {
		ooak.className = "normal";
		lastchance.className = "normal";
		lastchancevisible = "0";
		ooakvisible = "0";
		paginationshowall.style.display = 'none';
		page1button.style.display = 'inline-block';
		page2button.style.display = 'inline-block';
		pageone();
}

// toggle one of a kind button
ooak.onclick = function(e){
		console.log("clicked");
console.log(ooakvisible);
		if (ooakvisible == "1") {
		ooak.className = "normal";
		ooakvisible = "0";
		paginationshowall.style.display = 'none';
		page1button.style.display = 'inline-block';
		page2button.style.display = 'inline-block';
		pageone();
		}
		else if (ooakvisible == "0"){
ooakvisible = "1";
lastchancevisible = "0";
paginationshowall.style.display = "inline-block";
pageone();
lastchance.className = "normal";
ooak.className = "pressed";
for (var i = 0; i < products.length; ++i) {
		products[i].style.display = 'none';
		  };

	

		for (var i = 0; i < ooakproducts.length; ++i) {
		ooakproducts[i].parentNode.parentNode.style.display = 'block';
		  };

		  page1button.style.display = 'none';
		  page2button.style.display = 'none';
		}

		
	  }

	 // toggle last chance button
lastchance.onclick = function(e){
		console.log("clicked");
console.log(lastchancevisible);
		if (lastchancevisible == "1") {
		lastchance.className = "normal";
		lastchancevisible = "0";
		paginationshowall.style.display = 'none';
		page1button.style.display = 'inline-block';
		page2button.style.display = 'inline-block';
		pageone();
		}
		else if (lastchancevisible == "0"){
ooakvisible = "0";
lastchancevisible = "1";
pageone();
paginationshowall.style.display = "inline-block";
ooak.className = "normal";
lastchance.className = "pressed";
for (var i = 0; i < products.length; ++i) {
		products[i].style.display = 'none';
		  };

	

		for (var i = 0; i < lastchanceproducts.length; ++i) {
		lastchanceproducts[i].parentNode.parentNode.style.display = 'block';
		  };

		  page1button.style.display = 'none';
		  page2button.style.display = 'none';
		}

		
	  }
	

}
