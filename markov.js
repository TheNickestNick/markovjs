(function() {
  window.MarkovGenerator = function() {
    this.generate = function() {
    };
    
    var regex = /(\w+)((\W+)|$)/gm.compile();
    
    function tokenize(s) {
      var tokens = [];
      var match;
      while(match = regex.exec(s)) {
        tokens.push(match);
      }
      return tokens;
    };
    
    this.train = function(sample) {
      return tokenize(sample);
    };
  };
})();