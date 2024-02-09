import * as Modal from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'

interface NoteCardProps {
  note: {
    id: string
    date: Date
    content: string
  }
  onNoteDeleted: (id: string) => void
}

export function NoteCard({ note, onNoteDeleted }: NoteCardProps) {
  return (
    <Modal.Root>
      <Modal.Trigger
        className="
          bg-slate-800
          outline-none
          text-left
          flex
          flex-col 
          gap-3 
          p-5 
          rounded-md  
          overflow-hidden 
          relative 
          hover:ring-2
          hover:ring-slate-600
          transition-shadow
          focus-visible:ring-2
          focus-visible:ring-lime-400
        "
      >
        <span className="text-sm font-medium text-slate-300">
          {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
        </span>
        <p className="text-sm leading-6 text-slate-400">{note.content}</p>
        <div className="h-1/2 w-full absolute bottom-0 left-0 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Modal.Trigger>

      <Modal.Portal>
        <Modal.Overlay className="inset-0 fixed bg-black/50" />
        <Modal.Content className="outline-none overflow-hidden inset-0 md:inset-auto fixed md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-slate-700 md:rounded-md flex flex-col">
          <Modal.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Modal.Close>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
              {formatDistanceToNow(note.date, {
                locale: ptBR,
                addSuffix: true
              })}
            </span>
            <p className="text-sm leading-6 text-slate-400">{note.content}</p>
          </div>

          <button
            type="button"
            className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none group"
          >
            Deseja{' '}
            <span
              onClick={() => onNoteDeleted(note.id)}
              className="text-red-400 group-hover:underline"
            >
              apagar essa nota
            </span>
            ?
          </button>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  )
}
