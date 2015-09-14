/**
 * Created by guolibin on 2015/9/6.
 */
var studyListModule = angular.module("studyList",[])
studyListModule.controller("studyListCtrl", function ($scope) {
    $scope.studyListItems = [
        {
            "image":"../../img/expert/man.png",
           "title": "武夷山国学",
            "area": "湖北 海淀区",
            "distance": "西二旗软件园 2.5km"
        },
        {
            "image":"../../img/expert/man.png",
            "title": "峨眉山国学",
            "area": "河南 海淀区",
            "distance": "西二旗软件园 2.5km"
        },
        {
            "image":"../../img/expert/man.png",
            "title": "泰山国学",
            "area": "山东 海淀区",
            "distance": "西二旗软件园 2.5km"
        }
    ]
})
