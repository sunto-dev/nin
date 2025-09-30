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
        console.log(
          "Initializing LIFF with ID:",
          process.env.NEXT_PUBLIC_LIFF_ID
        );

        await liff.init({
          liffId: process.env.NEXT_PUBLIC_LIFF_ID!,
        });

        setLiffReady(true);
        console.log("LIFF initialized successfully");
        console.log("LIFF OS:", liff.getOS());
        console.log("Is in client:", liff.isInClient());
        console.log("Is logged in:", liff.isLoggedIn());

        const loginstatus = liff.isLoggedIn();
        setIsLoggedIn(loginstatus);

        // ถ้า login แล้วดึงข้อมูล user
        if (loginstatus) {
          try {
            const profile = (await liff.getProfile()) as LiffProfile;
            setLiffUser(profile);
            console.log("User profile loaded:", profile);
          } catch (profileError) {
            console.error("Failed to get profile:", profileError);
            // ถึงแม้ get profile ไม่ได้ก็ยังคง login อยู่
          }
        } else {
          console.log("User not logged in");
        }
      } catch (error) {
        console.error("LIFF init failed:", error);
        console.error("Error details:", {
          liffId: process.env.NEXT_PUBLIC_LIFF_ID,
          error: error,
        });
      } finally {
        setIsLoading(false);
      }
    };

    initLiff();
  }, []);

  const login = () => {
    if (liffReady && !isLoggedIn) {
      console.log("Starting LINE login...");
      liff.login({
        redirectUri: window.location.origin
      });
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
