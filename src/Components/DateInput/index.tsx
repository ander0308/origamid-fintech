import React from "react";

const generalStyle = {
  fontSize: "1rem",
  color: "var(--gap-small)",
  padding: "var(--gap-small) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap-default)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-default)",
  fontWeight: 600,
  ...generalStyle
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle
};

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input
        style={inputStyle}
        id={label}
        name={label}
        type="date"
        {...props}
      />
    </div>
  );
};

export default DateInput;
