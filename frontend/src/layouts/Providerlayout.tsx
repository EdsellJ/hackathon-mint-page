import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import { store } from "redux/store";

import type { PropsWithChildren } from "react";

export default function Providerlayout({ children }: PropsWithChildren<{}>) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}
