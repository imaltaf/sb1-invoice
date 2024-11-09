import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Receipt, CloudStorage, Wallet } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="rounded-full bg-primary/10 p-4 w-fit animate-bounce">
            <Receipt className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Professional Invoice Maker
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            Create beautiful, professional invoices in minutes. Perfect for freelancers, small businesses, and entrepreneurs.
          </p>
          <div className="flex gap-4">
            <Link href="/auth/login">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="lg" variant="outline">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl border bg-card hover:shadow-xl transition-all">
            <FileText className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
            <p className="text-muted-foreground">
              Choose from beautifully designed invoice templates that make your business look professional.
            </p>
          </div>
          <div className="p-8 rounded-xl border bg-card hover:shadow-xl transition-all">
            <CloudStorage className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud Storage</h3>
            <p className="text-muted-foreground">
              Access your invoices anywhere, anytime. All your data is securely stored in the cloud.
            </p>
          </div>
          <div className="p-8 rounded-xl border bg-card hover:shadow-xl transition-all">
            <Wallet className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Multiple Currencies</h3>
            <p className="text-muted-foreground">
              Support for multiple currencies including INR with automatic calculations and tax handling.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to streamline your invoicing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses who trust our platform for their invoicing needs.
          </p>
          <Link href="/auth/register">
            <Button size="lg" className="gap-2">
              Start Free <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}