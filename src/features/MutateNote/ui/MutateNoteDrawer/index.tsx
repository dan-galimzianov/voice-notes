import { ReactNode } from "react"
import { Button, Drawer } from "antd"
import { FormProvider, useForm } from "react-hook-form"
import { Input, VoiceControlTextArea } from "shared/ui"
import { useState } from "react"
import { Note } from "types"
import { createNote, getNoteById, updateNote } from "entities/Notes"
import { useAppSelector, useAppDispatch } from "shared/lib"

type MutateNoteDrawerProps = {
    renderTriggerItem?: () => ReactNode
    noteId?: string
}

type MutateNoteForm = Omit<Note, 'id'>

export const MutateNoteDrawer = ({renderTriggerItem, noteId = ''}: MutateNoteDrawerProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const note = useAppSelector(getNoteById(noteId))
    const methods = useForm<MutateNoteForm>({
        mode: 'onChange', 
        defaultValues: note
    })
    const dispatch = useAppDispatch();

    const onSubmit = (note: MutateNoteForm) => {
        dispatch(note ?  updateNote({...note as MutateNoteForm, id: noteId}) : createNote(note))
        setIsOpen(false)
        methods.reset()
    }

    const onClose = () => {
        methods.reset()
        setIsOpen(false)
    }

    const onOpen = () => {
        setIsOpen(true)
    }

    return (
        <>
            {renderTriggerItem && <div onClick={onOpen}>{renderTriggerItem()}</div>}
            <Drawer title={note ? 'Edit note' : 'Create note'} onClose={onClose} open={isOpen}>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <Input name="title" placeholder="Title" required/>
                        <VoiceControlTextArea name="body" key={String(isOpen)}/> {/* hack) */}
                        <Button type="primary" htmlType="submit">{note ? 'Update' : 'Create'}</Button>
                    </form>
                </FormProvider>
            </Drawer>
        </>
    )
}
