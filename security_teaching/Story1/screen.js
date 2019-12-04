//メールリスト
//var mail_add = ["test@abc.ac.jp","test2@abc.ac.jp","test@abc.ac.jp","test3@abc.li.jp"];
//目的の物を表示

function porpose(){
    var i =  Math.floor(Math.random() * mail_add.length);
    document.write(mail_add[i] + "から送られてきたメールを見よ<br>");

}
//アドレスリストをランダムで表示
function mailaddres(){
    var i = 0;
    mail_add.forEach(function( value ){
        //i = Math.floor(Math.random() * 4);
        document.write(mail_add[i]);
        document.write("<br>");
        document.getElementById()
        i++;
    });
}
//目的のメアドと合っているか判定
function juge(){
    document.getwright("起動"); 
    /* 
    if(){
        //合格
        window.location.href = 'Yes1.html';
    }else{
        //不合格
        window.location.href = 'No1.html';
    }
*/
    
}

//合否による画面の遷移
function trans(){

}

porpose();
mailaddres();

