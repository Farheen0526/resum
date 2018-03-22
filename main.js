function loadJSON(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
loadJSON("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
})
var right=document.querySelector(".content");
function career(car){
console.log(car.info);
var h2=document.createElement("h3");
h2.textContent="Career Objective";
right.appendChild(h2);
var hr=document.createElement("hr");
right.appendChild(hr);
var p=document.createElement("p");
p.textContent=car.info;
right.appendChild(p);
}
function education(edu){
  var h3=document.createElement("h3");
  h3.textContent="Education Qualificationss";
  right.appendChild(h3);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var ul=document.createElement("ul");
  right.appendChild(ul);
  for(var i=edu.length-1;i>=0;i--){
 var li=document.createElement("li");
 li.textContent=edu[i].degree;
 ul.appendChild(li);
 var ol1=document.createElement("ol");
 ol1.textContent=edu[i].school;
 li.appendChild(ol1);
 var ul1=document.createElement("ul");
 ul.appendChild(ul1);
 for(var j=0;j<edu[i].data.length;j++){
   var li1=document.createElement("li");
   li1.textContent=edu[i].data[j];
   ul1.appendChild(li1);
 }
  }
}
function skills(sk){
  var h3=document.createElement("h3");
  right.appendChild(h3);
  h3.textContent="Skills Known";
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var table=document.createElement("table");
  right.appendChild(table);
  table.border=1;
  let row="";
  for(var i=0;i<sk.length;i++){
    row+="<tr><td>"+sk[i].name+"</td><td>"+sk[i].info+"</td></tr>";
  }
  table.innerHTML=row;
}
