import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../utils/env';
import { tokenState } from '../slice/auth.slice';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = tokenState(getState());
            headers.set('Authorization', `Bearer ${token}`);
        },
    }),
    tagTypes: ['Profile'],
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => ({
                url: '/user/profile',
            }),
            providesTags: ['Profile'],
        })
    }),
});

export const { useGetProfileQuery } = profileApi;
