import { MotionBox } from "~/lib/framer";

interface ChatResponseWindowProps {
  prompt: string;
  respons: string;
}

const ChatResponseWindow: React.FC<ChatResponseWindowProps> = () => {
  return <MotionBox></MotionBox>;
};

export default ChatResponseWindow;
