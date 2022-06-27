import { Navigate } from "react-router-dom";

const Protection = ({ isConnected, children }) => {
  if (!isConnected) {
    return <Navigate to="/" replace />
  }
  return children
}

export default Protection