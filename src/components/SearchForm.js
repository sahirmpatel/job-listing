import React from "react";
export default function SearchForm({ params, onParamChange }) {
  return (
    <form action="">
      <input
        value={params.description}
        name="description"
        onChange={onParamChange}
        placeholder="description"
        type="text"
      />
      <input
        value={params.location}
        name="location"
        onChange={onParamChange}
        placeholder="location"
        type="text"
      />
      <input
        onChange={onParamChange}
        value={params.full_time}
        name="full_time"
        id="full-time"
        label="Only Full Time"
        type="checkbox"
      />
    </form>
  );
}
