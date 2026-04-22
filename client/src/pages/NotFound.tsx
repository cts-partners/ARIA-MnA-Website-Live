import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="min-h-[80vh] flex items-center justify-center py-20 px-4" aria-labelledby="notfound-heading">
        <div className="text-center max-w-lg">
          <div className="text-8xl font-bold text-gradient-gold font-display mb-4" aria-hidden="true">404</div>
          <h1 id="notfound-heading" className="text-2xl font-bold text-white mb-3 font-display">
            Page Not Found
          </h1>
          <p className="text-[oklch(0.60_0.010_240)] mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/">
              <Button className="bg-[oklch(0.78_0.15_75)] hover:bg-[oklch(0.85_0.13_75)] text-[oklch(0.10_0.015_240)] font-semibold px-6 glow-gold">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Link href="/platform">
              <Button variant="outline" className="border-[oklch(0.30_0.025_240)] text-white hover:bg-[oklch(0.18_0.020_240)] bg-transparent px-6">
                <Search className="mr-2 h-4 w-4" />
                Explore Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
