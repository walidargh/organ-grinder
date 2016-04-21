


var Track = function(attrs){
  this.roll = attrs['roll'] || [];
  this.name = attrs['name'];

  var startRecording = function(){
    this.roll = [];
    this.currentTime = Date.now();

  };

  var addNotes = function(notes){
    var timeSlice = (Date.now() - this.currentTime) ;
    var noteObj = {notes: notes, timeSlice: timeSlice};
    this.roll.push(noteObj);
  };

  var play = function(){
    var self = this;
    if (!this.interval){
        var startTime = Date.now();
        var currentNote = 0;
          this.interval = setInterval(function(){
            if (currentNote < self.roll.length) {
              if (Date.now() - startTime < obj.timeSlice) {
                KeyAction.keyPressed(self.roll[currentNote].notes)
              }
              currentNote++;
            } else {
              clearInterval(self.interval)
            }

          }, 10);
        }
      });
    }
  };


  var stopRecording = function(){
    this.addNotes([]);
  };

};
