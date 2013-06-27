(function() {
  window.MarkovGenerator = function() {
    function choose(p) {
      var c = Math.floor(Math.random() * p.__total);
      
      var accum = 0;
      for(var k in p) {
        if (k === '__total') continue;
        
        accum += p[k];
        if (accum > c)
          return k;
      }
    };
  
    this.generate = function() {
      var result = '';
      
      var current = '$start'
      
      while(current !== '$end') {
        var possible = incidents[current];
        current = choose(possible);
        
        if (current !== '$end') {
          result += current + ' ';
        }
      }
      
      return result;
    };
    
    var regex = /(\w+)/gm;
    
    function tokenize(s) {
      var tokens = [];
      var match;
      while(match = regex.exec(s)) {
        tokens.push(match[0]);
      }
      return tokens;
    };
    
    var incidents = {};
    this.incidents = incidents;
    
    this.train = function(sample) {
      var tokens = tokenize(sample);
      tokens.push('$end');
      
      var current = '$start', last;
      
      for(var i = 0; i < tokens.length; i++) {
        last = current;
        current = tokens[i];
        
        if (typeof incidents[last] === 'undefined') {
          incidents[last] = {};
        }
        
        incidents[last][current] = incidents[last][current] + 1 || 1;
        incidents[last].__total = incidents[last].__total + 1 || 1;
      }
    };
  };
})();