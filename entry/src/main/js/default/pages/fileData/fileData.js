import router from '@system.router'

export default {
    startDataStorage() {
        router.push({
            uri: 'pages/dataStorage/dataStorage'
        });
    },
    startFileStorage() {
        router.push({
            uri: 'pages/fileStorage/fileStorage'
        });
    },
    touchMove(e) { // Handle the swipe event.

        if (e.direction == "right") // Swipe right to exit.
        {
            router.replace({
                uri: 'pages/index/index'
            })
        }
    }
}
