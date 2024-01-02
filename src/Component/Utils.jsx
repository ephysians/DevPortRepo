// utils.js
export function isActive(pathname, activeClassName) {
    return window.location.pathname === pathname ? activeClassName : '';
  }
  