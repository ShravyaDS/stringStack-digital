import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-[#FAFAF8]">
      <div className="max-w-md w-full text-center space-y-6 p-8 sm:p-10 rounded-2xl bg-white border border-[#E5E8ED] shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] border border-blue-100 text-[#2554EB] flex items-center justify-center mx-auto">
          <Terminal className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-[#2554EB] font-bold">Error 404</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Route Not Found</h1>
          <p className="text-xs text-[#5B6472] leading-relaxed">
            The requested architecture segment or system endpoint does not exist on this edge cluster.
          </p>
        </div>
        <Link href="/" className="block">
          <button className="btn-primary w-full py-2.5 text-sm font-semibold cursor-pointer active:scale-95 transition-transform flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Production Systems</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
