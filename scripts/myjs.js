// JavaScript Document
$(function() {
    //案例图片鼠标移动效果
    $('.anlibody .anlipic').hover(function() {
        $(this).find('.alanimate').show();
    }, function() {
        $(this).find('.alanimate').hide();
    })

    //移动端和PC端按钮切换
    $('.ydbtn').click(function() {
        $(this).addClass('on').siblings().removeClass('on')
        $('.phone').show()
        $('.pc').hide()
    });

    $('.pcbtn').click(function() {
        $(this).addClass('on').siblings().removeClass('on')
        $('.pc').show();
        $('.phone').hide();

    });

    //手机端导航点击跳转链接
    $('[data-toggle=dropdown]').click(function(event) {
        var ul = $(this).siblings('ul');
        if (ul.is(':hidden')) {
            ul.show()
        } else {
            ul.hide()
        }
    });


})

//表单验证
function Form() {
    document.getElementById('Form').reset();

} //清空表单
//验证

function Checkform() {
    //姓名
    var name = document.getElementById('name');
    // console.log(name);  
    if (name.value.length == 0) {
        alert('请输入姓名');
        name.focus();
        return false;
    }
    if (name.value.length < 2 || name.value.length > 4) {
        alert('请输入2-4个汉字');
        name.focus(); //返回到文本框字段的焦点
        return false;

    }
    //判断是汉字 
    var reg = /^([A-Za-z]|[\u4E00-\u9FA5])+$/
    if (!reg.test(name.value)) {
        alert("请输入汉字");
        name.focus();
        return false;
    }

    //电话
    var numbers = document.getElementById('phone');

    if (isNaN(numbers.value)) {
        alert("请输入数字")
        numbers.focus();
        return false;
    }
    if (numbers.value.length == 0) {
        alert("请输入电话");
        numbers.focus();
        return false;
    }
    if (numbers.value.length < 11) {
        alert("请输入11位手机号码");
        numbers.focus();
        return false;

    }


    //提交给后台
    var data = {};
    data.name = name.value;
    data.phone = numbers.value;
    console.log(data);
    var url = '';

    $.post(url, data, function(res) {

        if (res.code == 100) {

            document.getElementById('froms').submit();

        } else if (res.code == 40) {

            alert('后台验证未通过,' + res.msg);
        }

    }, 'json');

}


