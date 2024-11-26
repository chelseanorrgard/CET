import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL';

const  baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/rooms`,
  credentials: 'include',
  prepareHeaders: (Headers) => {
      const token =  localStorage.getItem('token');
      if(token) {
          Headers.set('Authorization', `Bearer ${token}`);
      }
      return Headers;
  }
})

const roomApi = createApi({
  reducerPath: 'roomApi',
  baseQuery,
  tagTypes: ['Rooms'],
  endpoints: (builder) =>({
      fetchAllRooms: builder.query({
          query: () => "/",
          providesTags: ["Rooms"]
      }),
      fetchRoomById: builder.query({
          query: (id) => `/${id}`,
          providesTags: (result, error, id) => [{ type: "Rooms", id }],
      }),
      addRoom: builder.mutation({
          query: (newBook) => ({
              url: `/create-room`,
              method: "POST",
              body: newBook
          }),
          invalidatesTags: ["Rooms"]
      }),
      updateRoom: builder.mutation({
          query: ({id, ...rest}) => ({
              url: `/edit/${id}`,
              method: "PUT",
              body: rest,
              headers: {
                  'Content-Type': 'application/json'
              }
          }),
          invalidatesTags: ["Rooms"]
      }),
      deleteRoom: builder.mutation({
          query: (id) => ({
              url: `/${id}`,
              method: "DELETE"
          }),
          invalidatesTags: ["Rooms"]
      })
  })
})

export const {useFetchAllRoomsQuery, useFetchRoomByIdQuery, useAddRoomMutation, useUpdateRoomMutation, useDeleteRoomMutation} = roomApi;
export default roomApi;