"use client";

import { PortfolioForm } from "@/components/forms/PortfolioForm";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function EditPortfolioPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="-ml-2 text-muted-foreground">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>
        </div>
        
        <PortfolioForm />
      </div>
    </div>
  );
}
