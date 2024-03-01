import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://identitytoolkit.googleapis.com/v1/"}),
    endpoints:(builder) =>({
        register: builder.mutation({
            query:(user)=>({
                url:"accounts:signUp?key=AIzaSyCATk9Q6FZTiTBPwNV6aAeYwx4pNjNpALQ",
                method:"POST",
                body:user
            })
        })

    })

})

export const {useRegisterMutation} = authApi