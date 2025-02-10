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

//all trends
fetch("http://192.168.0.210/scada-main/trends/main", {
  headers: {
    accept: "*/*",
    "accept-language":
      "es,es-ES;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,es-CO;q=0.5",
    "x-requested-with": "XMLHttpRequest",
    cookie:
      "user_language=; x-login=1; x-session=admin:8AAFD9EC5F585C866ADE6DE589BE20CB",
    Referer: "http://192.168.0.210/scada-main/",
    "Referrer-Policy": "same-origin",
  },
  body: null,
  method: "GET",
});



// get trend

fetch("http://192.168.0.210/scada-vis/trends/fetch", {
  headers: {
    accept: "application/json, text/javascript, */*; q=0.01",
    "accept-language":
      "es,es-ES;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,es-CO;q=0.5",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    cookie:
      "user_language=; x-login=1; x-session=admin:8AAFD9EC5F585C866ADE6DE589BE20CB",
    Referer: "http://192.168.0.210/scada-vis/trends",
    "Referrer-Policy": "same-origin",
  },
  body: "data=%7B%22dates_curr%22%3A%7B%22start%22%3A%7B%22year%22%3A2025%2C%22day%22%3A30%2C%22month%22%3A1%7D%2C%22end%22%3A%7B%22year%22%3A2025%2C%22day%22%3A31%2C%22month%22%3A1%7D%7D%2C%22id%22%3A2%2C%22dates_prev%22%3A%7B%22start%22%3A%7B%22year%22%3A2025%2C%22day%22%3A30%2C%22month%22%3A1%7D%2C%22end%22%3A%7B%22year%22%3A2025%2C%22day%22%3A31%2C%22month%22%3A1%7D%7D%7D",
  method: "POST",
});

let body = {
  resolution: 86400,
  dates_curr: {
    start: { year: 2025, day: 1, month: 1 },
    end: { year: 2025, day: 1, month: 3 },
  },
  id: 2,
  dates_prev: {
    start: { year: 2025, day: 1, month: 1 },
    end: { year: 2025, day: 1, month: 3 },
  },
};
