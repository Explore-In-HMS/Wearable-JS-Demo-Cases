import app from '@system.app';
import router from '@system.router'

export default {

    touchMove(e){  // Handle the swipe event.
        if(e.direction == "right") { // Swipe right to exit.
            this.appExit();
        }
    },
    startSystemCapabilities(){
     router.push({
            uri: 'pages/systemcapabilities/systemcapabilities'
        });
    },
    startBasicFeatures(){
        router.push({
            uri: 'pages/basicFeatures/basicFeatures'
        });
    },
    startFileData(){
        router.push({
            uri: 'pages/fileData/fileData'
        });
    },
    startNetworkAccess(){
        router.push({
            uri: 'pages/networkAccess/networkAccess'
        });
    },
    appExit(){  // Exit the application.
        app.terminate();
    }
}

