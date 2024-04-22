import { v4 as uuidv4 } from 'uuid';

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Note} from 'types'

type NotesSliceState = {
    notes: Note[]
}

const initialState: NotesSliceState = {
    notes: []
}

export const notesSlice = createSlice({
    name: 'notesStore',
    initialState,
    reducers: {
        createNote: (state, {payload}: PayloadAction<Omit<Note, 'id'>>) => {
            state.notes.push({id: uuidv4(), ...payload})
        },
        updateNote: (state, {payload: newNoteData}: PayloadAction<Note>) => {
            state.notes = state.notes.map(note => note.id === newNoteData.id ? newNoteData : note);

        },
        deleteNote: (state, {payload: id}: PayloadAction<string>) => {
            state.notes = state.notes.filter((note) => note.id !== id)
        }
    }
})

export const {createNote, deleteNote, updateNote} = notesSlice.actions

export const getNoteById = (noteId: string) => (state: RootState) => state.notesStore.notes.find((note) => note.id === noteId)
export const getAllNotes = (state: RootState) => state.notesStore.notes
