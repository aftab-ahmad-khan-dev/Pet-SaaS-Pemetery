import { mockUsers } from "./mockData.js";

const AUTH_KEY = "pemetery_auth";
const LAST_ACTIVITY_KEY = "pemetery_last_activity";
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

export function login(email, role) {
  const user =
    mockUsers.find((u) => u.email === email) || {
      id: "demo",
      name: email.split("@")[0],
      email,
      role: role || "memorial_owner",
    };
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  localStorage.setItem(LAST_ACTIVITY_KEY, Date.now().toString());
  return user;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(LAST_ACTIVITY_KEY);
}

export function getCurrentUser() {
  const data = localStorage.getItem(AUTH_KEY);
  if (!data) return null;
  
  const lastActivity = localStorage.getItem(LAST_ACTIVITY_KEY);
  if (lastActivity && Date.now() - parseInt(lastActivity, 10) > SESSION_TIMEOUT) {
    logout();
    return null;
  }
  
  localStorage.setItem(LAST_ACTIVITY_KEY, Date.now().toString());
  return JSON.parse(data);
}

export function isAuthenticated() {
  return getCurrentUser() !== null;
}

export function hasRole(roles) {
  const user = getCurrentUser();
  return user !== null && roles.includes(user.role);
}
