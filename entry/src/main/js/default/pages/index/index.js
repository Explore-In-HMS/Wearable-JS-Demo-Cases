import app from '@system.app';
import router from '@system.router'

export default {
    touchMove(e) { // Handle the swipe event.
        if (e.direction == "right") { // Swipe right to exit.
            this.appExit();
        }
    },
    startSystemCapabilities() {
        router.push({
            uri: 'pages/systemcapabilities/systemcapabilities'
        });
    },
    startBasicFeatures() {
        router.push({
            uri: 'pages/basicFeatures/basicFeatures'
        });
    },
    startFileData() {
        router.push({
            uri: 'pages/fileData/fileData'
        });
    },
    startNetworkAccess() {
        router.push({
            uri: 'pages/networkAccess/networkAccess'
        });
    },
<<<<<<< HEAD
    startDistributedCapability() {
        router.push({
            uri: 'pages/distributedCapability/distributedCapability'
        });
    },
    appExit() { // Exit the application.
=======
    startDistributedCapability(){
    router.push({
            uri: 'pages/distributedCapability/distributedCapability'
        });
    },
    appExit(){  // Exit the application.
>>>>>>> 6bbe7efc8cc755ae6b4f5ce0b883c39d8a676ff1
        app.terminate();
    }
}