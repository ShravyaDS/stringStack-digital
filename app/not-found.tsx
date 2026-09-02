import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-obsidian bg-grid-pattern">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-surface border border-border">
        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-accent-blue flex items-center justify-center mx-auto">
          <Terminal className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-accent-blue font-bold">Error 404</span>
          <h1 className="text-3xl font-extrabold text-white">Route Not Found</h1>
          <p className="text-xs text-slate-400">
            The requested architecture segment or system endpoint does not exist on this edge cluster.
          </p>
        </div>
        <Link href="/">
          <Button variant="primary" size="md" className="gap-2 w-full justify-center">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Production Systems</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
