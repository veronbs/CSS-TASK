var status = 1;
var mainPage=document.getElementById("mainpage");
var phone=document.getElementById("phone");
function switchSysBar(){
     if (1 == window.status){
		  window.status = 0;
		  //alert(switchPoint);
		 mainPage.style.transform="translate(70%,12%)";/*12%�������mainPage����ĸ߶ȵġ����˺þ�*/
		 phone.style.visibility="hidden";
     }
     else{
		  window.status = 1;
		 mainPage.style.transform="translate(0,0)"
		 phone.style.visibility="initial"
     }
}
