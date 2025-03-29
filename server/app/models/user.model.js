const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["Admin", "Editor", "Viewer"], default: "Viewer" },
//     1️⃣ Admin Role (Admin)
// ✅ Full access to all features.
// ✅ Manage Users (Add, remove, or modify user roles).
// ✅ Create, update, and delete tasks for anyone.
// ✅ Manage Project Settings (change permissions, integrations).
// ✅ View & Generate Reports (analytics on task progress, performance).

// 2️⃣ Editor Role (Editor)
// ✅ Can create, update, and delete their own tasks.
// ✅ Can assign tasks to team members.
// ✅ Can edit task details (priority, deadlines, descriptions).
// ❌ Cannot manage users or change system settings.
// ❌ Cannot delete tasks created by other users.

// 3️⃣ Viewer Role (Viewer)
// ✅ Can view tasks assigned to them.
// ✅ Can comment on tasks & provide feedback.
// ❌ Cannot create, edit, or delete tasks.
// ❌ Cannot assign tasks or manage users.
  },
  { timestamps: true }
);

const User =  mongoose.model("User", UserSchema);

module.exports = User