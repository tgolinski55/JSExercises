function sleepIn(weekday, vacation){
	if(!weekday || vacation)
		return true;
	else
		return false;

}

function monkeyTrouble(aSmile, bSmile){
	return (aSmile&&bSmile)||(!aSmile&&!bSmile)
}

function sumDouble(a, b){
	if (a!=b)
		return a+b
	else
		return 2*(a+b)
}

function diff21(n){
	if(n>21)
		return 2*Math.abs(21-n);
	else
		return Math.abs(21-n);
}
function parrotTrouble(talking, hour){
	if(talking&&(hour>20||hour<7))
		return true
	else
		return false
}
function makes10(a, b){
	if(a==10||b==10||a+b==10)
		return true
	else
		return false
}
function nearHundred(n){
	if(Math.abs(100-n)<=10||Math.abs(200-n)<=10)
		return true
	else
		return false
}
function posNeg(a, b, negative){
	if(negative)
		if (!a&&!b)
			return true
		else
			return false
	else 
		if (!a&&b||a&&!b)
			return true
		else
			return false

}
console.log(posNeg(3,-1, false))
