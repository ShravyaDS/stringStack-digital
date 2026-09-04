import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 bg-[#090D16] text-white">
      <div className="max-w-md w-full text-center space-y-6 p-8 sm:p-10 rounded-3xl bg-[#0E1528] border border-[#1F2937] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto shadow-inner">
          <Terminal className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-blue-400 font-bold">Error 404</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Route Not Found</h1>
          <p className="text-xs text-slate-400 leading-relaxed">
            The requested architecture segment or system endpoint does not exist on this edge cluster.
          </p>
        </div>
        <Link href="/" className="block">
          <button className="btn-primary w-full py-3 text-sm font-semibold cursor-pointer active:scale-95 transition-transform flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Production Systems</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
