"use client";

import React, { useState } from "react";
import { NotificationContext } from "../contexts";


const NotificationContextProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {

  const [ notificationOn, setNotificationOn ] = useState<boolean>(false)
  const [ notificationTexts, setNotificationTexts ] = useState<{title: string, subtitle:string}>({title: '', subtitle: ''})

  return (
    <NotificationContext.Provider value={{notificationOn, setNotificationOn, notificationTexts, setNotificationTexts}}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;