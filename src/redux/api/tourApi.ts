import { baseApi } from "./baseApi";

const TOUR_URL = "/tour";
export const tourApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTour: build.query({
      query: () => ({
        url: `${TOUR_URL}`,
        method: "GET",
      }),
      providesTags: ["getTour"],
    }),
    singleTour: build.query({
        query: (id) => ({
          url: `${TOUR_URL}/${id}`,
          method: "GET",
        }),
        providesTags: ["singleTour"],
      }),
  }),
});

export const { useGetTourQuery, useSingleTourQuery } = tourApi;
