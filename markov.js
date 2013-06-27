(function() {
  window.MarkovGenerator = function() {
    this.generate = function() {
      return this.sample;
    };
    
    this.train = function(sample) {
      this.sample = sample;
    };
  };
})();