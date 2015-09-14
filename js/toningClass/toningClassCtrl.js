/**
 * Created by guolibin on 2015/9/6.
 */
var toningClassModule = angular.module("toningClass",[])
toningClassModule.controller("toningClassCtrl",function($scope){
    /*此处数据要从数据库动态获取*/
    $scope.infos = [
        {
            "playImage":"../../img/toningClass/01.png",
            "playInfo":"北京去郊游",
            "playArea":"地点：北京市 *****",
            "playDate":"日期:" + new Date().getFullYear()+"-"+(new Date().getMonth()+1),
            "playMoney":"￥300"
        },
        {
            "playImage:":"../../img/toningClass/01.png",
            "playInfo":"上海去郊游",
            "playArea":"地点：上海市 *****",
            "playDate":"日期:" + new Date().getFullYear()+"-"+(new Date().getMonth()+1),
            "playMoney":"￥400"
        },
        {
            "playImage:":"../../img/toningClass/01.png",
            "playInfo":"广州去郊游",
            "playArea":"地点：广州市 *****",
            "playDate":"日期:" + new Date().getFullYear()+"-"+(new Date().getMonth()+1),
            "playMoney":"￥500"
        }
    ]
})