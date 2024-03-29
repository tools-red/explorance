import { createTRPCRouter, publicProcedure } from "../trpc";
import z from "zod";
import { openAI } from "~/lib/openAI";
import OpenAI, { toFile } from "openai";

export const openAIRouter = createTRPCRouter({
  transcribeAudio: publicProcedure
    .input(
      z.object({
        audioFileBase64: z.string(), // Accept the audio file data as a base64 string
      })
    )
    .mutation(async ({ input }) => {
      const { audioFileBase64 } = input;
      const buffer = Buffer.from(audioFileBase64, "base64"); // Convert the base64 string to a Buffer

      const uploadableFile = await toFile(buffer, "some.mp3");

      const transcription = await openAI.audio.transcriptions.create({
        model: "whisper-1",
        file: uploadableFile, // Pass the Buffer directly to OpenAI
      });

      return { transcribed_response: transcription };
    }),
  // generateSpeechResponse: publicProcedure
  //   .input(
  //     z.object({
  //       audio_transcript: z.string(),
  //     })
  //   )
  //   .mutation(async ({ input }) => {
  //     const { audio_transcript } = input;
  //     const speech_response = await openAI.audio.speech.create({
  //       model: "tts-1",
  //       voice: "alloy",
  //       input: audio_transcript,
  //       response_format: "mp3",
  //     });

  //     console.log({ speech_response_body: speech_response.body });

  //     const openAI_response_buffers = speech_response.body as unknown as {
  //         _readableState: {
  //           buffer: {
  //             head: {
  //               data: {
  //                 data: Buffer;
  //               };
  //             };
  //             tail: {
  //               data: {
  //                 data: Buffer;
  //               };
  //             };
  //           };
  //         };
  //       }

  //     return {
  //       speechResponseBase64: openAI_response_buffers._readableState.buffer.head.data.data
  //     }
  //   }),
});
