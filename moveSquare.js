function vertMirror(strng){
    return strng.split('\n').map(e => [...e].reverse().join(''));
  }
  
function horMirror(strng){
    return strng.split('\n').split('\n').reverse()
  }
  
function oper(fct, s){
    return fct(s.split('\n')).join('\n');
  }