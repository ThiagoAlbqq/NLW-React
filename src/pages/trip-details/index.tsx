import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantsLinks } from "./importants-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";

export function TripDetailsPage() {
  const [isCreateactivityModalOpen, setIsCreateactivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateactivityModalOpen(true);
  }
  function closeCreateActivityModal() {
    setIsCreateactivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />
      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={openCreateActivityModal}
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
            >
              <Plus className="size-5" />
              Cadastrar atividades
            </button>
          </div>

          <Activities />
        </div>
        <div className="w-80 space-y-6">
          <ImportantsLinks />
          <div className="w-full h-px bg-zinc-800" />
          <Guests />
        </div>
      </main>
      {isCreateactivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
}
