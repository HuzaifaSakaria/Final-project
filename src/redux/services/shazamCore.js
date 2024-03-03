import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

  export const shazamCoreApi = createApi({
      reducerPath: 'shazamCoreApi',
      baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
          headers.set('X-RapidAPI-Key', '28d8c1ea0dmshb2b98adef47e3e0p12080fjsn8ad1c2a221e6');

          return headers;
        }
      }),
        endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'}),
        getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),
      }),
  });

  export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
  }= shazamCoreApi;