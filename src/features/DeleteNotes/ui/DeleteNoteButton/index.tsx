import { DeleteFilled } from "@ant-design/icons"
import { Button } from "antd"
import { deleteNote } from "entities/Notes"
import { useAppDispatch } from "shared/lib"

type DeleteNoteButtonProps = {
    noteId: string
}

export const DeleteNoteButton = ({noteId}: DeleteNoteButtonProps) => {
    const dispatch = useAppDispatch();

    return (
        <Button onClick={() => dispatch(deleteNote(noteId))} size="small" danger icon={<DeleteFilled />}/>
    )
}