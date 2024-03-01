import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import * as process from "process";

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env["API_URL"],
        prepareHeaders: (headers) => {
            const token = "";
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});
