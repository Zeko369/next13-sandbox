"use client";

import React, { Suspense, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useSuspenseQuery,
} from "@tanstack/react-query";

import { renderServer } from "./renderOnServer";

const ServerComponent = () => {
  const query = useSuspenseQuery({
    queryKey: ["server"],
    queryFn: renderServer,
    staleTime: Infinity,
  });

  return query.data as React.ReactNode;
};

export default function HackPage() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Client</h1>

        <Suspense fallback={<div>Loading...</div>}>
          {typeof window !== "undefined" && <ServerComponent />}
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}
