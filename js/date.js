/**
 * Created by sam on 5/18/16.
 */
Date.prototype.format = function(format) {
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}

function isSameDay(time1, time2) {
    var tf = true;
    var date1 = new Date();
    var date2 = new Date();
    date1.setTime(time1 * 1000);
    date2.setTime(time2 * 1000);
    if (date1.getDay() != date2.getDay() || date1.getMonth() != date2.getMonth() || date1.getYear() != date2.getYear()) {
        tf = false;
    }
    return tf;
}