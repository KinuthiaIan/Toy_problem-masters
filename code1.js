function grade(marks){
    if(marks > 79){
        console.log('A .'+ 'Good job!')
    } else if (marks > 60 && marks < 79){
        console.log('B .' + 'Keep it up!')
    } else if (marks > 49 && marks < 59){
        console.log('C .' + 'Try harder')
    } else if (marks > 40 && marks < 49){
        console.log('D.' + 'Pull up your socks!')
    } else {
        console.log('E.' + 'Stop Joking')
    }
}

grade(78)