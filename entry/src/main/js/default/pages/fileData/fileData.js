import app from '@system.app';
import router from '@system.router'

export default {

    startdataStorage(){
        router.push({
            uri: 'pages/dataStorage/dataStorage'
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
