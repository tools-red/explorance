import { createTRPCRouter, publicProcedure } from "../trpc";
import z from "zod";
import { openAI } from "~/lib/openAI";

// Defined custom Zod schema for the audioChunks input
const AudioChunksSchema = z.array(z.instanceof(Blob));

export const openAIRouter = createTRPCRouter({
  transcribeAudio: publicProcedure
    .input(
      z.object({
        audioChunks: AudioChunksSchema, // Custom AudioChunksSchema
      })
    )
    .query(async ({ input }) => {
      const { audioChunks } = input;
      if (audioChunks.length > 0) {
        const blob = new Blob(audioChunks, { type: "audio/mpeg" });
        const audioFile = new File([blob], "user_input.mp3", {
          type: "audio/mpeg",
        });
        const transcription = await openAI.audio.transcriptions.create({
          model: "whisper-1",
          file: audioFile,
        });

        return {
          transcribed_response: transcription,
        };
      }

      return {
        transcribed_response: null,
      };
    }),
});
