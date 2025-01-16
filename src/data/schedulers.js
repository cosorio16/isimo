//create schedulers
fetch("http://192.168.0.174/scada-vis/schedulers/vis-request", {
  headers: {
    accept: "application/json, text/javascript, */*; q=0.01",
    "accept-language": "es-419,es;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    cookie:
      "user_language=; x-login=1; x-auth=admin:9948d8b065fb42b1cf3b4167693f832c55e6501d5c1806c08f9d950c7fbe8d29",
    Referer: "http://192.168.0.174/scada-vis/schedulers",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: "data=%7B%22active%22%3Atrue%2C%22name%22%3A%22On%22%2C%22type%22%3A%22%22%2C%22start_hour%22%3A11%2C%22start_min%22%3A30%2C%22offset_hour%22%3A0%2C%22offset_min%22%3A0%2C%22year%22%3A0%2C%22start_year%22%3A%222025%22%2C%22holidays%22%3A%22%22%2C%22scheduler%22%3A%221%22%2C%22id%22%3A%220%22%2C%22months%22%3A%22111111111111%22%2C%22daysofmonth%22%3A%221111111111111111111111111111111%22%2C%22daysofweek%22%3A%221111111%22%2C%22dayweeknrs%22%3A%22111111%22%2C%22value%22%3A%221%22%2C%22action%22%3A%22event-save%22%7D",
  method: "POST",
});

let body1 = {
  active: true,
  name: "On",
  type: "",
  start_hour: 11,
  start_min: 30,
  offset_hour: 0,
  offset_min: 0,
  year: 0,
  start_year: "2025",
  holidays: "",
  scheduler: "1",
  id: "0",
  months: "111111111111",
  daysofmonth: "1111111111111111111111111111111",
  daysofweek: "1111111",
  dayweeknrs: "111111",
  value: "1",
  action: "event-save",
};

//other created

let body12 = {
  active: true,
  name: "off",
  type: "",
  start_hour: 11,
  start_min: 33,
  offset_hour: 0,
  offset_min: 0,
  year: 0,
  start_year: "2025",
  holidays: "",
  scheduler: "1",
  id: "0",
  months: "111111111111",
  daysofmonth: "1111111111111111111111111111111",
  daysofweek: "1111111",
  dayweeknrs: "111111",
  value: "0",
  action: "event-save",
};

//without name

let body13 = {
  active: true,
  name: "",
  type: "",
  start_hour: 11,
  start_min: 34,
  offset_hour: 0,
  offset_min: 0,
  year: 0,
  start_year: "2025",
  holidays: "",
  scheduler: "1",
  id: "0",
  months: "111111111111",
  daysofmonth: "1111111111111111111111111111111",
  daysofweek: "1111111",
  dayweeknrs: "111111",
  value: "1",
  action: "event-save",
};

//read schedulers

fetch("http://192.168.0.174/scada-vis/schedulers/vis-request", {
  headers: {
    accept: "application/json, text/javascript, */*; q=0.01",
    "accept-language": "es-419,es;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    cookie:
      "user_language=; x-login=1; x-auth=admin:9948d8b065fb42b1cf3b4167693f832c55e6501d5c1806c08f9d950c7fbe8d29",
    Referer: "http://192.168.0.174/scada-vis/schedulers",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: "data=%7B%22action%22%3A%22scheduler%22%2C%22id%22%3A1%7D",
  method: "POST",
});

let body2 = { action: "scheduler", id: 1 };

let response = {
  object: 1,
  active: 1,
  events: [
    {
      holidays: "",
      active: 1,
      offset_min: 0,
      offset_hour: 0,
      months: "111111111111",
      year: 0,
      daysofweek: "1111111",
      start_min: 37,
      start_hour: 11,
      dayweeknrs: "111111",
      daysofmonth: "1111111111111111111111111111111",
      value: "1",
      type: "",
      id: 1,
      name: "on",
      scheduler: 1,
    },
    {
      holidays: "",
      active: 1,
      offset_min: 0,
      offset_hour: 0,
      months: "111111111111",
      year: 0,
      daysofweek: "1111111",
      start_min: 38,
      start_hour: 11,
      dayweeknrs: "111111",
      daysofmonth: "1111111111111111111111111111111",
      value: "0",
      type: "",
      id: 2,
      name: "off",
      scheduler: 1,
    },
    {
      holidays: "",
      active: 1,
      offset_min: 0,
      offset_hour: 0,
      months: "111111111111",
      year: 0,
      daysofweek: "1111111",
      start_min: 0,
      start_hour: 12,
      dayweeknrs: "111111",
      daysofmonth: "1111111111111111111111111111111",
      value: "0",
      type: "",
      id: 3,
      name: "",
      scheduler: 1,
    },
  ],
  id: 1,
  category: "",
  end_day: 31,
  sortorder: 1,
  datatype: 1,
  units: "",
  controlobject: 0,
  start_day: 1,
  start_month: 1,
  name: "Test",
  end_month: 12,
};

//delete schedulers

fetch("http://192.168.0.174/scada-vis/schedulers/vis-request", {
  headers: {
    accept: "application/json, text/javascript, */*; q=0.01",
    "accept-language": "es-419,es;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    cookie:
      "user_language=; x-login=1; x-auth=admin:9948d8b065fb42b1cf3b4167693f832c55e6501d5c1806c08f9d950c7fbe8d29",
    Referer: "http://192.168.0.174/scada-vis/schedulers",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: "data=%7B%22action%22%3A%22event-delete%22%2C%22id%22%3A3%7D",
  method: "POST",
});

let body3 = { action: "event-delete", id: 3 };

//update schedulers

fetch("http://192.168.0.174/scada-vis/schedulers/vis-request", {
  headers: {
    accept: "application/json, text/javascript, */*; q=0.01",
    "accept-language": "es-419,es;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    cookie:
      "user_language=; x-login=1; x-auth=admin:9948d8b065fb42b1cf3b4167693f832c55e6501d5c1806c08f9d950c7fbe8d29",
    Referer: "http://192.168.0.174/scada-vis/schedulers",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: "data=%7B%22active%22%3Atrue%2C%22name%22%3A%22On%22%2C%22type%22%3A%22%22%2C%22start_hour%22%3A11%2C%22start_min%22%3A37%2C%22offset_hour%22%3A0%2C%22offset_min%22%3A0%2C%22year%22%3A0%2C%22start_year%22%3A%222025%22%2C%22holidays%22%3A%22%22%2C%22scheduler%22%3A%22%22%2C%22id%22%3A%221%22%2C%22months%22%3A%22111111111111%22%2C%22daysofmonth%22%3A%221111111111111111111111111111111%22%2C%22daysofweek%22%3A%221111111%22%2C%22dayweeknrs%22%3A%22111111%22%2C%22value%22%3A%221%22%2C%22action%22%3A%22event-save%22%7D",
  method: "POST",
});

let body4 = {
  active: true,
  name: "On",
  type: "",
  start_hour: 11,
  start_min: 37,
  offset_hour: 0,
  offset_min: 0,
  year: 0,
  start_year: "2025",
  holidays: "",
  scheduler: "",
  id: "1",
  months: "111111111111",
  daysofmonth: "1111111111111111111111111111111",
  daysofweek: "1111111",
  dayweeknrs: "111111",
  value: "1",
  action: "event-save",
};
