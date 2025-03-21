
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import GlassCard from '@/components/ui/GlassCard';
import PageTransition from '@/components/layout/PageTransition';
import { Bell, AlertCircle, Calendar, BookOpen, GraduationCap, Info } from 'lucide-react';

// Mock notification data
const notifications = [
  {
    id: 1,
    title: 'IIT Madras Application Opens',
    description: 'Applications for B.Tech programs are now open. Last date: June 30, 2023',
    date: '2 days ago',
    type: 'deadline',
    isRead: false
  },
  {
    id: 2,
    title: 'New Course Added: Data Science',
    description: 'Loyola College has announced a new B.Sc Data Science program',
    date: '1 week ago',
    type: 'course',
    isRead: true
  },
  {
    id: 3,
    title: 'Career Talk: Medical Professions',
    description: 'Join an online session about careers in medicine on June 15, 2023',
    date: '2 weeks ago',
    type: 'event',
    isRead: true
  },
  {
    id: 4,
    title: 'Anna University Registration Deadline',
    description: 'Last date for application submission is July 10, 2023',
    date: '3 weeks ago',
    type: 'deadline',
    isRead: true
  },
  {
    id: 5,
    title: 'New Engineering Specializations',
    description: 'Explore 5 new specializations in engineering added to our database',
    date: '1 month ago',
    type: 'career',
    isRead: true
  }
];

const getIconForType = (type: string) => {
  switch (type) {
    case 'deadline':
      return <AlertCircle className="h-5 w-5 text-red-600" />;
    case 'event':
      return <Calendar className="h-5 w-5 text-indigo-600" />;
    case 'course':
      return <BookOpen className="h-5 w-5 text-green-600" />;
    case 'career':
      return <GraduationCap className="h-5 w-5 text-blue-600" />;
    default:
      return <Info className="h-5 w-5 text-amber-600" />;
  }
};

const getColorForType = (type: string) => {
  switch (type) {
    case 'deadline':
      return 'bg-red-100';
    case 'event':
      return 'bg-indigo-100';
    case 'course':
      return 'bg-green-100';
    case 'career':
      return 'bg-blue-100';
    default:
      return 'bg-amber-100';
  }
};

const Notifications = () => {
  return (
    <MainLayout>
      <PageTransition>
        <div className="space-y-8">
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Notifications</h1>
                <p className="text-muted-foreground mt-1">
                  Stay updated with the latest information
                </p>
              </div>
              <div className="p-2 rounded-full bg-primary/10">
                <Bell className="h-6 w-6 text-primary" />
              </div>
            </div>
            
            <GlassCard className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-medium">Recent Updates</h2>
                  <span className="text-sm text-muted-foreground">
                    Total: {notifications.length}
                  </span>
                </div>
                
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id}
                      className={`p-4 rounded-lg border ${
                        notification.isRead ? 'bg-white' : 'bg-blue-50 border-blue-100'
                      } transition-all hover:shadow-md slide-up-animation`}
                      style={{ animationDelay: `${notification.id * 0.1}s` }}
                    >
                      <div className="flex gap-4">
                        <div className={`p-2 h-fit rounded-full ${getColorForType(notification.type)}`}>
                          {getIconForType(notification.type)}
                        </div>
                        <div className="space-y-1 flex-1">
                          <h4 className="font-semibold">
                            {notification.title}
                            {!notification.isRead && (
                              <span className="ml-2 px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 text-xs">
                                New
                              </span>
                            )}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {notification.description}
                          </p>
                          <p className="text-xs text-muted-foreground">{notification.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
            
            <div className="text-center text-sm text-muted-foreground p-4">
              <p>No more notifications to load</p>
            </div>
          </section>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default Notifications;
