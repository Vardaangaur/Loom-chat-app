import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center p-12 sm:p-16 bg-base-200">
      <div className="max-w-md text-center space-y-8">
        {/* Icon Display */}
        <div className="flex justify-center">
          <div className="relative">
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-primary/20 flex items-center justify-center animate-bounce shadow-lg"
            >
              <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-base-content">Welcome to Loom!</h2>
          <p className="text-base sm:text-lg text-base-content/70">
            Select a conversation from the sidebar to start chatting. Your messages will appear here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;
