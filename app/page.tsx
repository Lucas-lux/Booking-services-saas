// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">
        Plateforme de Réservation
      </h1>
      <div className="space-x-4">
        {!userId ? (
          <>
            <Button asChild>
              <Link href="/sign-in">Connexion</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/sign-up">Inscription</Link>
            </Button>
          </>
        ) : (
          <Button asChild>
            <Link href="/dashboard">Tableau de bord</Link>
          </Button>
        )}
      </div>
    </div>
  );
}