var app= angular.module('app',[]);
app.controller("MainController", function($scope) {
       $scope.name="angular";
       $scope.user ={
        name:"Angular Class",
        day:"wed",
        friends:[
           'Angular2',
           'Javascript',
           'Typescript'
        ],
        groupmember:"aishu is one of the member"
        
       }
       $scope.websitestolearnsoftwares ={
         websites:['javatpoint',
         'w3schools'],
         
       }
         
       
       
       });
       
app.directive('userInfoCard', function(){
    return{
    //template:"User Info card",
    template:"Name :{{user.name}} <br/> <div ng-show='!!user.day'> Day :{{user.day}} </div> <br/> <div ng-repeat='friend in user.friends'> {{friend}}</div><br/> {{user.groupmember}} ",
    restrict:"E"  //If you want element than E if attribute than A c:class, Ecomment
    
    }
})
    app.directive('userInfo', function(){
    return{
    //template:"User Info",
    template:"websites: {{websitestolearnsoftwares.webites}}",
    restrict:"E"  //If you want element than E if attribute than A c:class, Ecomment
    
    }
})

