angular
.module('firstApplication', ['ngMaterial','ngMessages'])
.controller('dateController', dateController);

	function dateController ($scope) {
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
	}
	$scope.teams = [
	{id: 1,label: 'A'},
	{id: 2,label: 'B'},
	{id: 3,label: 'C'},
	{id: 4,label: 'D'},
	{id: 5,label: 'E'}];
}                 
