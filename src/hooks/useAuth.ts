'use client'

import { useState, useEffect } from 'react'

interface ClientPrincipal {
  userId: string
  userDetails: string
  identityProvider: string
  userRoles: string[]
}

interface AuthData {
  clientPrincipal: ClientPrincipal | null
}

export function useAuth() {
  const [user, setUser] = useState<ClientPrincipal | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const response = await fetch('/.auth/me')
      const data: AuthData = await response.json()
      setUser(data.clientPrincipal)
    } catch (error) {
      console.error('Error fetching user:', error)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const login = () => {
    window.location.href = '/.auth/login/aad'
  }

  const logout = () => {
    window.location.href = '/.auth/logout'
  }

  return {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
    refreshUser: fetchUser
  }
}