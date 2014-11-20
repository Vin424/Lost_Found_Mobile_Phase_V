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
            updateItem:updateItem,
            uploadPic:uploadPic,
            get10Items:get10Items,
            get10LostItems:get10LostItems,
            get10FoundItems:get10FoundItems,
            getUserEmail: getUserEmail,
            postItemUpdate2:postItemUpdate2,
            postItem2:postItem2





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

        function uploadPic(fileContent, name){
            return $http.post('/base64/'+ name,{
            base64: fileContent
        });
         };

        function postItem(newItem){
            var data = newItem;
            console.log(newItem);
            //return $http.post('http://localhost:3000/postItem/', data);
            return $http.post('http://136.145.116.235:3000/postItem/', data);
        };
        function postItem2(newItem){
            var data = newItem;
            console.log(newItem);
            return $http.post('http://136.145.116.235:3000/postItem2/', data);
        };
        function postItemUpdate2(newItem){
            var data = newItem;
            console.log(newItem);
            return $http.post('http://136.145.116.235:3000/postItemUpdate2/', data);
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
        function addSeen(id){
            var data = {id:id};
            return $http.post('http://136.145.116.235:3000/addSeen/',data);
        };

        function get10Items(offset){
            return $http.get('http://136.145.116.235:3000/get10Items/'+offset);
        };

        function get10LostItems(offset){
            return $http.get('http://136.145.116.235:3000/get10LostItems/'+offset);
        };

        function get10FoundItems(offset){
            return $http.get('http://136.145.116.235:3000/get10FoundItems/'+offset);
        };
        function updateUser(user){
            var data = user;
            return $http.post('http://136.145.116.235:3000/updateUser/',data);
        };

        function getUserEmail (email){
            return $http.get('http://136.145.116.235:3000/getUserEmail/' + email);
        };






    }


}

)();

