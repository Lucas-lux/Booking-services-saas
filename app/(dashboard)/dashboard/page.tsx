import { Suspense } from 'react';
import { CalendarView } from '@/components/calendar-view';
import { BookingsList } from '@/components/bookings-list';
import { DashboardSkeleton } from '@/components/skeletons';

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Tableau de bord</h2>
      </div>
      <Suspense fallback={<DashboardSkeleton />}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <CalendarView className="col-span-4" />
          <BookingsList className="col-span-3" />
        </div>
      </Suspense>
    </div>
  );
}