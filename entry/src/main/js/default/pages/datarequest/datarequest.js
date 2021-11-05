import fetch from '@system.fetch'
import router from '@system.router'
import prompt from '@system.prompt';

export default {
    data: {
        id: '--',
        name: '--',
        userName: '--',
        email: '--',
        finalData: 'NA',
        url: "https://jsonplaceholder.typicode.com/users",
    },
    onInit(){
        this.fetch();
    },
    getRandomUser(){
        var _this = this;
        let i = Math.floor(Math.random()*10)

        _this.id = _this.finalData[i]['id'];
        _this.name = _this.finalData[i]['name'];
        _this.userName = _this.finalData[i]['username'];
        _this.email = _this.finalData[i]['email'];
    },
    fetch: function () {
        var _this = this;
        fetch.fetch({
            url: _this.url,
            method: 'GET',
            success: function (response) {
                var stringData = JSON.stringify(response.data);
                var parseData = JSON.parse(stringData);
                _this.finalData = JSON.parse(parseData);

                let i = Math.floor(Math.random()*10)

                _this.id = _this.finalData[i]['id'];
                _this.name = _this.finalData[i]['name'];
                _this.userName = _this.finalData[i]['username'];
                _this.email = _this.finalData[i]['email'];

                console.log("fetch1: " + stringData);
                console.log("fetch2: " + _this.finalData[0]['id']);

            },
            fail: function (data) {
                console.log("fetch fail" + data);

            },
            complete: function () {
                prompt.showToast({
                    message: 'Fetch Completed, Please test it',
                    duration: 1500,
                });
            }
        });
    },
    touchMove(e) {
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/networkAccess/networkAccess'
            });
        }
    }
}
