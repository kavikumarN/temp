https://dotnet.microsoft.com/download/thank-you/net472-developer-pack  
var MyDate = new Date();
var MyDateString = '';
MyDate.setDate(MyDate.getDate());


var date =  (MyDate.getDate()+1 < 10)?'0' + MyDate.getDate():MyDate.getDate();
var month =  (MyDate.getMonth()+1 < 10)?'0' + MyDate.getMonth():MyDate.getMonth();
var year =  MyDate.getFullYear();

var hour =  (MyDate.getHours()+1 < 10)?'0' + MyDate.getHours():MyDate.getHours();
var min =  (MyDate.getMinutes()+1 < 10)?'0' + MyDate.getMinutes():MyDate.getMinutes();
var sec =  (MyDate.getSeconds()+1 < 10)?'0' + MyDate.getSeconds():MyDate.getSeconds();


MyDateString = date + '/' +
               month + '/' + 
               year +' '+
               hour + ':'+
               min +':'+
               sec;

console.log(MyDateString)
