var images=["https://www.udaipurblog.com/wp-content/uploads/2018/02/About-Us-Bal-Utsav-Bangalore-India.jpg", "https://borgenproject.org/wp-content/uploads/Blog-NGO-Successful-.jpg", "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/2/7/w900X450/This_ngo_leads_fight.jpg" ];
var num=0;
function next(){
    var slider=document.getElementById("slider");
    num++;
    if(num>=images.length){
        num=0;
    }
    slider.src=images[num];
}
setInterval("next()",2000);