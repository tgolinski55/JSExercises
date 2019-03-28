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
console.log(parrotTrouble(true, 2))
