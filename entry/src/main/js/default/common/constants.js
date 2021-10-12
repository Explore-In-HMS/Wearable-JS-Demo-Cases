 export const dateFormat = new Intl.DateTimeFormat("en-US", {
    hour12:true,
    weekday : 'long',
    year : 'numeric',
    month : 'long',
    day : 'numeric',
    hour : '2-digit',
    minute : '2-digit',
    second : '2-digit',
});
 export const numberFormat = new Intl.NumberFormat('zh-CN', {
     style:'decimal',
     usegrouping:true,
     maximumFractionDigits:4,
     mininumFractionDigits:2,
 });