var display = document.querySelector('[data-dom=display]');
var buttons = document.getElementsByClassName('button');
var operationsRegex = /[+\-*xX%]/g;
var numeralsRegex = /[\dxX%]/;

function addClickEvent(button) {
  button.addEventListener('click', function() {
    var actualValue = display.textContent == '0' ? '' : display.textContent;
  
    switch(this.textContent) {
      case 'AC' :
        display.textContent = 0;
        break;
      case '-' : 
        var last = actualValue.split('').pop();
        display.textContent = !numeralsRegex.test(last) ? actualValue.split('').slice(0,-1).join('') + this.textContent : actualValue + this.textContent;
        break;
      case '+' : 
        var last = actualValue.split('').pop();
        display.textContent = !numeralsRegex.test(last) ? actualValue.split('').slice(0,-1).join('') + this.textContent : actualValue + this.textContent;
        break;
      case 'X' : 
        var last = actualValue.split('').pop();
        display.textContent = !numeralsRegex.test(last) ? actualValue.split('').slice(0,-1).join('') + this.textContent : actualValue + this.textContent;
        break;
      case '*' : 
        var last = actualValue.split('').pop();
        display.textContent = !numeralsRegex.test(last) ? actualValue.split('').slice(0,-1).join('') + this.textContent : actualValue + this.textContent;
        break;
      case '/' : 
        var last = actualValue.split('').pop();
        display.textContent = !numeralsRegex.test(last) ? actualValue.split('').slice(0,-1).join('') + this.textContent : actualValue + this.textContent;
        break;
      default : 
        display.textContent = actualValue + this.textContent;
    }
    checkDisplaySize();
  });
}

function checkDisplaySize() {
  display.style.fontSize = display.textContent.split('').length > 9 ? '30px' : '50px';
}

Array.prototype.forEach.call(buttons, addClickEvent);