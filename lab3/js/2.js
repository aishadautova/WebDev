let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//
let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

//

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}

//

if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

//

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

//

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);