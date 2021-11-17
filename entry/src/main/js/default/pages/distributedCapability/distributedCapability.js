import router from '@system.router'

export default {
    startDistributedStart() {
        router.push({
            uri: 'pages/distributedStart/distributedStart'
        });
    },
    startDistributedMigration() {
        router.push({
            uri: 'pages/distributedMigration/distributedMigration'
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
