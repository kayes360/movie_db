"use client";
import React from "react";
import WatchLaterList from "./WatchLaterList";
import EmptyWatchLater from "./EmptyWatchLater";
import { useAuth } from "@/app/hooks/useAuth";
import UserNotLoginWatchLater from "./UserNotLoginWatchLater";

export default function WatchLaterContainer() {
  const { auth } = useAuth(); 
  return (
    <>
      {auth?.user ? (
        auth?.user?.watchLater.length > 0 ? (
          <WatchLaterList watchLaterList={auth?.user?.watchLater}/>
        ) : (
          <EmptyWatchLater />
        )
      ) : (
        <UserNotLoginWatchLater />
      )}
    </>
  );
}
