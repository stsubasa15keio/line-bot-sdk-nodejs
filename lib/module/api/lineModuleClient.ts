/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-locals */
import { AcquireChatControlRequest } from "../model/acquireChatControlRequest.js";
import { DetachModuleRequest } from "../model/detachModuleRequest.js";
import { GetModulesResponse } from "../model/getModulesResponse.js";

import * as Types from "../../types.js";
import { ensureJSON } from "../../utils.js";
import { Readable } from "node:stream";

import HTTPFetchClient, {
  convertResponseToReadable,
} from "../../http-fetch.js";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

interface httpClientConfig {
  baseURL?: string;
  channelAccessToken: string;
  // TODO support defaultHeaders?
}

export class LineModuleClient {
  private httpClient: HTTPFetchClient;

  constructor(config: httpClientConfig) {
    const baseURL = config.baseURL || "https://api.line.me";
    this.httpClient = new HTTPFetchClient({
      defaultHeaders: {
        Authorization: "Bearer " + config.channelAccessToken,
      },
      baseURL: baseURL,
    });
  }

  private async parseHTTPResponse(response: Response) {
    const { LINE_REQUEST_ID_HTTP_HEADER_NAME } = Types;
    let resBody: Record<string, any> = {
      ...(await response.json()),
    };
    if (response.headers.get(LINE_REQUEST_ID_HTTP_HEADER_NAME)) {
      resBody[LINE_REQUEST_ID_HTTP_HEADER_NAME] = response.headers.get(
        LINE_REQUEST_ID_HTTP_HEADER_NAME,
      );
    }
    return resBody;
  }

  /**
   * If the Standby Channel wants to take the initiative (Chat Control), it calls the Acquire Control API. The channel that was previously an Active Channel will automatically switch to a Standby Channel.
   * @param chatId The `userId`, `roomId`, or `groupId`
   * @param acquireChatControlRequest
   *
   * @see <a href="https://developers.line.biz/en/reference/partner-docs/#acquire-control-api"> Documentation</a>
   */
  public async acquireChatControl(
    chatId: string,
    acquireChatControlRequest?: AcquireChatControlRequest,
  ): Promise<Types.MessageAPIResponseBase> {
    return (
      await this.acquireChatControlWithHttpInfo(
        chatId,
        acquireChatControlRequest,
      )
    ).body;
  }

  /**
   * If the Standby Channel wants to take the initiative (Chat Control), it calls the Acquire Control API. The channel that was previously an Active Channel will automatically switch to a Standby Channel. .
   * This method includes HttpInfo object to return additional information.
   * @param chatId The `userId`, `roomId`, or `groupId`
   * @param acquireChatControlRequest
   *
   * @see <a href="https://developers.line.biz/en/reference/partner-docs/#acquire-control-api"> Documentation</a>
   */
  public async acquireChatControlWithHttpInfo(
    chatId: string,
    acquireChatControlRequest?: AcquireChatControlRequest,
  ): Promise<Types.ApiResponseType<Types.MessageAPIResponseBase>> {
    const params = acquireChatControlRequest;

    const res = await this.httpClient.post(
      "/v2/bot/chat/{chatId}/control/acquire".replace(
        "{chatId}",
        String(chatId),
      ),
      params,
    );
    const text = await res.text();
    const parsedBody = text ? JSON.parse(text) : null;
    return { httpResponse: res, body: parsedBody };
  }
  /**
   * The module channel admin calls the Detach API to detach the module channel from a LINE Official Account.
   * @param detachModuleRequest
   *
   * @see <a href="https://developers.line.biz/en/reference/partner-docs/#unlink-detach-module-channel-by-operation-mc-admin"> Documentation</a>
   */
  public async detachModule(
    detachModuleRequest?: DetachModuleRequest,
  ): Promise<Types.MessageAPIResponseBase> {
    return (await this.detachModuleWithHttpInfo(detachModuleRequest)).body;
  }

  /**
   * The module channel admin calls the Detach API to detach the module channel from a LINE Official Account..
   * This method includes HttpInfo object to return additional information.
   * @param detachModuleRequest
   *
   * @see <a href="https://developers.line.biz/en/reference/partner-docs/#unlink-detach-module-channel-by-operation-mc-admin"> Documentation</a>
   */
  public async detachModuleWithHttpInfo(
    detachModuleRequest?: DetachModuleRequest,
  ): Promise<Types.ApiResponseType<Types.MessageAPIResponseBase>> {
    const params = detachModuleRequest;

    const res = await this.httpClient.post("/v2/bot/channel/detach", params);
    const text = await res.text();
    const parsedBody = text ? JSON.parse(text) : null;
    return { httpResponse: res, body: parsedBody };
  }
  /**
   * Gets a list of basic information about the bots of multiple LINE Official Accounts that have attached module channels.
   * @param start Value of the continuation token found in the next property of the JSON object returned in the response. If you can\'t get all basic information about the bots in one request, include this parameter to get the remaining array.
   * @param limit Specify the maximum number of bots that you get basic information from. The default value is 100. Max value: 100
   *
   * @see <a href="https://developers.line.biz/en/reference/partner-docs/#get-multiple-bot-info-api"> Documentation</a>
   */
  public async getModules(
    start?: string,
    limit?: number,
  ): Promise<GetModulesResponse> {
    return (await this.getModulesWithHttpInfo(start, limit)).body;
  }

  /**
   * Gets a list of basic information about the bots of multiple LINE Official Accounts that have attached module channels..
   * This method includes HttpInfo object to return additional information.
   * @param start Value of the continuation token found in the next property of the JSON object returned in the response. If you can\'t get all basic information about the bots in one request, include this parameter to get the remaining array.
   * @param limit Specify the maximum number of bots that you get basic information from. The default value is 100. Max value: 100
   *
   * @see <a href="https://developers.line.biz/en/reference/partner-docs/#get-multiple-bot-info-api"> Documentation</a>
   */
  public async getModulesWithHttpInfo(
    start?: string,
    limit?: number,
  ): Promise<Types.ApiResponseType<GetModulesResponse>> {
    const queryParams = {
      start: start,
      limit: limit,
    };
    Object.keys(queryParams).forEach((key: keyof typeof queryParams) => {
      if (queryParams[key] === undefined) {
        delete queryParams[key];
      }
    });

    const res = await this.httpClient.get("/v2/bot/list", queryParams);
    const text = await res.text();
    const parsedBody = text ? JSON.parse(text) : null;
    return { httpResponse: res, body: parsedBody };
  }
  /**
   * To return the initiative (Chat Control) of Active Channel to Primary Channel, call the Release Control API.
   * @param chatId The `userId`, `roomId`, or `groupId`
   *
   * @see <a href="https://developers.line.biz/en/reference/partner-docs/#release-control-api"> Documentation</a>
   */
  public async releaseChatControl(
    chatId: string,
  ): Promise<Types.MessageAPIResponseBase> {
    return (await this.releaseChatControlWithHttpInfo(chatId)).body;
  }

  /**
   * To return the initiative (Chat Control) of Active Channel to Primary Channel, call the Release Control API. .
   * This method includes HttpInfo object to return additional information.
   * @param chatId The `userId`, `roomId`, or `groupId`
   *
   * @see <a href="https://developers.line.biz/en/reference/partner-docs/#release-control-api"> Documentation</a>
   */
  public async releaseChatControlWithHttpInfo(
    chatId: string,
  ): Promise<Types.ApiResponseType<Types.MessageAPIResponseBase>> {
    const res = await this.httpClient.post(
      "/v2/bot/chat/{chatId}/control/release".replace(
        "{chatId}",
        String(chatId),
      ),
    );
    const text = await res.text();
    const parsedBody = text ? JSON.parse(text) : null;
    return { httpResponse: res, body: parsedBody };
  }
}
