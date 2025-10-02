import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

// Slimmed down to 10 themes
const themeColors = {
  light: ["#f0f0f0", "#3b82f6", "#22c55e", "#f3f4f6"],
  dark: ["#18181b", "#6366f1", "#14b8a6", "#27272a"],
  cupcake: ["#fef3c7", "#f472b6", "#fcd34d", "#fefce8"],
  bumblebee: ["#fef9c3", "#f59e0b", "#facc15", "#fef3c7"],
  dracula: ["#282a36", "#bd93f9", "#ff79c6", "#6272a4"],
  retro: ["#ffedd5", "#fb923c", "#fcd34d", "#fde68a"],
  aqua: ["#cffafe", "#06b6d4", "#22d3ee", "#e0f2fe"],
  corporate: ["#f3f4f6", "#3b82f6", "#10b981", "#e5e7eb"],
  synthwave: ["#f5f3ff", "#d946ef", "#f472b6", "#8b5cf6"],
  cyberpunk: ["#0f172a", "#f43f5e", "#0ea5e9", "#9333ea"],
};

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just testing themes.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-6xl space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">Appearance</h2>
        <p className="text-sm text-base-content/70">
          Personalize your chat with different themes
        </p>
      </div>

      {/* Theme Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6">
        {THEMES.filter(t => themeColors[t]).map((t) => {
          const isActive = theme === t;
          return (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`relative group flex flex-col items-center rounded-xl border transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none ${
                isActive
                  ? "border-primary ring-2 ring-primary"
                  : "border-base-300 hover:border-base-content/30"
              }`}
            >
              {/* Theme Preview Box */}
              <div className="relative w-full h-20 rounded-t-xl overflow-hidden" data-theme={t}>
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-px p-1">
                  {themeColors[t].map((color, i) => (
                    <div key={i} className="rounded-sm" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>

              {/* Theme Label */}
              <div className="w-full py-2 text-center">
                <span
                  className={`text-sm font-medium ${
                    isActive ? "text-primary" : "text-base-content"
                  }`}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </span>
              </div>

              {/* Active Badge */}
              {isActive && (
                <span className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full bg-primary text-white shadow-md">
                  Active
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Preview Section */}
      <h3 className="text-lg font-semibold">Preview</h3>
      <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
        <div className="p-4 bg-base-200">
          <div className="max-w-lg mx-auto">
            {/* Mock Chat UI */}
            <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
              {/* Chat Header */}
              <div className="px-4 py-3 border-b border-base-300 bg-base-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
                    J
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">John Doe</h3>
                    <p className="text-xs text-base-content/70">Online</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
                {PREVIEW_MESSAGES.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-xl p-3 shadow-sm ${
                        message.isSent ? "bg-primary text-primary-content" : "bg-base-200"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={`text-[10px] mt-1.5 ${
                          message.isSent ? "text-primary-content/70" : "text-base-content/70"
                        }`}
                      >
                        12:00 PM
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-base-300 bg-base-100">
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="input input-bordered flex-1 text-sm h-10"
                    placeholder="Type a message..."
                    value="This is a preview"
                    readOnly
                  />
                  <button className="btn btn-primary h-10 min-h-0">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
