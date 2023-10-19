import { baseApi } from "./baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAdmin: build.query({
      query: () => ({
        url: "/user/admins",
        method: "GET",
      }),
      providesTags: ["getAdmin"],
    }),
    createAdmin: build.mutation({
      query: (data) => ({
        url: "/user/create-admin",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["createAdmin"],
    }),
  }),
});

export const {useGetAdminQuery, useCreateAdminMutation } = adminApi;
