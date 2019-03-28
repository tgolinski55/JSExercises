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

console.log(sumDouble(3,3))
