import { boot } from 'quasar/wrappers';
import { RouteMeta as VueRouteMeta } from 'vue-router';
import { AccessLevel } from 'src/models/user.model';
import { useAuthStore } from '../stores/auth.store';

// Define the access levels

interface RouteMeta extends VueRouteMeta {
  access_level?: AccessLevel[];
}

export default boot(({ router }) => {
  router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const isAuthorized = authStore.isLoggedIn;
    const userLevel = authStore.userlevel || AccessLevel.Anonymous;

    const routeMeta = to.meta as RouteMeta;
    console.log(userLevel);
    // Checking if the current path is '/login' or '/register'
    const isPublicPage =
      ['/login', '/register', '/', ''].includes(to.path) ||
      (routeMeta.access_level &&
        routeMeta.access_level.includes(AccessLevel.Anonymous));

    // Check if the route has an access_level property
    if (routeMeta.access_level) {
      // Check if the user's level is included in the route's access_level array
      const hasAccess = routeMeta.access_level.some(
        (level) => level === userLevel
      );

      if (!hasAccess) {
        // If the user does not have access, redirect to the login page
        next({ path: '/login' });
      } else {
        next();
      }
    } else if (!isAuthorized && !isPublicPage) {
      // Redirect to the login page if not authorized and not already on a public page
      next({ path: '/login' });
    } else {
      next();
    }
  });
});
