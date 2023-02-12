/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDocumentRequest } from '../models/CreateDocumentRequest';
import type { Document } from '../models/Document';
import type { Feedback } from '../models/Feedback';
import type { SearchDocumentsResponse } from '../models/SearchDocumentsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Create Document
     * @param requestBody
     * @returns Document Successful Response
     * @throws ApiError
     */
    public static createDocumentDocumentsPost(
        requestBody: CreateDocumentRequest,
    ): CancelablePromise<Document> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/documents',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Search Documents
     * @param content
     * @returns SearchDocumentsResponse Successful Response
     * @throws ApiError
     */
    public static searchDocumentsDocumentsSearchGet(
        content: string,
    ): CancelablePromise<SearchDocumentsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/documents:search',
            query: {
                'content': content,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Feedback
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static createFeedbackFeedbacksPost(
        requestBody: Feedback,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/feedbacks',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
