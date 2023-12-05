import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  // 로그인한 사용자가 있는지 확인
  // 그 사용자가 어드민 권한이 있는지 확인
  // requireAdmin이 true인 경우 로그인이 되어 있어야 하고, 어드민 권한도 있어야 함
  // 조건이 맞지 않으면 / 상위 경로로 이동
  // 조건이 맞는 경우에만 children을 렌더링

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
