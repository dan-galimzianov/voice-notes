import { LoadingOutlined } from "@ant-design/icons"
import { Button } from "antd"

type ControlPanelProps = {
    isRecognitionActive: boolean
    textAreaValue: string
    setIsRecognitionActive: (isActive: boolean) => void
    reRecord: () => void
}

export const ControlPanel = ({reRecord, setIsRecognitionActive, isRecognitionActive, textAreaValue}: ControlPanelProps) => {

    if (isRecognitionActive) {
        return <Button onClick={() => setIsRecognitionActive(false)} size="small" icon={<LoadingOutlined />}>Stop</Button> 
    }

    return (
        <>
            <Button onClick={() => setIsRecognitionActive(true)} size="small">Start recognition</Button>
            {textAreaValue && <Button onClick={reRecord} size="small">Rerecord</Button>}
        </>
    ) 
}