
var Track = function(attrs){
  this.roll = attrs['roll'] || [];
  this.name = attrs['name'];

  var startRecording = function(){
    this.roll = [];
    this.currentTime = new Date();

  };

  var addNotes = function(notes){
    var timeSlice = (new Date () - this.currentTime) / 1000;
    var noteObj = {notes: notes, timeSlice: timeSlice};
    this.roll.push(noteObj);
  };

  var stopRecording = function(){
    this.addNotes([]);
  };

};
