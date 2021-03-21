import HttpClient from "./HttpClient";

import { BASE_URL, API_PREFIX } from "./constants";

const getConstructedUrl = (urlPostfix: string) =>
  API_PREFIX !== ""
    ? `${BASE_URL}/${API_PREFIX}/${urlPostfix}`
    : `${BASE_URL}/${urlPostfix}`;

export class PublicApi extends HttpClient {
  public constructor(postFixURL: string) {
    super(getConstructedUrl(postFixURL));
  }
}
