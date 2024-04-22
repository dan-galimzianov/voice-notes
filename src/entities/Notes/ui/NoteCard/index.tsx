import { Card } from "antd"
import { ReactNode } from "react"
import { Note } from "types"

import styles from './index.module.scss'

type NoteCardProps = {
    note: Note
    renderTitle?: () => ReactNode
}

export const NoteCard = ({note, renderTitle}: NoteCardProps) => {

    return (
        <Card size="small" title={renderTitle?.()}>
            <div className={styles.root}>{note.title}</div>
        </Card>
    )
}