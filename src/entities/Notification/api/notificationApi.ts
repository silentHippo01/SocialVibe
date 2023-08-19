import { rktApi } from "shared/api/rtkApi";
import { Notification } from "../model/types/notification";

const notificationApi = rktApi.injectEndpoints({
    endpoints: (build) => ({
        getNotification: build.query<Notification[], null>({
            query: (limit) => ({
                url: '/notifications',
            })
        })
    })
})

export const useNotification = notificationApi.useGetNotificationQuery;