"use client";

import React from "react";

export const CreateForm = ({ action, path }) => {
  return (
    <form action={action.bind(null, path)} className="flex flex-col gap-2">
      <label className="flex flex-col">
        Title
        <input
          type="text"
          name="title"
          className="border border-black"
          required
        />
      </label>

      <label className="flex flex-col">
        Content
        <textarea name="content" className="border border-black" />
      </label>

      <button type="submit">Create</button>
    </form>
  );
};
