// components/LiffProvider.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import liff from "@line/liff";

interface LiffProfile {
  displayName: string;
  pictureUrl: string;
  userId: string;
  statusMessage: string;
}
interface LiffContextType {
  liffReady: boolean;
  liffUser: LiffProfile | null;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  isLoading: boolean;
}

const LiffContext = createContext<LiffContextType>({
  liffReady: false,
  liffUser: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  isLoading: true,
});

export function LiffProvider({ children }: { children: ReactNode }) {
  const [liffReady, setLiffReady] = useState(false);
  const [liffUser, setLiffUser] = useState<LiffProfile | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initLiff = async () => {
      try {
        setIsLoading(true);
        await liff.init({
          liffId: process.env.NEXT_PUBLIC_LIFF_ID!,
        });

        setLiffReady(true);
        console.log("LIFF initialized");

        const loginstatus = liff.isLoggedIn();
        setIsLoggedIn(loginstatus);
        // ถ้า login แล้วดึงข้อมูล user
        if (loginstatus) {
          const profile = (await liff.getProfile()) as LiffProfile;
          setLiffUser(profile);
          console.log("user profile loaded:", profile);
        } else {
          console.log("user not logged in");
        }
      } catch (error) {
        console.error("LIFF init failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initLiff();
  }, []);

  const login = () => {
    if (liffReady && !isLoggedIn) {
      liff.login();
    }
  };

  const logout = () => {
    if (liffReady && isLoggedIn) {
      liff.logout();
      setLiffUser(null);
      setIsLoggedIn(false);
    }
  };

  return (
    <LiffContext.Provider
      value={{ liffReady, liffUser, isLoggedIn, login, logout, isLoading }}
    >
      {children}
    </LiffContext.Provider>
  );
}

export const useLiff = () => useContext(LiffContext);
