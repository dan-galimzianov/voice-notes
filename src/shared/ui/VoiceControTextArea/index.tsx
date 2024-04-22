import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
import { TextArea } from "shared/ui";
import { ControlPanel } from "./ControlPanel";

type VoiceControlTextAreaProps = {
    name: string
}

export const VoiceControlTextArea = ({name}: VoiceControlTextAreaProps) => {
    const {transcript, resetTranscript} = useSpeechRecognition({})
    const [isRecognitionActive, setIsRecognitionActive] = useState(false);
    const { setValue, getValues } = useFormContext();
    const [valueBeforeSpeechInput, setValueBeforeSpeechValue] = useState('')
    const value = getValues()[name] || '';

    useEffect(() => {
        transcript && setValue(name, `${valueBeforeSpeechInput} ${transcript}`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transcript])

    useEffect(() => () => {
        SpeechRecognition.stopListening()
    }, [])

    useEffect(() => {
        if (isRecognitionActive) {
            setValueBeforeSpeechValue(value)
            SpeechRecognition.startListening({continuous: true})
        } else {
            resetTranscript()
            SpeechRecognition.stopListening()
            setValueBeforeSpeechValue('')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [isRecognitionActive])

    const reRecord = () => {
        setValue(name, '')
        setIsRecognitionActive(true)
    }

    return (
        <>
            <ControlPanel reRecord={reRecord} isRecognitionActive={isRecognitionActive} textAreaValue={value} setIsRecognitionActive={setIsRecognitionActive}/>
            <TextArea disabled={isRecognitionActive} name={name} rows={10} required/>
        </>
    )
}
