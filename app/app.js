angular.module('blog', []).controller('blogController', blogController);

function blogController($scope) {
    $scope.tytul = "Blog - Meganka";

    $scope.posty = [
        "To jest mój pierwszy Post!",
        "To jest mój drugi Post o moim cudownym samochodzie!",
        "To jest kolejny post dodany juz z javascriptu"
    ];

    $scope.addPost = function(nowyPost) {
      $scope.posty.push(nowyPost);
        $scope.nowyPost = "";
    };

}

