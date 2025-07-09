import { cn } from '@/lib/utils';

function MainLayout({ children, className }) {
  return (
    <main className={cn(['mx-auto lg:container', className])}>{children}</main>
  );
}

export default MainLayout;
