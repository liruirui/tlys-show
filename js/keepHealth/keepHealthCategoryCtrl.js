/**
 * Created by guolibin on 2015/9/6.
 */
var keepHealthCategory = angular.module('keepHealthCategory',[])
keepHealthCategory.controller("keepHealthCategoryCtrl", function ($scope) {
    $scope.keepHealthCategoryItems = [
        {
            "image":"../../img/keepHealth/pic.png",
            "name":"木子轩养生会所NO1",
            "area":"北京 海淀区",
            "detailsName":"西二旗软件园",
            "detailsKm":"2.5"
        },
        {
            "image":"../../img/keepHealth/pic.png",
            "name":"木子轩养生会所NO2",
            "area":"南京 海淀区",
            "detailsName":"西二旗软件园",
            "detailsKm":"3.5"
        },
        {
            "image":"../../img/keepHealth/pic.png",
            "name":"木子轩养生会所NO3",
            "area":"河北 海淀区",
            "detailsName":"西二旗软件园",
            "detailsKm":"5.5"
        },
        {
            "image":"../../img/keepHealth/pic.png",
            "name":"木子轩养生会所NO4",
            "area":"河南 海淀区",
            "detailsName":"西二旗软件园",
            "detailsKm":"8.5"
        }
    ]
})