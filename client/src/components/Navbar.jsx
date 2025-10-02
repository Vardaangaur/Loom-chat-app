import { Link } from "react-router-dom";
import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="fixed top-0 z-40 w-full border-b border-base-300 bg-base-100/70 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2.5 hover:opacity-90 transition-all"
          >
            <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Loom
            </h1>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Settings Button */}
            <Link
              to="/settings"
              className="btn btn-sm btn-ghost gap-2 hover:bg-base-200 rounded-full"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser ? (
              <div className="dropdown dropdown-end">
                {/* Avatar Trigger */}
                <div
                  tabIndex={0}
                  role="button"
                  className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-base-300 hover:ring-primary cursor-pointer transition-all"
                >
                  <img
                    src={authUser.profilePic || "/avatar.png"}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Dropdown Menu */}
                <ul
                  tabIndex={0}
                  className="menu dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-lg w-48 border border-base-300"
                >
                  <li>
                    <Link to="/profile" className="gap-2">
                      <User className="w-4 h-4" /> Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="gap-2 text-error hover:text-error"
                    >
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="btn btn-sm btn-primary rounded-full px-4">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

