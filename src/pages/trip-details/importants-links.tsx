import { Link2, Plus } from 'lucide-react';
import { Button } from '../../components/button';
import { api } from '../../lib/axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Link {
  id: string;
  title: string;
  url: string;
}

export function ImportantsLinks() {
  const { tripId } = useParams<{ tripId: string }>();
  const [importantsLinks, setImportantsLinks] = useState<Link[]>([]);

  useEffect(() => {
    const fetchImportantsLinks = async () => {
      try {
        const res = await api.get<{ links: Link[] }>(`/trips/${tripId}/links`);
        setImportantsLinks(res.data.links);
      } catch (error) {
        console.error('Erro ao buscar os links importantes:', error);
      }
    };

    if (tripId) {
      fetchImportantsLinks();
    }
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        {importantsLinks?.map((link) => {
          return (
            <div
              key={link.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium text-zinc-100">
                  {link.title}
                </span>
                <a
                  href="#"
                  className="block text-xs text-zinc-400 truncate hover:text-zinc-300"
                >
                  {link.url}
                </a>
              </div>
              <Link2 className="text-zinc-400 size-5" />
            </div>
          );
        })}
      </div>
      <Button variant="secondary" size="full">
        Cadastrar novo link
        <Plus className="size-5" />
      </Button>
    </div>
  );
}
