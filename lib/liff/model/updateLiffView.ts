/**
 * LIFF server API
 * LIFF Server API.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export type UpdateLiffView = {
  /**
   * Size of the LIFF app view. Specify one of these values: - compact - tall - full
   *
   * @see <a href="https://developers.line.biz/en/reference/liff-server/#update-liff-app">type Documentation</a>
   */
  type?: UpdateLiffView.TypeEnum /**/;
  /**
   * Endpoint URL. This is the URL of the web app that implements the LIFF app (e.g. https://example.com). Used when the LIFF app is launched using the LIFF URL. The URL scheme must be https. URL fragments (#URL-fragment) can\'t be specified.
   *
   * @see <a href="https://developers.line.biz/en/reference/liff-server/#update-liff-app">url Documentation</a>
   */
  url?: string /**/;
  /**
   * `true` to use the LIFF app in modular mode. When in modular mode, the action button in the header is not displayed.
   *
   * @see <a href="https://developers.line.biz/en/reference/liff-server/#update-liff-app">moduleMode Documentation</a>
   */
  moduleMode?: boolean /**/;
};

export namespace UpdateLiffView {
  export type TypeEnum = "compact" | "tall" | "full";
}
