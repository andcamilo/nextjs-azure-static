'use client'

import { useAuth } from '@/hooks/useAuth'

export default function AuthButton() {
  const { user, loading, isAuthenticated, login, logout } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center space-x-2">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
        <span>Loading...</span>
      </div>
    )
  }

  if (isAuthenticated) {
    return (
      <div className="flex items-center space-x-4">
        <div className="text-sm">
          <span className="font-medium">Welcome, </span>
          <span className="text-blue-600">{user?.userDetails}</span>
        </div>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Logout
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={login}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
    >
      Login with Entra ID
    </button>
  )
}