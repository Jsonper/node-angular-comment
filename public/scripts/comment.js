var app = angular.module('myApp', []);
//查询评论列表
app.controller('commentListCtrl', function($rootScope,$http) {
    $rootScope.comments=[];
    $http.get("/api/comments")
        .success(function (response) {
            $rootScope.comments=response;
        });
});
//提交评论并更新评论列表
app.controller('validateCtrl', function($rootScope,$scope,$http) {
    $scope.comment={
        author:"",
        text:""
    }
    $scope.submitForm=function () {
        var comment=$scope.comment;
        console.log(comment);
        $http.post("/api/comments",comment)
            .success(function (response) {
                $scope.comment={
                    author:"",
                    text:""
                }
                $rootScope.comments=response;
            });
    }
});