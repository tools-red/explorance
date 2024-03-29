import { useRef, useState } from "react";
import { api } from "~/utils/api";
import { convertAudioFileToBase64 } from "~/utils/fileToBase64";

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

  const endRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      console.log("Recording terminated");
    }
  };

  const exportAudio = () => {
    if (audioChunks.length > 0) {
      const blob = new Blob(audioChunks, { type: "audio/mpeg" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "recorded_audio.mp3";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setAudioChunks([]);
    }
  };
  const transcribeAudioMut = api.openAI.transcribeAudio.useMutation();
  const speechAudioMut = api.openAI.generateSpeechResponse.useMutation();

  const GenerateSpeech = async () => {
    if (audioChunks.length > 0) {
      const blob = new Blob(audioChunks, { type: "audio/mpeg" });
      const audioFile = new File([blob], "user_input.mp3", {
        type: "audio/mpeg",
      });
      const audioBase64 = await convertAudioFileToBase64(audioFile);
      const transcribedData = await transcribeAudioMut.mutateAsync({
        audioFileBase64: audioBase64 ?? "",
      });
      const speechResponse = await speechAudioMut.mutateAsync({
        audio_transcript: transcribedData.transcribed_response.text,
      });

      console.log({ speechResponse, transcribedData });
    }
  };
  return {
    initiateRecording,
    endRecording,
    isRecording,
    GenerateSpeech,
    exportAudio,
  };
};

export default useAudioActions;
