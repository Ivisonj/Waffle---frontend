"use client";
import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";

import { axiosAuth } from "../axios";
import { useRouter } from "next/navigation";

const useAxiosAuth = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const deleteCookie = (name: any) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    };

    const requestIntercept = axiosAuth.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers[
            "Authorization"
          ] = `Bearer ${session?.user?.access_token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          // window.localStorage.setItem('page', 'profile')
          deleteCookie("next-auth.session-token");

          await signOut({
            redirect: false,
          });

          router.replace("/auth");

          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
      axiosAuth.interceptors.response.eject(responseIntercept);
    };
  }, [session, router]);

  return axiosAuth;
};

export default useAxiosAuth;
