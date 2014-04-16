/**
 * Created by steven on 2014/4/11.
 */
function newInstance()
{
    return{
        "id":0,
        "user":{
            "image":"",
            "name":"",
            "publish":{
                "time":"",
                "public_way":""
            }
        },
        "content":{
            "text":"11111111111111",
            "image":"222222222222222",
            "interaction":{
                "up":0,
                "down":0,
                "share_count":0,
                "comment_count":0
            }
        }
    }
}

$(function(){
    init_nb_entity(newInstance());
});

function init_nb_entity(nbentity){
    var nb_block=$("<div/>");
    nb_block.attr('class','nb_block floatl');
    createAuthor(nbentity.user).appendTo(nb_block);
    createContent(newInstance().content).appendTo(nb_block);
    $("body").append(nb_block);

}



function createAuthor(userInfo){
    var div_userInfo = $("<div/>").attr('class','user_info');;
    var ul = $("<ul/>").appendTo(div_userInfo);
    var li_image = $("<li/>").appendTo(ul);
    var img_logo = $("<img/>").appendTo(li_image);
    img_logo.attr("src","http://pic.qiushibaike.com/system/avtnew/677/6770416/thumb/6770416.jpg");
    img_logo.attr("alt","nihao");
    var li_username = $("<li/>").attr('class','user_name').appendTo(ul);
    var p_username=$("<p/>").html("HHHHHHHHHH").appendTo(li_username);
    var li_publicInfo=$("<li/>").appendTo(ul);
    var p_publishInfo=$("<p/>").html("发布于2014-04-15 23:08:01").attr('class','public_info').appendTo(li_publicInfo);

    return div_userInfo;
}

function createContent(content){
   var div_content=$("<div />").attr('class','content clear');
   var div_content_wrapper=$("<div />").attr('class','nb_block floatl content_wrapper').appendTo(div_content);
   if(content && $.trim(content.text)!=""){
       var p_text_content = $("<p/>").html(content.text).attr('class','text_content').appendTo(div_content_wrapper);
   }
   if(content&& $.trim(content.image)!=""){
       var p_img_content = $("<p/>").attr('class','p_img_content').appendTo(div_content_wrapper);
       var a_img_content_wrapper=$("<a/>").attr('href','detail-0001').attr('style','float:left').appendTo(p_img_content);
       var img=$("<img/>").attr('src','http://ww3.sinaimg.cn/large/005zEVpxjw1efg0k9w69vj30cg3707dw.jpg').appendTo(a_img_content_wrapper);

   }
    createInteraction(content.interaction).appendTo(div_content);

    return div_content;
}

function createInteraction(interaction){
    var div_interaction= $("<div/>").attr("class","interaction");
    var ul_devote=$("<ul/>").attr("class","floatl").appendTo(div_interaction);
    var li_devote_up=$("<li/>").attr("class","devote_up").appendTo(ul_devote);
    var a_devote_up=$("<a/>").attr("click","").appendTo(li_devote_up);
    var span_up=$("<span/>").attr("id","").html(123).appendTo(a_devote_up);

    var li_devote_down=$("<li/>").attr("class","devote_down").appendTo(ul_devote);
    var a_devote_down=$("<a/>").attr("click","").appendTo(li_devote_down);
    var span_down=$("<span/>").attr("id","").html(123).appendTo(a_devote_down);

    var ul_interaction=$("<ul/>").attr("class","floatr").appendTo(div_interaction);
    var li_share=$("<li/>").attr("class","share").appendTo(ul_interaction);
    var a_share=$("<a/>").attr("click","").appendTo(li_share);
    var span_share=$("<span/>").attr("id","").html(123).appendTo(a_share);


    var li_common=$("<li/>").attr("class","common").appendTo(ul_interaction);
    var a_common=$("<a/>").attr("click","").appendTo(li_common);
    var span_common=$("<span/>").attr("id","").html(123).appendTo(a_common);

    return div_interaction;
}
