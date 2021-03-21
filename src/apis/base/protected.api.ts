import { AxiosRequestConfig } from "axios";
import HttpClient from "./HttpClient";

import { BASE_URL, API_PREFIX } from "./constants";

const getConstructedUrl = (urlPostfix: string) =>
  API_PREFIX !== ""
    ? `${BASE_URL}/${API_PREFIX}/${urlPostfix}`
    : `${BASE_URL}/${urlPostfix}`;

export class ProtectedApi extends HttpClient {
  public constructor(postFixURL: string) {
    super(getConstructedUrl(postFixURL));

    this._initializeRequestInterceptor();
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError
    );
  };

  private _handleRequest = (config: AxiosRequestConfig) => {
    config.headers.Authorization = "Bearer ...";

    return config;
  };
}
