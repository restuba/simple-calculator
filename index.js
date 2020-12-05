let btn = document.querySelectorAll('#calculator .btn');
const operators = ['+', '-', '*', '/'];

for(let i = 0; i < btn.length; i++) {
  btn[i].onclick = function(e) {	
    const result = document.querySelector('.result');
		const resultValue = result.innerHTML; 
		const btnValue = this.innerHTML; 
    let total;
		if(btnValue == 'C') { 
			result.innerHTML = '';
		}
		
		else if(btnValue == '=') {
			const equation = resultValue;	
      if(equation){
        total = eval(equation);
        if(total.toString().indexOf('.') != -1) total= total.toFixed(2);
        result.innerHTML = total;
      }
		}		
		
		else if(operators.indexOf(btnValue) >= 0) {
      console.log(btnValue, operators.indexOf(btnValue))
      var lastChar = resultValue[resultValue.length - 1];
      console.log(operators.indexOf(lastChar) == -1, lastChar)
			if(resultValue != '' && operators.indexOf(lastChar) == -1) result.innerHTML += btnValue;
			if(resultValue == '' && btnValue == '-') result.innerHTML += btnValue;
		}
		
		else if(btnValue == '.' ) result.innerHTML += btnValue;
		else result.innerHTML += btnValue;
	} 
}