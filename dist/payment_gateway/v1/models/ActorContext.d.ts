/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
import type { ValidationErrorContext } from '../../../runtime';
/**
 *
 * @export
 * @interface ActorContext
 */
export interface ActorContext {
    /**
     * Actor identifier
     * @type {string}
     * @memberof ActorContext
     */
    actorId?: string;
    /**
     * Actor type. The enums:<br>
     * * USER - User<br>
     * * MERCHANT - Merchant<br
     * * MERCHANT_OPERATOR - Merchant operator<br>
     * * BACK_OFFICE - Back office<br>
     * * SYSTEM - System<br>
     *
     * @type {string}
     * @memberof ActorContext
     */
    actorType?: ActorContextActorTypeEnum;
}
/**
 * @export
 */
export declare const ActorContextActorTypeEnum: {
    readonly User: "USER";
    readonly Merchant: "MERCHANT";
    readonly MerchantOperator: "MERCHANT_OPERATOR";
    readonly BackOffice: "BACK_OFFICE";
    readonly System: "SYSTEM";
};
export type ActorContextActorTypeEnum = typeof ActorContextActorTypeEnum[keyof typeof ActorContextActorTypeEnum] | '';
/**
 * Check if a given object implements the ActorContext interface.
 */
export declare function instanceOfActorContext(value: object): value is ActorContext;
export declare function ActorContextFromJSON(json: any): ActorContext;
export declare function ActorContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActorContext;
export declare function ActorContextToJSON(json: any): ActorContext;
export declare function ActorContextToJSONTyped(value?: ActorContext | null, ignoreDiscriminator?: boolean): any;
export declare function validateActorContext(value: ActorContext): ValidationErrorContext[];
