function shout(string) {
    return string.toUpperCase();
  
  }
  function whisper(string){
    return string.toLowerCase();
  }

  function logShout(string) {
    console.log(string.toUpperCase())
  }
  function logWhisper(string){
    console.log(string.toLowerCase())
  }
  
  function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
      var lowerCase = string.toLowerCase();
      return ('I can\'t hear you!');
    }
    else if (string === string.toUpperCase()){
      var upperCase = 'YES INDEED!';
      return ('YES INDEED!');
      }
      else{
        var dinner = 'I would love to!';
        return(dinner);
      }
    }