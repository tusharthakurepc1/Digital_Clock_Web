interval=setInterval(disp_time,1000);
// disp_time();
function disp_time(){
    let hh=null,mm=null,ss=null,ampm=null,week_day=null,day=null,month_name=null;
    let arr_dayName=["Sunday,","Monday,","Tuesday,","Wednesday,","Thrusday,","Friday,","Saturday,"];
    let arr_monthName=["January","February","March","Aprail","May","June","July","August","September","October","November","December"];
    const d=new Date();
    hh=d.getHours();
    ampm="AM";

    if(hh>12){
        hh=hh-12;
        ampm="PM";
    }
else if(hh==12){
ampm="PM";
}
    mm=d.getMinutes();
    ss=d.getSeconds();
    week_day=d.getDay();
    day=d.getDate();
    month_name=d.getMonth();
    document.getElementById("time_h").innerHTML=hh;
    document.getElementById("time_m").innerHTML=mm;
    // document.getElementById("time_s").innerHTML=ss;  //For Seconds.
    document.getElementById("time_ap").innerHTML=ampm;
    document.getElementById("day_name").innerHTML=arr_dayName[week_day];
    document.getElementById("day").innerHTML=day;
    document.getElementById("month").innerHTML=arr_monthName[month_name];
}