import moment from "moment"

//去除文章时间中的T
export function dateTFormat(input) {
  if (input.indexOf("T")!= -1) {
    input=input.replace('T'," ")
  }
  return input
}


//时间格式化
export function dateFormat(input, format) {
  format = format || "YYYY-MM-DD HH:mm:ss";
  const foramtKey = {
    YM: "YYYY-MM",
    L: "MM-DD",
    LL: "YYYY-MM-DD",
    LLL: "YYYY-MM-DD HH:mm",
    LLLL: "YYYY-MM-DD HH:mm:ss",
    LLLLSS: "YYYY-MM-DD HH:mm:ss SS",
    T: "HH:mm",
    TT: "HH:mm:ss",
    LT: "MM-DD HH:mm"
  }
  format=foramtKey[format]
  const date=moment(input,'YYYYMMDDHHmmssSS')
  if (date.isValid()) {
    input = date.format(format)
  }else{
    input = "-"
  }
  return input
}
