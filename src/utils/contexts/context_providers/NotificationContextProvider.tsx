"use client";

import React, { useState } from "react";
import { NotificationContext } from "../contexts";


const NotificationContextProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {

  const [ notificationOn, setNotificationOn ] = useState<boolean>(false)

  return (
    <NotificationContext.Provider value={{notificationOn, setNotificationOn}}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;