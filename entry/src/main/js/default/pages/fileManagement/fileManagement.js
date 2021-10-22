import router from '@system.router'
import file from '@system.file';
import prompt from '@system.prompt';

export default {
    data: {
        fileName: 'testFile'
    },
    moveFile(){

    },
    copyFile(){

    },
    getFile(){

    },
    deleteFile(){

    },
    writeText(){

    },
    readText(){

    },
    writeArrayBuffer(){

    },
    readArrayBuffer(){

    },
    accessFile(){
        file.access({
            uri: 'internal://app/testFileDirectory/testFile.txt',
            success: function() {
                console.log('call access success.');
                prompt.showToast({
                    message: 'Success',
                    duration: 3000,
                });
            },
            fail: function(data, code) {
                console.error('call fail callback fail, code: ' + code + ', data: ' + data);
                prompt.showToast({
                    message: data,
                    duration: 3000,
                });
            },
        });
    },
    createDirectory(){

    },
    deleteDirectory(){

    },
    touchMove(e) {  // Handle the swipe event.

        if(e.direction == "right")  // Swipe right to exit.
        {
            router.replace({
                uri: 'pages/fileData/fileData'
            })
        }
    }
}