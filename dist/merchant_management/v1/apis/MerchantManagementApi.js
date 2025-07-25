"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantManagementApi = void 0;
const runtime = require("../../../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class MerchantManagementApi extends runtime.BaseAPI {
    constructor({ partnerId, privateKey, origin, env, clientSecret }) {
        const basePath = runtime.getBasePathByEnv(env);
        const configuration = new runtime.Configuration({
            basePath: basePath,
        });
        super(configuration);
        this.partnerId = "";
        this.privateKey = "";
        this.origin = "";
        this.env = "";
        this.clientSecret = "";
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
    async createDivision(createDivisionRequest, initOverrides) {
        if (createDivisionRequest == null) {
            throw new runtime.RequiredError('createDivisionRequest', 'Required parameter "createDivisionRequest" was null or undefined when calling createDivision().');
        }
        const validationErrorContexts = (0, index_1.validateCreateDivisionRequest)(createDivisionRequest);
        if (validationErrorContexts.length > 0) {
            throw new runtime.ValidationError(validationErrorContexts);
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const endpointUrl = `/dana/merchant/division/createDivision.htm`;
        const requestBody = {
            "request": { "head": {}, "body": createDivisionRequest },
            "signature": ""
        };
        const functionName = "dana.merchant.division.createDivision";
        runtime.DanaHeaderUtil.populateOpenApiScenarioHeader(headerParameters, 'POST', endpointUrl, requestBody, this.privateKey, this.clientSecret, this.partnerId, functionName);
        const response = await this.request({
            path: endpointUrl,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestBody,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CreateDivisionResponseFromJSON)(jsonValue)).value();
    }
    /**
     * Create shop under merchant or division
     * Member – Create Shop
     */
    async createShop(createShopRequest, initOverrides) {
        if (createShopRequest == null) {
            throw new runtime.RequiredError('createShopRequest', 'Required parameter "createShopRequest" was null or undefined when calling createShop().');
        }
        const validationErrorContexts = (0, index_1.validateCreateShopRequest)(createShopRequest);
        if (validationErrorContexts.length > 0) {
            throw new runtime.ValidationError(validationErrorContexts);
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const endpointUrl = `/dana/merchant/shop/createShop.htm`;
        const requestBody = {
            "request": { "head": {}, "body": createShopRequest },
            "signature": ""
        };
        const functionName = "dana.merchant.shop.createShop";
        runtime.DanaHeaderUtil.populateOpenApiScenarioHeader(headerParameters, 'POST', endpointUrl, requestBody, this.privateKey, this.clientSecret, this.partnerId, functionName);
        const response = await this.request({
            path: endpointUrl,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestBody,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CreateShopResponseFromJSON)(jsonValue)).value();
    }
    /**
     * This API is used to obtain information of division
     * Query Division
     */
    async queryDivision(queryDivisionRequest, initOverrides) {
        if (queryDivisionRequest == null) {
            throw new runtime.RequiredError('queryDivisionRequest', 'Required parameter "queryDivisionRequest" was null or undefined when calling queryDivision().');
        }
        const validationErrorContexts = (0, index_1.validateQueryDivisionRequest)(queryDivisionRequest);
        if (validationErrorContexts.length > 0) {
            throw new runtime.ValidationError(validationErrorContexts);
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const endpointUrl = `/dana/merchant/division/queryDivision.htm`;
        const requestBody = {
            "request": { "head": {}, "body": queryDivisionRequest },
            "signature": ""
        };
        const functionName = "dana.merchant.division.queryDivision";
        runtime.DanaHeaderUtil.populateOpenApiScenarioHeader(headerParameters, 'POST', endpointUrl, requestBody, this.privateKey, this.clientSecret, this.partnerId, functionName);
        const response = await this.request({
            path: endpointUrl,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestBody,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.QueryDivisionResponseFromJSON)(jsonValue)).value();
    }
    /**
     * The interface is check merchant resource info (account balance merchant)
     * Member – Merchant Open API Check Disbursement Account
     */
    async queryMerchantResource(queryMerchantResourceRequest, initOverrides) {
        if (queryMerchantResourceRequest == null) {
            throw new runtime.RequiredError('queryMerchantResourceRequest', 'Required parameter "queryMerchantResourceRequest" was null or undefined when calling queryMerchantResource().');
        }
        const validationErrorContexts = (0, index_1.validateQueryMerchantResourceRequest)(queryMerchantResourceRequest);
        if (validationErrorContexts.length > 0) {
            throw new runtime.ValidationError(validationErrorContexts);
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const endpointUrl = `/dana/merchant/queryMerchantResource.htm`;
        const requestBody = {
            "request": { "head": {}, "body": queryMerchantResourceRequest },
            "signature": ""
        };
        const functionName = "dana.merchant.queryMerchantResource";
        runtime.DanaHeaderUtil.populateOpenApiScenarioHeader(headerParameters, 'POST', endpointUrl, requestBody, this.privateKey, this.clientSecret, this.partnerId, functionName);
        const response = await this.request({
            path: endpointUrl,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestBody,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.QueryMerchantResourceResponseFromJSON)(jsonValue)).value();
    }
    /**
     * This API is used to obtain information of shop information
     * Member – Query Shop
     */
    async queryShop(queryShopRequest, initOverrides) {
        if (queryShopRequest == null) {
            throw new runtime.RequiredError('queryShopRequest', 'Required parameter "queryShopRequest" was null or undefined when calling queryShop().');
        }
        const validationErrorContexts = (0, index_1.validateQueryShopRequest)(queryShopRequest);
        if (validationErrorContexts.length > 0) {
            throw new runtime.ValidationError(validationErrorContexts);
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const endpointUrl = `/dana/merchant/shop/queryShop.htm`;
        const requestBody = {
            "request": { "head": {}, "body": queryShopRequest },
            "signature": ""
        };
        const functionName = "dana.merchant.shop.queryShop";
        runtime.DanaHeaderUtil.populateOpenApiScenarioHeader(headerParameters, 'POST', endpointUrl, requestBody, this.privateKey, this.clientSecret, this.partnerId, functionName);
        const response = await this.request({
            path: endpointUrl,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestBody,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.QueryShopResponseFromJSON)(jsonValue)).value();
    }
    /**
     * This API is used to update the division information
     * Update Division
     */
    async updateDivision(updateDivisionRequest, initOverrides) {
        if (updateDivisionRequest == null) {
            throw new runtime.RequiredError('updateDivisionRequest', 'Required parameter "updateDivisionRequest" was null or undefined when calling updateDivision().');
        }
        const validationErrorContexts = (0, index_1.validateUpdateDivisionRequest)(updateDivisionRequest);
        if (validationErrorContexts.length > 0) {
            throw new runtime.ValidationError(validationErrorContexts);
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const endpointUrl = `/dana/merchant/division/updateDivision.htm`;
        const requestBody = {
            "request": { "head": {}, "body": updateDivisionRequest },
            "signature": ""
        };
        const functionName = "dana.merchant.division.updateDivision";
        runtime.DanaHeaderUtil.populateOpenApiScenarioHeader(headerParameters, 'POST', endpointUrl, requestBody, this.privateKey, this.clientSecret, this.partnerId, functionName);
        const response = await this.request({
            path: endpointUrl,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestBody,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.UpdateDivisionResponseFromJSON)(jsonValue)).value();
    }
    /**
     * This API is used to update the shop information
     * Update Shop
     */
    async updateShop(updateShopRequest, initOverrides) {
        if (updateShopRequest == null) {
            throw new runtime.RequiredError('updateShopRequest', 'Required parameter "updateShopRequest" was null or undefined when calling updateShop().');
        }
        const validationErrorContexts = (0, index_1.validateUpdateShopRequest)(updateShopRequest);
        if (validationErrorContexts.length > 0) {
            throw new runtime.ValidationError(validationErrorContexts);
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const endpointUrl = `/dana/merchant/shop/updateShop.htm`;
        const requestBody = {
            "request": { "head": {}, "body": updateShopRequest },
            "signature": ""
        };
        const functionName = "dana.merchant.shop.updateShop";
        runtime.DanaHeaderUtil.populateOpenApiScenarioHeader(headerParameters, 'POST', endpointUrl, requestBody, this.privateKey, this.clientSecret, this.partnerId, functionName);
        const response = await this.request({
            path: endpointUrl,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestBody,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.UpdateShopResponseFromJSON)(jsonValue)).value();
    }
}
exports.MerchantManagementApi = MerchantManagementApi;
