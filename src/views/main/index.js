

var tab = null;
var accordion = null;
var tree = null;
var tabItems = [];
$(function ()
{
   var filterMenu = function (text) {
       $.each(JUI.menuData,function (index,value) {
           if(text == value.text && value.children  && value.children.length !=0){

               $("#accordion1").removeAttr('ligeruiid').ligerAccordion({
                   height: height - 24, speed: null,
                   onMenuSelect: function (node) {
                       if (!node.url) return;
                       var tabid = $(node.target).attr("tabid");
                       if (!tabid) {
                           tabid = new Date().getTime();
                           $(node.target).attr("tabid", tabid)
                       }
                       f_addTab(tabid, node.text, node.url);
                   },
                   data: value.children
               });
               return;
           }
       })
   }
    $("#topmenu").ligerToolBar({ items: [
        {text: 'demo', click: function (item) {filterMenu(item.text)}},
        { line:true },
        {text: '客户管理', click: function (item) {filterMenu(item.text)}},
        { line:true },
        { text: '工作单管理', click: function (item) {filterMenu(item.text)}},
        { line:true },
        { text: '财务管理', click: function (item) {filterMenu(item.text)} },
        { line:true },
        { text: '车队管理', click: function (item) {filterMenu(item.text)} },
        { line:true },
        { text: '驳船管理', click: function (item) {filterMenu(item.text)} },
        { line:true },
        { text: '报表管理', click: function (item) {filterMenu(item.text)} },
        { line:true },
        { text: '行政人事', click: function (item) {filterMenu(item.text)} },
        { line:true },
        { text: '系统管理', click: function (item) {filterMenu(item.text)} },
        { line:true },
        { text: '授权码' },
        { line:true },
        { text: '修改密码' },
        { line:true },
        { text: '退出' }
    ]
    });

    //布局
    $("#layout1").ligerLayout({
        leftWidth: 190,
        height: '100%',
        heightDiff: -34,
        space: 4,
        onHeightChanged: f_heightChanged,
        onLeftToggle: function ()
        {
            tab && tab.trigger('sysWidthChange');
        },
        onRightToggle: function ()
        {
            tab && tab.trigger('sysWidthChange');
        }
    });

    var height = $(".l-layout-center").height();

    //Tab
    tab = $("#framecenter").ligerTab({
        height: height,
        showSwitchInTab : true,
        showSwitch: true,
        onAfterAddTabItem: function (tabdata)
        {
            tabItems.push(tabdata);
            saveTabStatus();
        },
        onAfterRemoveTabItem: function (tabid)
        {
            for (var i = 0; i < tabItems.length; i++)
            {
                var o = tabItems[i];
                if (o.tabid == tabid)
                {
                    tabItems.splice(i, 1);
                    saveTabStatus();
                    break;
                }
            }
        },
        onReload: function (tabdata)
        {
            var tabid = tabdata.tabid;
            addFrameSkinLink(tabid);
        }
    });

    //面板
    filterMenu('demo');
    /*$("#accordion1").ligerAccordion({
        height: height - 24, speed: null,
        onMenuSelect:function (node) {
            if (!node.url) return;
            var tabid = $(node.target).attr("tabid");
            if (!tabid)
            {
                tabid = new Date().getTime();
                $(node.target).attr("tabid", tabid)
            }
            f_addTab(tabid, node.text, node.url);
        },
        data:[
            {
                "text": "demo", "url": "../examAdmin/index.html",
                "children": [
                    {
                        "text": "form", "url": "../demo/form/form.html"
                    },
                    {
                        "text": "grid", "url": "../demo/grid/grid.html"
                    },
                    {
                        "text": "formgrid", "url": "../demo/formgrid/formgrid.html"
                    }
                ]
            },
            {
                "text": "demo1", "url": "../examAdmin/index.html",
                "children": [
                    {
                        "text": "form", "url": "../demo/form/form.html"
                    },
                    {
                        "text": "grid", "url": "../demo/grid/grid.html"
                    },
                    {
                        "text": "formgrid", "url": "../demo/formgrid/formgrid.html"
                    }
                ]
            }
        ]
    });*/


    //树
    /* $("#tree1").ligerTree({
     data : indexdata,
     checkbox: false,
     slide: false,
     nodeWidth: 120,
     attribute: ['nodename', 'url'],
     render : function(a){
     if (!a.isnew) return a.text;
     return '<a href="' + a.url + '" target="_blank">' + a.text + '</a>';
     },
     onSelect: function (node)
     {
     if (!node.data.url) return;
     if (node.data.isnew)
     {
     return;
     }
     var tabid = $(node.target).attr("tabid");
     if (!tabid)
     {
     tabid = new Date().getTime();
     $(node.target).attr("tabid", tabid)
     }
     f_addTab(tabid, node.data.text, node.data.url);
     }
     });*/

    function openNew(url)
    {
        var jform = $('#opennew_form');
        if (jform.length == 0)
        {
            jform = $('<form method="post" />').attr('id', 'opennew_form').hide().appendTo('body');
        } else
        {
            jform.empty();
        }
        jform.attr('action', url);
        jform.attr('target', '_blank');
        jform.trigger('submit');
    };


    tab = liger.get("framecenter");
    accordion = liger.get("accordion1");
    tree = liger.get("tree1");
    $("#pageloading").hide();

    css_init();
    pages_init();
});
function f_heightChanged(options)
{
    if (tab)
        tab.addHeight(options.diff);
    if (accordion && options.middleHeight - 24 > 0)
        accordion.setHeight(options.middleHeight - 24);
}
function f_addTab(tabid, text, url)
{
    tab.addTabItem({
        tabid: tabid,
        text: text,
        url: url,
        callback: function ()
        {
            // addShowCodeBtn(tabid);
            addFrameSkinLink(tabid);
        }
    });
}
// function addShowCodeBtn(tabid)
// {
//     var viewSourceBtn = $('<a class="viewsourcelink" href="javascript:void(0)">查看源码</a>');
//     var jiframe = $("#" + tabid);
//     viewSourceBtn.insertBefore(jiframe);
//     viewSourceBtn.click(function ()
//     {
//         showCodeView(jiframe.attr("src"));
//     }).hover(function ()
//     {
//         viewSourceBtn.addClass("viewsourcelink-over");
//     }, function ()
//     {
//         viewSourceBtn.removeClass("viewsourcelink-over");
//     });
// }
function showCodeView(src)
{
    $.ligerDialog.open({
        title : '源码预览',
        url: 'dotnetdemos/codeView.aspx?src=' + src,
        width: $(window).width() *0.9,
        height: $(window).height() * 0.9
    });

}
function addFrameSkinLink(tabid)
{
    var prevHref = getLinkPrevHref(tabid) || "";
    var skin = getQueryString("skin");
    if (!skin) return;
    skin = skin.toLowerCase();
    attachLinkToFrame(tabid, prevHref + skin_links[skin]);
}
var skin_links = {
    "aqua": "lib/ligerUI/skins/Aqua/css/ligerui-all.css",
    "gray": "lib/ligerUI/skins/Gray/css/all.css",
    "silvery": "lib/ligerUI/skins/Silvery/css/style.css",
    "gray2014": "lib/ligerUI/skins/gray2014/css/all.css"
};
function pages_init()
{
    var tabJson = $.cookie('liger-home-tab');
    if (tabJson)
    {
        var tabitems = JSON2.parse(tabJson);
        for (var i = 0; tabitems && tabitems[i];i++)
        {
            f_addTab(tabitems[i].tabid, tabitems[i].text, tabitems[i].url);
        }
    }
}
function saveTabStatus()
{
    $.cookie('liger-home-tab', JSON2.stringify(tabItems));
}
function css_init()
{
    var css = $("#mylink").get(0), skin = getQueryString("skin");
    $("#skinSelect").val(skin);
    $("#skinSelect").change(function ()
    {
        if (this.value)
        {
            location.href = "index.htm?skin=" + this.value;
        } else
        {
            location.href = "index.htm";
        }
    });


    if (!css || !skin) return;
    skin = skin.toLowerCase();
    $('body').addClass("body-" + skin);
    $(css).attr("href", skin_links[skin]);
}
function getQueryString(name)
{
    var now_url = document.location.search.slice(1), q_array = now_url.split('&');
    for (var i = 0; i < q_array.length; i++)
    {
        var v_array = q_array[i].split('=');
        if (v_array[0] == name)
        {
            return v_array[1];
        }
    }
    return false;
}
function attachLinkToFrame(iframeId, filename)
{
    if(!window.frames[iframeId]) return;
    var head = window.frames[iframeId].document.getElementsByTagName('head').item(0);
    var fileref = window.frames[iframeId].document.createElement("link");
    if (!fileref) return;
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    head.appendChild(fileref);
}
function getLinkPrevHref(iframeId)
{
    if (!window.frames[iframeId]) return;
    var head = window.frames[iframeId].document.getElementsByTagName('head').item(0);
    var links = $("link:first", head);
    for (var i = 0; links[i]; i++)
    {
        var href = $(links[i]).attr("href");
        if (href && href.toLowerCase().indexOf("ligerui") > 0)
        {
            return href.substring(0, href.toLowerCase().indexOf("lib") );
        }
    }
}