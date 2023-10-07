/**
 * LINE Messaging API(Insight)
 * This document describes LINE Messaging API(Insight).
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GetMessageEventResponseClick } from "./getMessageEventResponseClick";
import { GetMessageEventResponseMessage } from "./getMessageEventResponseMessage";
import { GetMessageEventResponseOverview } from "./getMessageEventResponseOverview";

/**
 * Statistics about how users interact with narrowcast messages or broadcast messages sent from your LINE Official Account.
 */
export type GetMessageEventResponse = {
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-insight-message-event-response">overview Documentation</a>
   */
  overview?: GetMessageEventResponseOverview /**/;
  /**
   * Array of information about individual message bubbles.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-insight-message-event-response">messages Documentation</a>
   */
  messages?: Array<GetMessageEventResponseMessage> /**/;
  /**
   * Array of information about opened URLs in the message.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-insight-message-event-response">clicks Documentation</a>
   */
  clicks?: Array<GetMessageEventResponseClick> /**/;
};