import router from '@system.router'

export default {

    startDataStorage(){
        router.push({
            uri: 'pages/dataStorage/dataStorage'
        });
    },
    startFileManagement(){
        router.push({
            uri: 'pages/fileManagement/fileManagement'
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
