(function () {
 'use strict';

 var serviceId = 'restApi';

   // TODO: replace app with your module name
   angular.module('LostFound').factory(serviceId, ['$http', addrestApi]);

    function addrestApi($http) {
        var service = {
            getUsers:getUsers,
            getItems:getItems,
            getItemId:getItemId,
            getLostItems:getLostItems,
            getFoundItems:getFoundItems,
            getComments:getComments,
            postUser:postUser,
            postComment:postComment,
            postFeedback:postFeedback,
            postItem:postItem,
            putThumbsdown:putThumbsdown,
            getMyPosts:getMyPosts,
            postItemPic:postItemPic,
            getAuth:getAuth,
            updateUser:updateUser,
            updateItem:updateItem





        };


        return service;

        function postItemPic(image){
            return $http.post('/http://136.145.116.235:3000upload',image,{
                headers: { 'Content-Type': false },
                transformRequest: angular.identity
            });
        };


        function getUsers(){

            return $http.get('http://136.145.116.235:3000/allUsers');
        };


        function getItems(){
            return $http.get('http://136.145.116.235:3000/allItems');
        };


        function getItemId(id){
            return $http.get('http://136.145.116.235:3000/itemId/' + id );
        };

        function getLostItems(){
            return $http.get('http://136.145.116.235:3000/allLostItems');
        };

        function getFoundItems(){
            return $http.get('http://136.145.116.235:3000/allFoundItems');
        };

        function getComments(id){
            return $http.get('http://136.145.116.235:3000/allComments/'+id);
        };


        function postUser(newUser){
            var data= newUser;
            return $http.post('http://136.145.116.235:3000/newUser/',data);
        };

        function postComment(comment){
            var data= comment;
            return $http.post('http://136.145.116.235:3000/addComment/',data);
        };
        function postFeedback(feedback){
            var data= feedback;
            return $http.post('http://136.145.116.235:3000/addFeedback/',data);
        };


        function postItem(newItem){
            var data = newItem;
            console.log(newItem);
            //return $http.post('http://localhost:3000/postItem/', data);
            return $http.post('http://136.145.116.235:3000/postItem/', data);
        };
        function getAuth(credentials){
            var data = credentials;
            return $http.get('http://136.145.116.235:3000/getAuth/', data);
        };

        function putThumbsdown(id){
            var data = {id:id};
            return $http.post('http://136.145.116.235:3000/putThumbsdown/',data);
        };

        function getMyPosts(cred){

            return $http.get('http://136.145.116.235:3000/myPostsItems/'+cred.myemail+'/'+cred.mykey);
        };


        function updateUser(user){
            var data = user;
            return $http.post('http://136.145.116.235:3000/updateUser/',data);
        };

        function updateItem(item){
            var data = item;
            return $http.post('http://136.145.116.235:3000/updateItem/',data);
        };


    }


}

)();

