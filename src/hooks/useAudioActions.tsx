import { useRef, useState } from "react";

const useAudioActions = () => {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>();
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);

  const initiateRecording = async () => {
    try {
      const audio_stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      const mediaRecorder = new MediaRecorder(audio_stream);
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          setAudioChunks((prevChunks) => [...prevChunks, event.data]);
        }
      };
    } catch (err) {
      console.error("Error in accessing media devices: ", err);
    }
  };

  return { initiateRecording };
};

export default useAudioActions;
