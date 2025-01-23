export async function getAllSchedulers() {
  let data = { action: "schedulers", levels: true };
  let body = `data=${encodeURIComponent(JSON.stringify(data))}`;

  try {
    const response = await fetch(
      `${window.location.origin}/scada-vis/schedulers/vis-request`,
      {
        method: "POST",
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language": "es-419,es;q=0.9",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "x-requested-with": "XMLHttpRequest",
          cookie:
            "user_language=; x-login=1; x-auth=admin:9948d8b065fb42b1cf3b4167693f832c55e6501d5c1806c08f9d950c7fbe8d29",
          Referer: `${window.location.origin}/scada-vis/schedulers`,
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: body,
      }
    );

    if (!response) {
      throw new Error(`Error al obtener horarios: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al hacer el fetch: ${error}`);
  }
}

export async function getEvents(id) {
  let data = { action: "scheduler", id: id };
  let body = `data=${encodeURIComponent(JSON.stringify(data))}`;

  try {
    const response = await fetch(
      `${window.location.origin}/scada-vis/schedulers/vis-request`,
      {
        method: "POST",
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language": "es-419,es;q=0.9",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "x-requested-with": "XMLHttpRequest",
          cookie:
            "user_language=; x-login=1; x-auth=admin:9948d8b065fb42b1cf3b4167693f832c55e6501d5c1806c08f9d950c7fbe8d29",
          Referer: `${window.location.origin}/scada-vis/schedulers`,
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: body,
      }
    );

    if (!response) {
      throw new Error(`Error al obtener horarios: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al hacer el fetch: ${error}`);
  }
}

export async function createEvent(data) {
  let body = `data=${encodeURIComponent(JSON.stringify(data))}`;

  try {
    const response = await fetch(
      `${window.location.origin}/scada-vis/schedulers/vis-request`,
      {
        method: "POST",
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language": "es-419,es;q=0.9",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "x-requested-with": "XMLHttpRequest",
          cookie:
            "user_language=; x-login=1; x-auth=admin:9948d8b065fb42b1cf3b4167693f832c55e6501d5c1806c08f9d950c7fbe8d29",
          Referer: `${window.location.origin}/scada-vis/schedulers`,
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: body,
      }
    );

    if (!response) {
      throw new Error(`Error al obtener horarios: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al hacer el fetch: ${error}`);
  }
}

export async function deleteEvent(id) {
  let data = { action: "event-delete", id: id };
  let body = `data=${encodeURIComponent(JSON.stringify(data))}`;

  try {
    const response = await fetch(
      `${window.location.origin}/scada-vis/schedulers/vis-request`,
      {
        method: "POST",
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language": "es-419,es;q=0.9",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "x-requested-with": "XMLHttpRequest",
          cookie:
            "user_language=; x-login=1; x-auth=admin:9948d8b065fb42b1cf3b4167693f832c55e6501d5c1806c08f9d950c7fbe8d29",
          Referer: `${window.location.origin}/scada-vis/schedulers`,
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: body,
      }
    );

    if (!response) {
      throw new Error(`Error al obtener horarios: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al hacer el fetch: ${error}`);
  }
}

