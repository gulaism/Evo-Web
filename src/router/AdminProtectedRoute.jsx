const AdminProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
  if(!token) {
    return window.location.href = "/admin/login";
  }
  return children;
}

export default AdminProtectedRoute
