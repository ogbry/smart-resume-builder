import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center p-4">
      <Card variant="elevated" className="max-w-lg w-full p-8">
        <div className="text-center">
          <div className="text-6xl font-bold text-primary-600 mb-4">404</div>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">
            Page Not Found
          </h2>
          <p className="text-secondary-600 mb-6">
            Sorry, we couldn't find the page you're looking for.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button>Go Home</Button>
            </Link>
            <Link href="/builder">
              <Button variant="outline">Start Building</Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
