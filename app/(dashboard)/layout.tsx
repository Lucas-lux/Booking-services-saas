import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { MainNav } from '@/components/main-nav';
import { UserNav } from '@/components/user-nav';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}