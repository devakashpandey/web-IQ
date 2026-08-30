import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import WorkspaceClient from "@/components/WorkspaceClient";

interface WorkspaceProps {
  searchParams: Promise<{ prompt?: string; id?: string }>
}

async function WorkspaceContent({ searchParams }: WorkspaceProps) {
  const resolvedSearchParams = await searchParams;
  const initialPrompt = resolvedSearchParams.prompt || "A Spotify stats dashboard with charts";

  return <WorkspaceClient initialPrompt={initialPrompt} />;
}

export default function WorkspacePage({ searchParams }: WorkspaceProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#09090b] text-white flex flex-col items-center justify-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-accent-blue" />
          <span className="text-xs text-zinc-500 font-medium">Entering Workspace...</span>
        </div>
      }
    >
      <WorkspaceContent searchParams={searchParams} />
    </Suspense>
  );
}
