import { useRef, useState } from "react";
import { api } from "~/utils/api";
import { convertAudioFileToBase64 } from "~/utils/fileToBase64";
import player from "play-sound";

import { recorded_audio_base64 } from "./b64test";
import axios from "axios";

const useAudioActions = () => {
  const audioPlayer = player();

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>();
  const [userAudioChunks, setUserAudioChunks] = useState<Blob[]>([]);
  const [aiAudioChunks, setAiAudioChunks] = useState<Blob[]>([]);

  // const [audioUrl, setAudioUrl] = useState("");

  // const [audioBuffer, setAudioBuffer] = useState(null);
  // const [audioSource, setAudioSource] = useState(null);

  const transcribeAudioMut = api.openAI.transcribeAudio.useMutation();
  const chatCompletionsMut = api.openAI.chatCompletions.useMutation();

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
          setUserAudioChunks((prevChunks) => [...prevChunks, event.data]);
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
    if (userAudioChunks.length > 0) {
      const blob = new Blob(userAudioChunks, { type: "audio/mpeg" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "recorded_audio.mp3";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setUserAudioChunks([]);
    }
  };

  // const playAudio = (aiAudioBuffer: Buffer) => {
  //   const blob = new Blob([aiAudioBuffer], { type: "audio/mp3" });

  //   const objectURL = URL.createObjectURL(blob);

  //   const audioElem = new Audio();

  //   audioElem.src = objectURL;
  //   audioElem.play();
  // };

  const playAudio = (audioData: string) => {
    // Assuming audioData is a Base64 encoded string of the audio
    const audioBlob = new Blob([Buffer.from(audioData, "base64")], {
      type: "audio/mpeg",
    });
    const audioUrl = URL.createObjectURL(audioBlob);
    const audioElem = new Audio(audioUrl);
    audioElem
      .play()
      .catch((error) => console.error("Failed to play audio:", error));
  };

  const GenerateSpeech = async () => {
    if (userAudioChunks.length > 0) {
      const blob = new Blob(userAudioChunks, { type: "audio/mpeg" });
      const audioFile = new File([blob], "user_input.mp3", {
        type: "audio/mpeg",
      });
      const audioBase64 = await convertAudioFileToBase64(audioFile);

      const transcribedData = await transcribeAudioMut.mutateAsync({
        audioFileBase64: audioBase64 ?? "",
      });

      const completionsData = await chatCompletionsMut.mutateAsync({
        prompt: transcribedData.transcribed_response.text,
      });

      // const response = await axios.post<{
      //   audio: string;
      //   message: string;
      //   status: string;
      // }>("http://127.0.0.1:5000/ask-handbook", {
      //   query: transcribedData.transcribed_response.text,
      // });

      // playAudio(response.data?.audio);

      console.log({ transcribedData, completionsData });
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
