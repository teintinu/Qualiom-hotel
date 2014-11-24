function controller($scope)
{
    $scope.usuario = {nome:"Ramon"};
    $scope.add1 = function(){
        $scope.cont++;
    }
    $scope.cont = 0;
    $scope.zeraCont = function(){
        $scope.cont = 0;
    }
    $scope.quadrado = function(){
        $scope.cont = $scope.cont*$scope.cont;
    }
    $scope.quartos =['quarto 1','quarto 2','quarto 3'];
}

