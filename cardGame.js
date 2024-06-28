function winner(deckSteve, deckJosh) {
    var ranks = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
    var steve = 0, josh = 0;
    
    for(var i = 0; i < deckSteve.length; i++) {
      var s = ranks.indexOf(deckSteve[i]);
      var j = ranks.indexOf(deckJosh[i]);
      
      if(s == j) continue;
      s > j ? steve++ : josh++;
    }
    
    if(steve == josh) return 'Tie';
    return steve > josh ? `Steve wins ${steve} to ${josh}` : `Josh wins ${josh} to ${steve}`;
  }
  
