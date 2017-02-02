
    

function getOrder() {
    tot1 = "";
    tot2 = "";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var pizzaSize = sizeArray[i].value;
			tot1 = tot1+pizzaSize+"<br>";
		}
    }
    if (pizzaSize === "personal") {
        sizeTotal = 6;
        tot2 = tot2+sizeTotal+"<br>";
    } else if (pizzaSize === "medium") {
        sizeTotal = 10;
        tot2 = tot2+sizeTotal+"<br>";
    } else if (pizzaSize === "large") {
        sizeTotal = 14;
        tot2 = tot2+sizeTotal+"<br>";
    } else if (pizzaSize === "extralarge") {
        sizeTotal = 16;
        tot2 = tot2+sizeTotal+"<br>";
    }
    tot1 = tot1+pizzaSize+"<br>";
    runningTotal = sizeTotal;
   // getCrust(runningTotal, tot1, tot2);
};

function getCrust(runningTotal, tot1, tot2) {
    var crustTotal = 0;
    var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			var crustChoice = crustArray[j].value;
			tot1 = tot1 + crustChoice + "<br>";
		}
    }
    if (crustChoice === 'stuffed') {
        crustTotal = 3;
    } 
    runningTotal = (runningTotal + crustTotal);
    tot2 = tot2 + crustTotal + "<br>";
    getSauce(runningTotal,tot1,tot2);
};

function getSauce(runningTotal,tot1,tot2) {
    var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			var sauceChoice = sauceArray[j].value;
			tot1 = tot1 + sauceChoice +"<br>";
		}
	}
    tot2 = tot2 + 0 + "<br>";
    getCheese(runningTotal,tot1,tot2);
};

function getCheese(runningTotal,tot1,tot2) {
    var cheeseTotal = 0;
    var cheeseChoice = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			cheeseChoice = cheeseArray[j].value;
		}
    }
    if (cheeseChoice === 'extracheese') {
        cheeseTotal = 3;
    }
    tot2 = tot2 + cheeseTotal + "<br>";
    tot1 = tot1 + cheeseChoice + "<br>";
    getMeat(runningTotal,tot1,tot2);
};

function getMeat(runningTotal,tot1,tot2) {
    var meatTotal = 0;
    var meatChoice = [];
    var meatArray = document.getElementsByClassName("meat");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            meatChoice.push(meatArray[j].value);
        }
    }
    var meatCount = meatChoice.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    for (var j=0; j < meatChoice.length; j++) {
        tot1 = tot1+meatChoice[j]+"<br>";
        if (meatCount <=1) {
            tot2 = tot2 + 0 + "<br>";
        } else if (meatCount == 2) {
            tot2 = tot2 + 1 + "<br>";
            meatCount = meatCount - 1;
        } else {
            tot2 = tot2 + 1 + "<br>";
            meatCount = meatCount - 1;
        }
    }
    getVeggie(runningTotal,tot1,tot2);
};

function getVeggie(runningTotal,tot1,tot2) {
    var veggieTotal = 0;
    var veggieChoice = [];
    var veggieArray = document.getElementsByClassName("veggie");
    for (var j = 0; j < veggieArray.length; j++) {
       if (veggieArray[j].checked) {
            veggieChoice.push(veggieArray[j].value); 
       }
    }
    var veggieCount = veggieChoice.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }
    runningTotal = (runningTotal + veggieTotal);
    for (var j=0; j < veggieChoice.length; j++) {
        tot1 = tot1+veggieChoice[j]+"<br>";
        if (veggieCount <=1) {
            tot2 = tot2 + 0 + "<br>";
        } else if (veggieCount == 2) {
            tot2 = tot2 + 1 + "<br>";
            veggieCount = veggieCount - 1;
        } else {
            tot2 = tot2 + 1 + "<br>";
            veggieCount = veggieCount - 1;
        }
    }
    document.getElementById("orderreceipt").style.opacity=1;
	document.getElementById("orderItems").innerHTML=tot1;
	document.getElementById("itemPrice").innerHTML=tot2;
	document.getElementById("total").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";

};

function clearAll() {
    document.getElementById('pizzamenu').reset();
    document.getElementById('orderreceipt').style.opacity=0;
}
