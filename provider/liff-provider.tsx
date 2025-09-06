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
}

const LiffContext = createContext<LiffContextType>({
  liffReady: false,
  liffUser: null,
});

export function LiffProvider({ children }: { children: ReactNode }) {
  const [liffReady, setLiffReady] = useState(false);
  const [liffUser, setLiffUser] = useState<LiffProfile | null>(null);

  useEffect(() => {
    const initLiff = async () => {
      try {
        await liff.init({
          liffId: process.env.NEXT_PUBLIC_LIFF_ID!,
        });

        setLiffReady(true);
        console.log("LIFF initialized");

        // ถ้า login แล้วดึงข้อมูล user
        if (liff.isLoggedIn()) {
          const profile = (await liff.getProfile()) as LiffProfile;
          setLiffUser(profile);
        }
      } catch (error) {
        console.error("LIFF init failed:", error);
      }
    };

    initLiff();
  }, []);

  return (
    <LiffContext.Provider value={{ liffReady, liffUser }}>
      {children}
    </LiffContext.Provider>
  );
}

export const useLiff = () => useContext(LiffContext);
