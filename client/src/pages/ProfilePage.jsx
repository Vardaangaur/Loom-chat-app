import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="h-screen bg-gradient-to-br from-primary/10 to-secondary/10 text-base-content pt-20">
      <div className="max-w-4xl mx-auto p-4 sm:p-8">
        <div className="bg-base-300 rounded-2xl p-8 shadow-lg flex flex-col lg:flex-row gap-8 transition-all duration-300 hover:shadow-xl">
          {/* Avatar Column */}
          <div className="flex flex-col items-center gap-4 lg:w-1/3">
            <div className="relative">
              <img
                src={selectedImg || authUser?.profilePic || "/avatar.png"}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-md transition-all duration-300"
              />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 bg-primary/80 hover:bg-primary/100
                  p-3 rounded-full cursor-pointer transition-transform duration-200
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                `}
              >
                <Camera className="w-6 h-6 text-base-100" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-base-content/50 text-center">
              {isUpdatingProfile
                ? "Uploading..."
                : "Click the camera icon to update your photo"}
            </p>
          </div>

          {/* Info Column */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            {/* Header */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold">Your Profile</h1>
              <p className="text-base-content/60 mt-1">
                Manage your account information and settings
              </p>
            </div>

            {/* Basic Info */}
            <div className="bg-base-200 rounded-xl p-6 shadow-inner flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="flex items-center gap-2 text-base-content/60">
                  <User className="w-5 h-5" /> Full Name
                </div>
                <p className="px-4 py-2.5 bg-base-300 rounded-lg border w-full sm:w-auto">
                  {authUser?.fullName}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="flex items-center gap-2 text-base-content/60">
                  <Mail className="w-5 h-5" /> Email Address
                </div>
                <p className="px-4 py-2.5 bg-base-300 rounded-lg border w-full sm:w-auto">
                  {authUser?.email}
                </p>
              </div>
            </div>

            {/* Account Info */}
            <div className="bg-base-200 rounded-xl p-6 shadow-inner">
              <h2 className="text-lg font-semibold mb-4">Account Details</h2>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between py-2 border-b border-base-content/20">
                  <span>Member Since</span>
                  <span>{authUser?.createdAt?.split("T")[0]}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Account Status</span>
                  <span className="text-success font-semibold">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
