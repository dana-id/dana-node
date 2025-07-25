/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
import type { ValidationErrorContext } from '../../../runtime';
import type { PromoInfo } from './PromoInfo';
/**
 *
 * @export
 * @interface ConsultPayPaymentInfo
 */
export interface ConsultPayPaymentInfo {
    /**
     * Payment method that used to payment. The enums:<br>
     *   * BALANCE - Payment method with balance<br>
     *   * COUPON - Payment method with coupon<br>
     *   * NET_BANKING - Payment method with internet banking<br>
     *   * CREDIT_CARD - Payment method with credit card<br>
     *   * DEBIT_CARD - Payment method with debit card<br>
     *   * VIRTUAL_ACCOUNT - Payment method with virtual account<br>
     *   * OTC - Payment method with OTC<br>
     *   * DIRECT_DEBIT_CREDIT_CARD - Payment method with direct debit of credit card<br>
     *   * DIRECT_DEBIT_DEBIT_CARD - Payment method with direct debit of debit card<br>
     *   * ONLINE_CREDIT - Payment method with online Credit<br>
     *   * LOAN_CREDIT - Payment method with DANA Cicil<br>
     *   * NETWORK_PAY - Payment method with e-wallet<br>
     *
     * @type {string}
     * @memberof ConsultPayPaymentInfo
     */
    payMethod: ConsultPayPaymentInfoPayMethodEnum;
    /**
     * Payment option that available to used to payment, depends on the payment method. The enums:<br>
     *   * NETWORK_PAY_PG_SPAY - Payment method with ShopeePay e-wallet<br>
     *   * NETWORK_PAY_PG_OVO - Payment method with OVO e-wallet<br>
     *   * NETWORK_PAY_PG_GOPAY - Payment method with GoPay e-wallet<br>
     *   * NETWORK_PAY_PG_LINKAJA - Payment method with LinkAja e-wallet<br>
     *   * NETWORK_PAY_PG_CARD - Payment method with Card<br>
     *   * VIRTUAL_ACCOUNT_BCA - Payment method with BCA virtual account<br>
     *   * VIRTUAL_ACCOUNT_BNI - Payment method with BNI virtual account<br>
     *   * VIRTUAL_ACCOUNT_MANDIRI - Payment method with Mandiri virtual account<br>
     *   * VIRTUAL_ACCOUNT_BRI - Payment method with BRI virtual account<br>
     *   * VIRTUAL_ACCOUNT_BTPN - Payment method with BTPN virtual account<br>
     *   * VIRTUAL_ACCOUNT_CIMB - Payment method with CIMB virtual account<br>
     *   * VIRTUAL_ACCOUNT_PERMATA - Payment method with Permata virtual account<br>
     *
     * @type {string}
     * @memberof ConsultPayPaymentInfo
     */
    payOption?: ConsultPayPaymentInfoPayOptionEnum;
    /**
     * Additional Information of promotion
     * @type {Array<PromoInfo>}
     * @memberof ConsultPayPaymentInfo
     */
    promoInfos?: Array<PromoInfo>;
}
/**
 * @export
 */
export declare const ConsultPayPaymentInfoPayMethodEnum: {
    readonly Balance: "BALANCE";
    readonly Coupon: "COUPON";
    readonly NetBanking: "NET_BANKING";
    readonly CreditCard: "CREDIT_CARD";
    readonly DebitCard: "DEBIT_CARD";
    readonly VirtualAccount: "VIRTUAL_ACCOUNT";
    readonly Otc: "OTC";
    readonly DirectDebitCreditCard: "DIRECT_DEBIT_CREDIT_CARD";
    readonly DirectDebitDebitCard: "DIRECT_DEBIT_DEBIT_CARD";
    readonly OnlineCredit: "ONLINE_CREDIT";
    readonly LoanCredit: "LOAN_CREDIT";
    readonly NetworkPay: "NETWORK_PAY";
};
export type ConsultPayPaymentInfoPayMethodEnum = typeof ConsultPayPaymentInfoPayMethodEnum[keyof typeof ConsultPayPaymentInfoPayMethodEnum] | '';
/**
 * @export
 */
export declare const ConsultPayPaymentInfoPayOptionEnum: {
    readonly NetworkPayPgSpay: "NETWORK_PAY_PG_SPAY";
    readonly NetworkPayPgOvo: "NETWORK_PAY_PG_OVO";
    readonly NetworkPayPgGopay: "NETWORK_PAY_PG_GOPAY";
    readonly NetworkPayPgLinkaja: "NETWORK_PAY_PG_LINKAJA";
    readonly NetworkPayPgCard: "NETWORK_PAY_PG_CARD";
    readonly VirtualAccountBca: "VIRTUAL_ACCOUNT_BCA";
    readonly VirtualAccountBni: "VIRTUAL_ACCOUNT_BNI";
    readonly VirtualAccountMandiri: "VIRTUAL_ACCOUNT_MANDIRI";
    readonly VirtualAccountBri: "VIRTUAL_ACCOUNT_BRI";
    readonly VirtualAccountBtpn: "VIRTUAL_ACCOUNT_BTPN";
    readonly VirtualAccountCimb: "VIRTUAL_ACCOUNT_CIMB";
    readonly VirtualAccountPermata: "VIRTUAL_ACCOUNT_PERMATA";
};
export type ConsultPayPaymentInfoPayOptionEnum = typeof ConsultPayPaymentInfoPayOptionEnum[keyof typeof ConsultPayPaymentInfoPayOptionEnum] | '';
/**
 * Check if a given object implements the ConsultPayPaymentInfo interface.
 */
export declare function instanceOfConsultPayPaymentInfo(value: object): value is ConsultPayPaymentInfo;
export declare function ConsultPayPaymentInfoFromJSON(json: any): ConsultPayPaymentInfo;
export declare function ConsultPayPaymentInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsultPayPaymentInfo;
export declare function ConsultPayPaymentInfoToJSON(json: any): ConsultPayPaymentInfo;
export declare function ConsultPayPaymentInfoToJSONTyped(value?: ConsultPayPaymentInfo | null, ignoreDiscriminator?: boolean): any;
export declare function validateConsultPayPaymentInfo(value: ConsultPayPaymentInfo): ValidationErrorContext[];
