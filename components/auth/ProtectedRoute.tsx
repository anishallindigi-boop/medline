'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import ApiLoader from '@/app/elements/ApiLoader';

export default function ProtectedRoute({
  children,
  requiredRole,
  redirectTo,
}: {
  children: React.ReactNode;
  requiredRole?: string;
  redirectTo: string;
}) {
  const router = useRouter();

  const { isauthenticate, loading, auths } = useAppSelector(
    (state: RootState) => state.auth
  );

  console.log(isauthenticate, loading, auths, requiredRole);

  useEffect(() => {
    // ⏳ Don't do anything while loading
    if (loading) return;

    // ❌ Not authenticated -> redirect to login
    // if (!isauthenticate) {
    //   router.replace(redirectTo);
    //   return;
    // }

    // ⏳ Wait for user data to load
    if (!auths) return;

    // ❌ Role mismatch -> redirect
    if (requiredRole && auths.role !== requiredRole) {
      console.log('Role mismatch', auths.role, requiredRole);
      router.replace(redirectTo);
    }
  }, [loading, isauthenticate, auths, requiredRole, redirectTo, router]);

  // 🔥 KEY FIX: Show loader during loading OR while waiting for auth data
  if (loading || !auths) {
    return <ApiLoader />;
  }

  // Only redirect after loading is complete
  if (!isauthenticate) {
    return null;
  }

  // Prevent rendering if role doesn't match
  if (requiredRole && auths.role !== requiredRole) {
    return null;
  }

  return <>{children}</>;
}