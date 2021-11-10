import storage from '@system.storage';

export default {
    data: {
        words: [
                "Huawei",
                "Wearable",
                "Demo",
                "Application",
                "Development"
        ],
        randomWord: '--',
        word: '--'
    },
    onInit() {
        this.getRandomWord();
    },
    getRandomWord() {
        let i = Math.floor(Math.random() * 5)
        this.randomWord = this.words[i]
    },
    getValue() {
        var _this = this;
        storage.get({
            key: 'storage_key',
            success: function (data) {
                console.log('call storage.get success: ' + data);
                _this.word = data;
            },
            fail: function (data, code) {
                console.log('call storage.get fail, code: ' + code + ', data: ' + data);
            },
            complete: function () {
                console.log('call complete');
            },
        });
    },
    setValue() {
        storage.set({
            key: 'storage_key',
            value: this.randomWord,
            success: function () {
                console.log('call storage.set success.');
            },
            fail: function (data, code) {
                console.log('call storage.set fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    clearValue() {
        storage.clear({
            success: function () {
                console.log('call storage.clear success.');
            },
            fail: function (data, code) {
                console.log('call storage.clear fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    deleteValue() {
        storage.delete({
            key: 'storage_key',
            success: function () {
                console.log('call storage.delete success.');
            },
            fail: function (data, code) {
                console.log('call storage.delete fail, code: ' + code + ', data: ' + data);
            },
        });
    }
}
