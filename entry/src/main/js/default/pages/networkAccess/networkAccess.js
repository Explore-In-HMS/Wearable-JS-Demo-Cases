import router from '@system.router'

export default {

    startdatarequest(){
        router.push({
            uri: 'pages/datarequest/datarequest'
        });
    },
    touchMove(e) {  // Handle the swipe event.

        if(e.direction == "right")  // Swipe right to exit.
        {
            router.replace({
                uri: 'pages/index/index'
            })
        }
    }
}