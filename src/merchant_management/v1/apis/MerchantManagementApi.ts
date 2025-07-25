/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */

import * as runtime from '../../../runtime';
import type {
  CreateDivisionRequest,
  CreateDivisionResponse,
  CreateShopRequest,
  CreateShopResponse,
  QueryDivisionRequest,
  QueryDivisionResponse,
  QueryMerchantResourceRequest,
  QueryMerchantResourceResponse,
  QueryShopRequest,
  QueryShopResponse,
  UpdateDivisionRequest,
  UpdateDivisionResponse,
  UpdateShopRequest,
  UpdateShopResponse,
} from '../models/index';
import {
    validateCreateDivisionRequest,
    CreateDivisionRequestFromJSON,
    CreateDivisionRequestToJSON,
    validateCreateDivisionResponse,
    CreateDivisionResponseFromJSON,
    CreateDivisionResponseToJSON,
    validateCreateShopRequest,
    CreateShopRequestFromJSON,
    CreateShopRequestToJSON,
    validateCreateShopResponse,
    CreateShopResponseFromJSON,
    CreateShopResponseToJSON,
    validateQueryDivisionRequest,
    QueryDivisionRequestFromJSON,
    QueryDivisionRequestToJSON,
    validateQueryDivisionResponse,
    QueryDivisionResponseFromJSON,
    QueryDivisionResponseToJSON,
    validateQueryMerchantResourceRequest,
    QueryMerchantResourceRequestFromJSON,
    QueryMerchantResourceRequestToJSON,
    validateQueryMerchantResourceResponse,
    QueryMerchantResourceResponseFromJSON,
    QueryMerchantResourceResponseToJSON,
    validateQueryShopRequest,
    QueryShopRequestFromJSON,
    QueryShopRequestToJSON,
    validateQueryShopResponse,
    QueryShopResponseFromJSON,
    QueryShopResponseToJSON,
    validateUpdateDivisionRequest,
    UpdateDivisionRequestFromJSON,
    UpdateDivisionRequestToJSON,
    validateUpdateDivisionResponse,
    UpdateDivisionResponseFromJSON,
    UpdateDivisionResponseToJSON,
    validateUpdateShopRequest,
    UpdateShopRequestFromJSON,
    UpdateShopRequestToJSON,
    validateUpdateShopResponse,
    UpdateShopResponseFromJSON,
    UpdateShopResponseToJSON,
} from '../models/index';

/**
 * 
 */
export class MerchantManagementApi extends runtime.BaseAPI {

    partnerId: string = "";
    privateKey: string = "";
    origin: string = "";
    env: string = "";
    clientSecret: string = "";

    constructor({ partnerId, privateKey, origin, env, clientSecret }: { partnerId?: string, privateKey?: string, origin?: string, env?: string, clientSecret?: string }) {
        const basePath = runtime.getBasePathByEnv(env);

        const configuration = new runtime.Configuration({
            basePath: basePath,
        })

        super(configuration);

        this.partnerId = partnerId;
        this.privateKey = privateKey;
        this.origin = origin;
        this.env = env;
        this.clientSecret = clientSecret;
    }

    /**
     * This API is used to create a new division
     * Create Division
     */
    async createDivision(createDivisionRequest: CreateDivisionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateDivisionResponse> {
        if (createDivisionRequest == null) {
            throw new runtime.RequiredError(
                'createDivisionRequest',
                'Required parameter "createDivisionRequest" was null or undefined when calling createDivision().'
            );
        }

        const validationErrorContexts: runtime.ValidationErrorContext[] = validateCreateDivisionRequest(createDivisionRequest);
        if (validationErrorContexts.length > 0) {
            throw new runtime.ValidationError(validationErrorContexts);
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const endpointUrl: string = `/dana/merchant/division/createDivision.htm`;


        const requestBody = {
            "request":{"head":{}, "body":createDivisionRequest},
            "signature":""
        }
        
        const functionName = "dana.merchant.division.createDivision"

        runtime.DanaHeaderUtil.populateOpenApiScenarioHeader(headerParameters, 'POST', endpointUrl, requestBody, this.privateKey, this.clientSecret, this.partnerId, functionName);
        const response = await this.request({
            path: endpointUrl,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateDivisionResponseFromJSON(jsonValue)).value();
    }

    /**
     * Create shop under merchant or division
     * Member – Create Shop
     */
    async createShop(createShopRequest: CreateShopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateShopResponse> {
        if (createShopRequest == null) {
            throw new runtime.RequiredError(
                'createShopRequest',
                'Required parameter "createShopRequest" was null or undefined when calling createShop().'
            );
        }

        const validationErrorContexts: runtime.ValidationErrorContext[] = validateCreateShopRequest(createShopRequest);
        if (validationErrorContexts.length > 0) {
            throw new runtime.ValidationError(validationErrorContexts);
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const endpointUrl: string = `/dana/merchant/shop/createShop.htm`;


        const requestBody = {
            "request":{"head":{}, "body":createShopRequest},
            "signature":""
        }
        
        const functionName = "dana.merchant.shop.createShop"

        runtime.DanaHeaderUtil.populateOpenApiScenarioHeader(headerParameters, 'POST', endpointUrl, requestBody, this.privateKey, this.clientSecret, this.partnerId, functionName);
        const response = await this.request({
            path: endpointUrl,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateShopResponseFromJSON(jsonValue)).value();
    }

    /**
     * This API is used to obtain information of division
     * Query Division
     */
    async queryDivision(queryDivisionRequest: QueryDivisionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryDivisionResponse> {
        if (queryDivisionRequest == null) {
            throw new runtime.RequiredError(
                'queryDivisionRequest',
                'Required parameter "queryDivisionRequest" was null or undefined when calling queryDivision().'
            );
        }

        const validationErrorContexts: runtime.ValidationErrorContext[] = validateQueryDivisionRequest(queryDivisionRequest);
        if (validationErrorContexts.length > 0) {
            throw new runtime.ValidationError(validationErrorContexts);
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const endpointUrl: string = `/dana/merchant/division/queryDivision.htm`;


        const requestBody = {
            "request":{"head":{}, "body":queryDivisionRequest},
            "signature":""
        }
        
        const functionName = "dana.merchant.division.queryDivision"

        runtime.DanaHeaderUtil.populateOpenApiScenarioHeader(headerParameters, 'POST', endpointUrl, requestBody, this.privateKey, this.clientSecret, this.partnerId, functionName);
        const response = await this.request({
            path: endpointUrl,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryDivisionResponseFromJSON(jsonValue)).value();
    }

    /**
     * The interface is check merchant resource info (account balance merchant)
     * Member – Merchant Open API Check Disbursement Account
     */
    async queryMerchantResource(queryMerchantResourceRequest: QueryMerchantResourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryMerchantResourceResponse> {
        if (queryMerchantResourceRequest == null) {
            throw new runtime.RequiredError(
                'queryMerchantResourceRequest',
                'Required parameter "queryMerchantResourceRequest" was null or undefined when calling queryMerchantResource().'
            );
        }

        const validationErrorContexts: runtime.ValidationErrorContext[] = validateQueryMerchantResourceRequest(queryMerchantResourceRequest);
        if (validationErrorContexts.length > 0) {
            throw new runtime.ValidationError(validationErrorContexts);
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const endpointUrl: string = `/dana/merchant/queryMerchantResource.htm`;


        const requestBody = {
            "request":{"head":{}, "body":queryMerchantResourceRequest},
            "signature":""
        }
        
        const functionName = "dana.merchant.queryMerchantResource"

        runtime.DanaHeaderUtil.populateOpenApiScenarioHeader(headerParameters, 'POST', endpointUrl, requestBody, this.privateKey, this.clientSecret, this.partnerId, functionName);
        const response = await this.request({
            path: endpointUrl,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryMerchantResourceResponseFromJSON(jsonValue)).value();
    }

    /**
     * This API is used to obtain information of shop information
     * Member – Query Shop
     */
    async queryShop(queryShopRequest: QueryShopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryShopResponse> {
        if (queryShopRequest == null) {
            throw new runtime.RequiredError(
                'queryShopRequest',
                'Required parameter "queryShopRequest" was null or undefined when calling queryShop().'
            );
        }

        const validationErrorContexts: runtime.ValidationErrorContext[] = validateQueryShopRequest(queryShopRequest);
        if (validationErrorContexts.length > 0) {
            throw new runtime.ValidationError(validationErrorContexts);
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const endpointUrl: string = `/dana/merchant/shop/queryShop.htm`;


        const requestBody = {
            "request":{"head":{}, "body":queryShopRequest},
            "signature":""
        }
        
        const functionName = "dana.merchant.shop.queryShop"

        runtime.DanaHeaderUtil.populateOpenApiScenarioHeader(headerParameters, 'POST', endpointUrl, requestBody, this.privateKey, this.clientSecret, this.partnerId, functionName);
        const response = await this.request({
            path: endpointUrl,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryShopResponseFromJSON(jsonValue)).value();
    }

    /**
     * This API is used to update the division information
     * Update Division
     */
    async updateDivision(updateDivisionRequest: UpdateDivisionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateDivisionResponse> {
        if (updateDivisionRequest == null) {
            throw new runtime.RequiredError(
                'updateDivisionRequest',
                'Required parameter "updateDivisionRequest" was null or undefined when calling updateDivision().'
            );
        }

        const validationErrorContexts: runtime.ValidationErrorContext[] = validateUpdateDivisionRequest(updateDivisionRequest);
        if (validationErrorContexts.length > 0) {
            throw new runtime.ValidationError(validationErrorContexts);
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const endpointUrl: string = `/dana/merchant/division/updateDivision.htm`;


        const requestBody = {
            "request":{"head":{}, "body":updateDivisionRequest},
            "signature":""
        }
        
        const functionName = "dana.merchant.division.updateDivision"

        runtime.DanaHeaderUtil.populateOpenApiScenarioHeader(headerParameters, 'POST', endpointUrl, requestBody, this.privateKey, this.clientSecret, this.partnerId, functionName);
        const response = await this.request({
            path: endpointUrl,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateDivisionResponseFromJSON(jsonValue)).value();
    }

    /**
     * This API is used to update the shop information
     * Update Shop
     */
    async updateShop(updateShopRequest: UpdateShopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateShopResponse> {
        if (updateShopRequest == null) {
            throw new runtime.RequiredError(
                'updateShopRequest',
                'Required parameter "updateShopRequest" was null or undefined when calling updateShop().'
            );
        }

        const validationErrorContexts: runtime.ValidationErrorContext[] = validateUpdateShopRequest(updateShopRequest);
        if (validationErrorContexts.length > 0) {
            throw new runtime.ValidationError(validationErrorContexts);
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const endpointUrl: string = `/dana/merchant/shop/updateShop.htm`;


        const requestBody = {
            "request":{"head":{}, "body":updateShopRequest},
            "signature":""
        }
        
        const functionName = "dana.merchant.shop.updateShop"

        runtime.DanaHeaderUtil.populateOpenApiScenarioHeader(headerParameters, 'POST', endpointUrl, requestBody, this.privateKey, this.clientSecret, this.partnerId, functionName);
        const response = await this.request({
            path: endpointUrl,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateShopResponseFromJSON(jsonValue)).value();
    }

}
