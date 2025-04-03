"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/lib/appwrite";

export default function OAuthCallback() {
  const router = useRouter();

  useEffect(() => {
    async function fetchSession() {
      try {
        // Fetch user session
        const session = await account.get();

        if (!session) {
          throw new Error("No active session.");
        }

        // Send session token to backend to store in HTTP-only cookie
        const response = await fetch("/api/auth/store-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionToken: session.$id,
          }),
          credentials: "include", // Ensures cookies are sent
        });

        if (!response.ok) {
          throw new Error(`Server Error: ${response.statusText}`);
        }

        // Redirect to dashboard after login
        router.push("/dashboard");
      } catch (error) {
        console.error("Error fetching session:", error);
        router.push("/auth/get-started");
      }
    }

    fetchSession();
  }, [router]);

  return <p>Logging in...</p>;
}
