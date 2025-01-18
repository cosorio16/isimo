// create trends

fetch("http://192.168.0.210/scada-main/trends/save", {
  headers: {
    accept: "*/*",
    "accept-language": "es-419,es;q=0.9",
    "content-type": "text/plain;charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    cookie:
      "user_language=; x-login=1; x-session=admin:20CE709F617CF82B1A9C35FD3F5839AB",
    Referer: "http://192.168.0.210/scada-main",
    "Referrer-Policy": "same-origin",
  },
  body: "data=%7B%22object%22%3A%222049%22%2C%22name%22%3A%22Luz%20Entrada%22%2C%22category%22%3A%22%22%2C%22type%22%3A%22G%22%2C%22aggregation%22%3A%22LAST%22%2C%22resolution%22%3A%225%22%2C%22precision%22%3A%221%22%2C%22count_resolution%22%3A%22525600%22%2C%22count_daily%22%3A%223650%22%2C%22id%22%3A%22%22%7D",
  method: "POST",
});

let body = {
  object: "2049",
  name: "Luz Entrada",
  category: "",
  type: "G",
  aggregation: "LAST",
  resolution: "5",
  precision: "1",
  count_resolution: "525600",
  count_daily: "3650",
  id: "",
};

//delete


