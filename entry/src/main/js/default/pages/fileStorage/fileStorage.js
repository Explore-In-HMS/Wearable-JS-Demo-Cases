import router from '@system.router'
import file from '@system.file';
import prompt from '@system.prompt';

export default {
    data: {
        fileName: 'testFile',
        accessResponse: false,
        ss: 'internal://app/testFileDirectory/testFile.txt'
    },
    moveFile() {
        file.move({
            srcUri: 'internal://app/file/test.txt',
            dstUri: 'internal://app/file/test1.txt',
            success: function (uri) {
                prompt.showToast({
                    message: 'Move Test file to Test1 file.',
                    duration: 1000,
                });
                console.log('call move success');
            },
            fail: function (data, code) {
                prompt.showToast({
                    message: data,
                    duration: 1000,
                });
                console.error('call fail callback fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    copyFile() {
        file.copy({
            srcUri: 'internal://app/file/test.txt',
            dstUri: 'internal://app/file/test1.txt',
            success: function (uri) {
                prompt.showToast({
                    message: 'Copy Test file to Test1 file.',
                    duration: 1000,
                });
                console.log('call copy success');
            },
            fail: function (data, code) {
                prompt.showToast({
                    message: data,
                    duration: 1000,
                });
                console.error('call fail callback fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    listFile() {
        file.list({
            uri: 'internal://app/file',
            success: function (data) {
                prompt.showToast({
                    message: 'Internal File list:' + 'Uri: ' + data.fileList[0].uri + ' LastModifiedTime: ' + data.fileList[0].lastModifiedTime +
                    ' Length: ' + data.fileList[0].length + ' Type: ' + data.fileList[0].type,
                    duration: 1000,
                });
                console.log('Internal File list:' + 'Uri: ' + data.fileList[0].uri + ' LastModifiedTime: ' + data.fileList[0].lastModifiedTime +
                ' Length: ' + data.fileList[0].length + ' Type: ' + data.fileList[0].type);
            },
            fail: function (data, code) {
                prompt.showToast({
                    message: data,
                    duration: 1000,
                });
                console.error('call fail callback fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    getFile() {
        file.get({
            uri: 'internal://app/file/test.txt',
            success: function (data) {
                prompt.showToast({
                    message: 'Test.txt file size: ' + data.length + 'byte',
                    duration: 1000,
                });
                console.log(data.uri);
            },
            fail: function (data, code) {
                prompt.showToast({
                    message: data,
                    duration: 1000,
                });
                console.error('call fail callback fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    deleteFile() {
        file.delete({
            uri: 'internal://app/file/test.txt',
            success: function () {
                prompt.showToast({
                    message: 'Deleted Test.txt file',
                    duration: 1000,
                });
                console.log('call delete success.');
            },
            fail: function (data, code) {
                prompt.showToast({
                    message: data,
                    duration: 1000,
                });
                console.error('call fail callback fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    writeText() {
        file.writeText({
            uri: 'internal://app/file/test.txt',
            text: 'Text that just for test.',
            success: function () {
                prompt.showToast({
                    message: 'Writed data to Test.txt file',
                    duration: 1000,
                });
                console.log('call writeText success.');
            },
            fail: function (data, code) {
                prompt.showToast({
                    message: data,
                    duration: 1000,
                });
                console.error('call fail callback fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    readText() {
        file.readText({
            uri: 'internal://app/file/test.txt',
            success: function (data) {
                prompt.showToast({
                    message: 'Test.txt = ' + data.text,
                    duration: 1000,
                });
                console.log('call readText success: ' + data.text);
            },
            fail: function (data, code) {
                prompt.showToast({
                    message: data,
                    duration: 1000,
                });
                console.error('call fail callback fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    writeArrayBuffer() {
        file.writeArrayBuffer({
            uri: 'internal://app/file/test.txt',
            buffer: new Uint8Array(2), // The buffer is of the Uint8Array type.
            success: function () {
                prompt.showToast({
                    message: 'WriteArrayBuffer "File/Test.txt" file',
                    duration: 1000,
                });
                console.log('call writeArrayBuffer success.');
            },
            fail: function (data, code) {
                prompt.showToast({
                    message: data,
                    duration: 1000,
                });
                console.error('call fail callback fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    readArrayBuffer() {
        file.readArrayBuffer({
            uri: 'internal://app/file/test.txt',
            position: 10,
            length: 200,
            success: function (data) {
                prompt.showToast({
                    message: 'ReadArrayBuffer "File/Test.txt" file',
                    duration: 1000,
                });
                console.log('call readArrayBuffer success: ' + data.buffer);
            },
            fail: function (data, code) {
                prompt.showToast({
                    message: data,
                    duration: 1000,
                });
                console.error('call fail callback fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    accessFile() {
        file.access({
            uri: 'internal://app/file/test.txt',
            success: function () {
                prompt.showToast({
                    message: 'Access "File/Test.txt" file',
                    duration: 1000,
                });
                console.log('call access success.');
            },
            fail: function (data, code) {
                prompt.showToast({
                    message: data,
                    duration: 1000,
                });
                console.error('call fail callback fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    createDirectory() {
        file.mkdir({
            uri: 'internal://app/file',
            success: function () {
                prompt.showToast({
                    message: '"File" Directory Created.',
                    duration: 1000,
                });
                console.log('call mkdir success.');
            },
            fail: function (data, code) {
                prompt.showToast({
                    message: data,
                    duration: 1000,
                });
                console.error('call fail callback fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    deleteDirectory() {
        file.rmdir({
            uri: 'internal://app/file',
            recursive: true,
            success: function () {
                prompt.showToast({
                    message: '"File" Directory Deleted.',
                    duration: 1000,
                });
                console.log('call rmdir success.');
            },
            fail: function (data, code) {
                prompt.showToast({
                    message: data,
                    duration: 1000,
                });
                console.error('call fail callback fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    touchMove(e) { // Handle the swipe event.

        if (e.direction == "right") // Swipe right to exit.
        {
            router.replace({
                uri: 'pages/fileData/fileData'
            })
        }
    }
}