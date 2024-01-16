function speed(kmph){
    if(kmph < 70){
        console.log('Okay')
    } else if (kmph > 70){
        let count = 0;
        count = kmph - 70;
        if(count <= 5){
            console.log('points:2')
        } else if (count > 30){
            console.log('Lisence suspended')
        }
    }
}
speed(250)