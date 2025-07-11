import { Edit, Trash2 } from 'lucide-react'
import { NoteData } from '../../common/noteData'
import styles from './NoteList.module.scss'

interface NoteListItemProps {
  note: NoteData
  isSelected: boolean
  onSelect: (id: string) => void
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
}

function NoteListItem({ note, isSelected, onSelect, onEdit, onDelete }: NoteListItemProps) {
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation()
    onEdit?.(note.id)
  }

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    onDelete?.(note.id)
  }

  return (
    <div className={`${styles.noteItem} ${isSelected ? styles.selected : ''}`} onClick={() => onSelect(note.id)}>
      <div className={styles.noteContent}>
        <div className={styles.titleRow}>
          <div className={styles.title}>{note.title || 'Untitled'}</div>
          <div className={styles.editBtn} onClick={handleEdit}>
            <Edit size={14} />
          </div>
          <div className={styles.deleteBtn} onClick={handleDelete}>
            <Trash2 size={14} />
          </div>
        </div>
        <div className={styles.preview}>{note.subtitle}</div>
      </div>
    </div>
  )
}

export default NoteListItem
