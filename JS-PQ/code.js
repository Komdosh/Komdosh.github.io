window.onload = function() {
	main();
  };
//**********************************************************************************
//Classes
var workerAgents = function(nameInp, noa, tfm){ //Worker Agent
	this.name = nameInp;
	this.timeForMake = tfm;		//time Array
	this.wholeTimeOfWork;
	this.IAMConstraint = false;

	this.getWholeTimeOfWork = function (){
		var wholeTimeOfWork = 0;
		wholeTimeOfWork += this.timeForMake[P]*marketNeedP;
		wholeTimeOfWork += this.timeForMake[Q]*marketNeedQ;
		wholeTimeOfWork += this.timeForMake[PQ]*(marketNeedP+marketNeedQ);
		this.wholeTimeOfWork = wholeTimeOfWork;
		return wholeTimeOfWork;
	}

	this.areYouConstraints = function (){
		this.IAMConstraint = this.getWholeTimeOfWork() > workTimeInMinutes;
		return this.IAMConstraint;
	}
}
//---------------------------------------------------------------------------------
var marketAgents = function(nameInp, priceInp, materialCostInp, marketNeedInp, nop){ //Market Agent
	this.name = nameInp;
	this.priceForOne = priceInp;
	this.materialCost = materialCostInp;
	this.marketNeed = marketNeedInp; //in a week
	this.numberOfProduct = nop;
	this.throughput;
	this.thPerMinute; //throughputPerMinute
	this.countMake;

	this.countThroughput = function (){
		var temp = this.priceForOne;
		for(var x in this.materialCost)
			temp -= this.materialCost[x];
		this.throughput = temp;
		if(this.name == 'P')
			this.thPerMinute = temp/(constraint.timeForMake[P]+constraint.timeForMake[PQ]);
		else
			this.thPerMinute = temp/(constraint.timeForMake[Q]+constraint.timeForMake[PQ]);
	}
}

//**********************************************************************************
//Main constant
var P = 0, Q = 1, PQ = 2;
var marketNeedP = 100;
var marketNeedQ = 50;
var workDays = 5;
var workHours = 8;
var workTimeInMinutes = workDays*workHours*60;
var operExp = 6000;
var wA = [];
wA[0] = new workerAgents("A", 2, [15, 10, 0]); //indexes: 0 - for P, 1 for Q, 2 - for PQ
wA[1] = new workerAgents("B", 2, [0, 15, 15]);
wA[2] = new workerAgents("C", 2, [10, 0, 5]);
wA[3] = new workerAgents("D", 2, [15, 5, 0]);
var mA = [];
mA[0] = new marketAgents("P", 90, [20, 20, 0, 5], marketNeedP, P);
mA[1] = new marketAgents("Q", 100, [0, 20, 20, 0], marketNeedQ, Q);
var constraint;
var maxEffective;
var interfaceDiv;
var mainDiv;

//main func like C programm xD
function main(){
	document.body.innerHTML="";
	interfaceDiv = document.createElement("div");
	mainDiv = document.createElement("div")
	document.body.innerHTML="";
	document.body.appendChild(interfaceDiv);
	document.body.appendChild(mainDiv);
	
	interface();
	count();
}

function findConstraints(){
	var constraints = [];
    var i = 0;
	for(var x in wA){
		if(wA[x].areYouConstraints()){
			constraints[i] = wA[x];
			++i;
		}
		mainDiv.innerHTML += wA[x].name + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + wA[x].wholeTimeOfWork 
		+ '&nbsp&nbsp&nbsp&nbsp' + wA[x].areYouConstraints() + '<br>';
	}
	constraint = constraints[0];
	for(var x in constraints)
		if(constraints[x].wholeTimeOfWork>constraint.wholeTimeOfWork)
			constraint = constraints[x];

	if(constraint===undefined){
		constraint = wA[0];
		for(var x in wA)
			if(wA[x].wholeTimeOfWork>constraint.wholeTimeOfWork)
				constraint = wA[x];
		mainDiv.innerHTML += "<br>Ограничений нет!";
		return 0;
	}
}



function count(){
	mainDiv.innerHTML += "Имя Время Ограничение<br>";
    findConstraints();
    for(var x in mA)
    	mA[x].countThroughput();
    mainDiv.innerHTML += "<br>Throughput P: " + mA[0].thPerMinute + "$/мин";
    mainDiv.innerHTML += "<br>Throughput Q: " + mA[1].thPerMinute + "$/мин";

    maxEffective = (mA[0].thPerMinute > mA[1].thPerMinute)?mA[0]:mA[1];
    minEffective = (maxEffective == mA[1])?mA[0]:mA[1];

    var tempTimeOfConstraint = workTimeInMinutes;
    var profit;
    if((maxEffective.marketNeed*constraint.timeForMake[maxEffective.numberOfProduct]+
    	maxEffective.marketNeed*constraint.timeForMake[PQ]) < workTimeInMinutes){

    	tempTimeOfConstraint -= maxEffective.marketNeed*constraint.timeForMake[maxEffective.numberOfProduct]+
    	maxEffective.marketNeed*constraint.timeForMake[PQ];
    	maxEffective.countMake = maxEffective.marketNeed;
    	minEffective.countMake = tempTimeOfConstraint/(constraint.timeForMake[minEffective.numberOfProduct]+
    		constraint.timeForMake[PQ]);
    }
    else{
    	minEffective.countMake = 0;
    	maxEffective.countMake = tempTimeOfConstraint/(constraint.timeForMake[maxEffective.numberOfProduct]+
    		constraint.timeForMake[PQ]);
    }
    profit = maxEffective.countMake*maxEffective.throughput + minEffective.countMake*minEffective.throughput;
    mainDiv.innerHTML += "<br>Чистая прибыль: " + profit + " - " + operExp + " = " + (profit - operExp);
}

function interface(){
//first Table--------------------------------------------
	var tb = document.createElement('table');
	tb.setAttribute("border", "1px");

	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = "Имя";
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = "Время P";
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = "Время Q";
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = "Время PQ";
	tr.appendChild(td);

	tb.appendChild(tr);

	var names = ["A", "B", "C", "D"];
	for(var i = 0; i<4; ++i){
		var tr = document.createElement('tr');

		var td = document.createElement('td');
		td.innerHTML = names[i];
		tr.appendChild(td);

		for(var j = 0; j<3; ++j){
			var td = document.createElement('td');
			var inp = document.createElement('input');
			inp.setAttribute("placeholder", 15);
			inp.setAttribute("value", wA[i].timeForMake[j]);
			inp.setAttribute("style", "width: 70px");
			inp.type = 'number';
			inp.id = j+'tfm'+i;
			td.appendChild(inp);
			tr.appendChild(td);
		}
	
		tb.appendChild(tr);
	}
	interfaceDiv.appendChild(tb);
	interfaceDiv.innerHTML +="<hr>";
//---------------------------------------------------------------------
//second Table--------------------------------------------
	var tb = document.createElement('table');
	tb.setAttribute("border", "1px");

	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = "Продукт";
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = "Цена за шт.";
	tr.appendChild(td);
	for(var i = 1; i<5; ++i){
		var td = document.createElement('td');
		td.innerHTML = i+" материал";
		tr.appendChild(td);
	}
	var td = document.createElement('td');
	td.innerHTML = "Кол-во в неделю";
	tr.appendChild(td);	
	tb.appendChild(tr);

	var names = ["P", "Q"];
	for(var i = 0; i<2; ++i){
		var tr = document.createElement('tr');

		var td = document.createElement('td');
		td.innerHTML = names[i];
		tr.appendChild(td);

		var td = document.createElement('td');
		var inp = document.createElement('input');
		inp.setAttribute("placeholder", 15);
		inp.setAttribute("value", mA[i].priceForOne);
		inp.setAttribute("style", "width: 70px");
		inp.type = 'number';
		inp.id = 'priceForOne'+i;
		td.appendChild(inp);
		tr.appendChild(td);

		for(var j = 0; j<4; ++j){
			var td = document.createElement('td');
			var inp = document.createElement('input');
			inp.setAttribute("placeholder", 15);
			inp.setAttribute("value", mA[i].materialCost[j]);
			inp.setAttribute("style", "width: 70px");
			inp.type = 'number';
			inp.id = j+'materialCost'+i;
			td.appendChild(inp);
			tr.appendChild(td);
		}

		var td = document.createElement('td');
		var inp = document.createElement('input');
		inp.setAttribute("placeholder", 15);
		inp.setAttribute("value", mA[i].marketNeed);
		inp.setAttribute("style", "width: 70px");
		inp.type = 'number';
		inp.id = 'marketNeed'+i;
		td.appendChild(inp);
		tr.appendChild(td);

		tb.appendChild(tr);
	}

	interfaceDiv.appendChild(tb);
	interfaceDiv.innerHTML+="<hr>";
//third Table--------------------------------------------
	var tb = document.createElement('table');
	tb.setAttribute("border", "1px");

	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = "Опер.Расх.";
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = "Рабочих дней";
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = "Рабочих часов в день";
	tr.appendChild(td);	
	tb.appendChild(tr);

	var tr = document.createElement('tr');

	var td = document.createElement('td');
	var inp = document.createElement('input');
	inp.setAttribute("placeholder", 6000);
	inp.setAttribute("value", operExp);
	inp.setAttribute("style", "width: 70px");
	inp.type = 'number';
	inp.id = 'operExp';
	td.appendChild(inp);
	tr.appendChild(td);

	var td = document.createElement('td');
	var inp = document.createElement('input');
	inp.setAttribute("placeholder", 5);
	inp.setAttribute("value", workDays);
	inp.setAttribute("style", "width: 70px");
	inp.type = 'number';
	inp.id = 'workDays';
	td.appendChild(inp);
	tr.appendChild(td);

	var td = document.createElement('td');
	var inp = document.createElement('input');
	inp.setAttribute("placeholder", 8);
	inp.setAttribute("value", workHours);
	inp.setAttribute("style", "width: 70px");
	inp.type = 'number';
	inp.id = 'workHours';
	td.appendChild(inp);
	tr.appendChild(td);

	tb.appendChild(tr);

	interfaceDiv.appendChild(tb);
//button---------------------------------------------------------
	interfaceDiv.innerHTML+="<br>";
	var button = document.createElement('Button');
	button.innerHTML = "ReCount";
	button.addEventListener( 'click',changeNumbers, false );
	interfaceDiv.appendChild(button);
	var hr = document.createElement('hr');
	interfaceDiv.appendChild(hr);
}


 changeNumbers = function(){
	operExp = parseInt(document.getElementById('operExp').value);
	workDays = parseInt(document.getElementById('workDays').value);
	workHours = parseInt(document.getElementById('workHours').value);
	workTimeInMinutes = workDays*workHours*60;
	for(var i = 0; i<4; ++i){
		for(var j = 0; j<3; ++j){
			wA[i].timeForMake[j] = parseInt(document.getElementById(j+"tfm"+i).value);
		}
	}

	for(var i = 0; i<2; ++i){
		mA[i].priceForOne = parseInt(document.getElementById("priceForOne"+i).value);
		for(var j = 0; j<4; ++j){
			mA[i].materialCost[j] = parseInt(document.getElementById(j+"materialCost"+i).value);
		}
		mA[i].marketNeed = parseInt(document.getElementById("marketNeed"+i).value);
	}

	main();
}
