import { NoteCard, getAllNotes } from "entities/Notes"
import styles from './index.module.scss'
import { DeleteNoteButton } from "features/DeleteNotes"
import { Button, Card } from "antd"
import { MutateNoteDrawer } from "features/MutateNote"
import { EditOutlined, PlusOutlined } from "@ant-design/icons"
import { useAppSelector } from "shared/lib"


export const NotesViewGrid = () => {
    const notes = useAppSelector(getAllNotes)

    return (
        <div className={styles.root}>
            <MutateNoteDrawer renderTriggerItem={() => (
                <Card rootClassName={styles.createCardButton} hoverable><PlusOutlined /></Card>
            )}/>
            {notes.map((note) => <NoteCard key={note.id} note={note} renderTitle={
                () => <div className={styles.actions}>
                    <MutateNoteDrawer noteId={note.id} renderTriggerItem={() => <Button size="small" icon={<EditOutlined />}/>}/>
                    <DeleteNoteButton noteId={note.id}/>
                </div>
            }/>)}
        </div>
    )
}