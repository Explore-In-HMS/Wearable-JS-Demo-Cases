import router from '@system.router'

export default {
<<<<<<< HEAD
    startDistributedStart() {
=======

    startDistributedStart(){
>>>>>>> 6bbe7efc8cc755ae6b4f5ce0b883c39d8a676ff1
        router.push({
            uri: 'pages/distributedStart/distributedStart'
        });
    },
<<<<<<< HEAD
    startDistributedMigration() {
=======
    startDistributedMigration(){
>>>>>>> 6bbe7efc8cc755ae6b4f5ce0b883c39d8a676ff1
        router.push({
            uri: 'pages/distributedMigration/distributedMigration'
        });
    },
<<<<<<< HEAD
    touchMove(e) { // Handle the swipe event.

        if (e.direction == "right") // Swipe right to exit.
=======
    touchMove(e) {  // Handle the swipe event.

        if(e.direction == "right")  // Swipe right to exit.
>>>>>>> 6bbe7efc8cc755ae6b4f5ce0b883c39d8a676ff1
        {
            router.replace({
                uri: 'pages/index/index'
            })
        }
    }
}
