import fetch from '@system.fetch'
import router from '@system.router'

export default {
    data: {
        responseData: '--',
        url: "https://www.huawei.com/en/?ic_medium=direct&ic_source=surlent",
    },
    fetch: function () {
        var _this = this;
        fetch.fetch({
            url: _this.url,
            success: function () {
                console.log("fetch success");
                _this.responseData = "yes";

            },
            fail: function () {
                console.log("fetch fail");
                _this.responseData = "fail";
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
