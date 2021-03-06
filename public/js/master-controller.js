angular
.module('firstApplication', ['ngMaterial','ngMessages'])
.controller('dateController', ['$http', '$scope',dateController]);

	function dateController ($http, $scope) {
		console.log("Helloooo");
	$scope.myDate = new Date();
	$scope.minDate = new Date(
	   $scope.myDate.getFullYear(),
	   $scope.myDate.getMonth() - 2,
	   $scope.myDate.getDate());
	$scope.maxDate = new Date(
	   $scope.myDate.getFullYear(),
	   $scope.myDate.getMonth() + 2,
	   $scope.myDate.getDate());
	$scope.onlyWeekendsPredicate = function(date) {
	   var day = date.getDay();
	   return day === 0 || day === 6;
	};
	$scope.teams = [
	{id: 1,label: 'A'},
	{id: 2,label: 'B'},
	{id: 3,label: 'C'},
	{id: 4,label: 'D'},
	{id: 5,label: 'E'},
	{id: 6,label: 'F'},
	{id: 7,label: 'G'},
	{id: 8,label: 'H'},
	{id: 9,label: 'I'},
	{id: 10,label: 'J'}	
	];
    $scope.getTableData = function(){
      $http.get("http://localhost:3000/getTableData")
      .then(function (response) {
      	$scope.tableData = response.data;});
    };
}                 
