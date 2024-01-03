export interface ClientResponse {
  data: any;
  message: string | null;
  status: number;
}

export interface ServerResponse {
  data: any | null;
  message: string | null;
  status: number;
}

const url = (): string => {
  const url = process.env.NEXT_PUBLIC_API_DOMAIN;
  const version = process.env.NEXT_PUBLIC_API_VERSION;
  if (url == null || version == null) {
    return "";
  }
  return url + version + "/";
};

const baseUrl = (): string => {
  let protocol = process.env.NEXT_PUBLIC_API_SCHEME;
  if (protocol == null) {
    protocol = "https";
  }

  return protocol + "://" + url();
};

const socketUrl = (): string => {
  return "ws://" + url();
};

export const clientPost = async (
  url: string,
  body: any
): Promise<ClientResponse> => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
    body: JSON.stringify(body),
  };

  const result: ClientResponse = await fetch(baseUrl() + url, options)
    .then(async (response) => {
      const data: ServerResponse = await response.json();

      return { data: data.data, message: data.message, status: data.status };
    })
    .catch((err: ClientResponse) => {
      return { data: null, message: err.message, status: 500 };
    });

  if (result.status > 300) {
    unauthorizedHandler(result);
    return Promise.reject(result);
  }

  return Promise.resolve(result);
};

export const clientPatch = async (
  url: string,
  body: any
): Promise<ClientResponse> => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
    body: JSON.stringify(body),
  };

  const result: ClientResponse = await fetch(baseUrl() + url, options)
    .then(async (response) => {
      const data: ServerResponse = await response.json();

      return { data: data.data, message: data.message, status: data.status };
    })
    .catch((err) => {
      return { data: null, message: err.message, status: 500 };
    });

  if (result.status > 300) {
    unauthorizedHandler(result);
    return Promise.reject(result);
  }

  return Promise.resolve(result);
};

export const clientDelete = async (url: string): Promise<ClientResponse> => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
  };

  const result: ClientResponse = await fetch(baseUrl() + url, options)
    .then(async (response) => {
      const data = await response.json();

      return { data: data.data, message: null, status: data.status };
    })
    .catch((err) => {
      return { data: null, message: err.message, status: 500 };
    });

  if (result.status > 300) {
    unauthorizedHandler(result);
    return Promise.reject(result);
  }

  return Promise.resolve(result);
};

export const clientGet = async (url: string): Promise<ClientResponse> => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
  };

  const result: ClientResponse = await fetch(baseUrl() + url, options)
    .then(async (response) => {
      if (!response.ok) {
        return {
          data: null,
          message: getError(response.status),
          status: response.status,
        };
      }
      const data: ServerResponse = await response.json();

      return { data: data.data, message: data.message, status: data.status };
    })
    .catch((err) => {
      return { data: null, message: err.message, status: 500 };
    });

  if (result.status > 300) {
    unauthorizedHandler(result);
    return Promise.reject(result);
  }

  return Promise.resolve(result);
};

let socket: WebSocket | null = null;

export const clientWebsocket = (url: string): WebSocket => {
  const s = new WebSocket(socketUrl() + url);
  console.log(s);
  return s;

  // socket.onmessage = function (messageEvent) {
  //   event(messageEvent);
  // };
  // socket.onerror = function () {
  //   event(null);
  // };
  // socket.onclose = function () {
  //   event(null);
  // };
};

function getError(errorStatus: number) {
  switch (errorStatus) {
    case 400:
      return "Bad request";
    case 401:
      return "Unauthorized";
    case 403:
      return "Forbidden";
    case 404:
      return "Not found";
    case 500:
      return "Internal server error";
    default:
      return "Something went wrong";
  }
}

export const clientFile = async (url: string, body: any, fileName: string) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
    body: JSON.stringify(body),
  };

  await fetch(baseUrl() + url, options)
    .then((response) => response.blob())
    .then((blob) => {
      const a = window.document.createElement("a");
      a.href = window.URL.createObjectURL(blob);
      a.download = fileName;
      a.click();
      a.remove();
      window.URL.revokeObjectURL(a.href);
    })
    .catch((err) => { });
};

function unauthorizedHandler(result: ClientResponse) {
  if (result.status == 403) {
    window.location.href = "/auth/login";
  }
}
