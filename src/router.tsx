import { QueryClient } from "@tanstack/react-query";
import { createRouter, createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routes/__root";
import { LandingPage } from "./routes/index";
import { PrivacyPage } from "./routes/privacy";
import { TermsPage } from "./routes/terms";

const queryClient = new QueryClient();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: PrivacyPage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: TermsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  privacyRoute,
  termsRoute,
]);

export const router = createRouter({
  routeTree,
  context: { queryClient },
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
