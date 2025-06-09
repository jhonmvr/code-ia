import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./router";
import { RouterProvider } from "@tanstack/react-router";


// @ts-ignore
console.log("Running in mode:", import.meta.env.MODE);

function App() {
  useEffect(() => {
    // Subscribe to navigation state changes
    /* const unsubscribe = router.subscribe("onResolved", (navigation) => {
   

      
    }); */

    // Clean up subscription when component unmounts
    return () => {
      //unsubscribe();
    };
  }, []);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PostHogProvider client={posthogClient}>
        <App />
      </PostHogProvider>
    </QueryClientProvider>
  </StrictMode>,
);
