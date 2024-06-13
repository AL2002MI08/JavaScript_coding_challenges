function isSumOfCubes(s){
    let arr=s.match(/\d{1,3}/g).filter(a=> {
        let num = 0
      for(var i=0;i<a.length;i++){
        num+=Math.pow(a[i],3);
      }
      return num === +a;
    });
    return (!arr||arr.length===0) ? "Unlucky" : arr.map(Number).join(' ')+' '+arr.reduce((s,v)=>s+v*1,0)+' Lucky';
  }