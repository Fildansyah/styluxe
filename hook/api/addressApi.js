import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../utils/env';

export const addressApi = createApi({
    reducerPath: 'addressApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Address'],
    endpoints: (builder) => ({
        getAddresses: builder.query({
            query: () => ({
                url: '/user/address',
            }),
            providesTags: ['Address'],
        }),
    }),
})

export const { useGetAddressesQuery } = addressApi