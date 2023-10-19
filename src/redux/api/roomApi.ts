import { baseApi } from "./baseApi";


const ROOM_URL = "/room";
export const roomApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // getHotels: build.query({
    //   query: () => ({
    //     url: `${HOTEL_URL}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["getHotel"],
    // }),
    getSingleRoom: build.query({
      query: (id) => ({
        url: `${ROOM_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["singleRoom"],
    }),
    reserveAroom: build.mutation({
        query: ({id, roomData}) => ({
          url: `${ROOM_URL}/room-no/${id}`,
          method: "PATCH", // Use the PATCH HTTP method for updating
          data: roomData, // The data to be sent in the request body
        }),
        invalidatesTags: ["reserveRoom"], // Invalidate the single room cache
      }),
    // createAdmin: build.mutation({
    //   query: (data) => ({
    //     url: "/user/create-admin",
    //     method: "POST",
    //     data: data,
    //   }),
    //   invalidatesTags: ["createAdmin"],
    // }),
  }),
});

export const {useGetSingleRoomQuery,useReserveAroomMutation } = roomApi;
