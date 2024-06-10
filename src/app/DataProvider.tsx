"use client";

import { ThemeProvider } from "@/lib/context/ThemeContext";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
const DataProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default DataProvider;
