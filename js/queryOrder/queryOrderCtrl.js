/**
 * Created by guolibin on 2015/9/6.
 */
var queryOrderModule = angular.module("queryOrder",[])
queryOrderModule.controller("queryOrderCtrl", function ($scope){
    $scope.shopCartItems = [
        {
            "orderNum":"889036576576",
            "orderImage":"../../img/queryOrder/strawberry1.png",
            "orderDesc":"有机西红柿，回归大自然的感觉，体验小时候的味道NO1",
            "orderAmount":"500g/份",
            "orderPaid":"￥88.00"
        },
        {
            "orderNum":"036576576",
            "orderImage":"../../img/queryOrder/strawberry1.png",
            "orderDesc":"有机西红柿，回归大自然的感觉，体验小时候的味道NO2",
            "orderAmount":"500g/份",
            "orderPaid":"￥36.00"
        },
        {
            "orderNum":"836576576",
            "orderImage":"../../img/queryOrder/strawberry1.png",
            "orderDesc":"有机西红柿，回归大自然的感觉，体验小时候的味道NO3",
            "orderAmount":"500g/份",
            "orderPaid":"￥56.00"
        },
        {
            "orderNum":"76576",
            "orderImage":"../../img/queryOrder/strawberry1.png",
            "orderDesc":"有机西红柿，回归大自然的感觉，体验小时候的味道NO4",
            "orderAmount":"500g/份",
            "orderPaid":"￥66.00"
        }
    ]
    //将点击删除购物车列表的事件绑定到每个angular元素上
    $scope.delGoodItem = function($index) {
        $scope.shopCartItems.splice($index, 1);
    };
})