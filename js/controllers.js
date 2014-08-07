var myApp = angular.module('myApp', []);

myApp.controller('myController', function myController($scope) {
  $scope.players = [
    { 'rank' : '10',
      'name' : 'Ersan Ilyasova',
      'image' : 'ersan',
      'team' : 'Milwaukee Bucks',
      'position' : 'SF/PF',
      'age' : '27',
      'stats' : '11.2 points, 6.2 rebounds, 1.3 assists, 0.8 steals, 0.1 blocks, 13.8 PER'
    },
    { 'rank' : '9',
      'name' : 'Eric Gordon',
      'image' : 'eric',
      'team' : 'New Orleans Pelicans',
      'position' : 'SG',
      'age' : '25',
      'stats' : '15.4 points, 2.6 rebounds, 3.3 assists, 1.2 steals, 0.2 blocks, 14.9 PER'
    },
    { 'rank' : '8',
      'name' : 'David West',
      'image' : 'david',
      'team' : 'Indiana Pacers',
      'position' : 'PF',
      'age' : '33',
      'stats' : '14.0 points, 6.8 rebounds, 2.8 assists, 0.8 steals, 0.9 blocks, 17.5 PER'
    },
    { 'rank' : '7',
      'name' : 'Thaddeus Young',
      'image' : 'thaddeus',
      'team' : 'Philadelphia 76ers',
      'position' : 'SF/PF',
      'age' : '26',
      'stats' : '17.9 points, 6.0 rebounds, 2.3 assists, 2.1 steals, 0.5 blocks, 16.6 PER'
    },
    { 'rank' : '6',
      'name' : 'Roy Hibbert',
      'image' : 'roy',
      'team' : 'Indiana Pacers',
      'position' : 'C',
      'age' : '27',
      'stats' : '10.8 points, 6.6 rebounds, 1.1 assists, 0.4 steals, 2.2 blocks, 13.5 PER'
    },
    { 'rank' : '5',
      'name' : 'Josh Smith',
      'image' : 'josh',
      'team' : 'Detroit Pistons',
      'position' : 'PF',
      'age' : '28',
      'stats' : '16.4 points, 6.8 rebounds, 3.3 assists, 1.4 steals, 1.4 blocks, 14.1 PER'
    },
    { 'rank' : '4',
      'name' : 'Greg Monroe',
      'image' : 'greg',
      'team' : 'Detroit Pistons',
      'position' : 'PF/C',
      'age' : '24',
      'stats' : '15.2 points, 9.3 rebounds, 2.1 assists, 1.1 steals, 0.6 blocks, 18.1 PER'
    },
    { 'rank' : '3',
      'name' : 'Eric Bledsoe',
      'image' : 'eric',
      'team' : 'Phoenix Suns',
      'position' : 'PG',
      'age' : '24',
      'stats' : '17.7 points, 4.7 rebounds, 5.5 assists, 1.6 steals, 0.3 blocks, 19.6 PER'
    },
    { 'rank' : '2',
      'name' : 'Rajon Rondo',
      'image' : 'rajon',
      'team' : 'Boston Celtics',
      'position' : 'PG',
      'age' : '28',
      'stats' : '11.7 points, 5.5 rebounds, 9.8 assists,  1.3 steals, 0.1 blocks, 15.3 PER'
    },
    { 'rank' : '1',
      'name' : 'Kevin Love',
      'image' : 'kevin',
      'team' : 'Minnesota Timberwolves (pre-trade!)',
      'position' : 'PF',
      'age' : '25',
      'stats' : '26.1 points, 12.5 rebounds, 4.4 assists, 0.8 steals, 0.5 blocks, 26.9 PER'
    },
  ];
});

