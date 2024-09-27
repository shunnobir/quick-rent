"use client";

import React, { useMemo, useState } from "react";
import Select from "./select";

const TimeInput = ({ label }: { label?: string | React.JSX.Element }) => {
  const [hour, setHour] = useState(
    new Date().getHours().toString().padStart(2, "0"),
  );
  const [minute, setMinute] = useState(
    new Date().getMinutes().toString().padStart(2, "0"),
  );
  const [amPm, setAmPm] = useState("AM");

  const hours = useMemo(() => {
    const hours: string[] = [];
    for (let i = 1; i <= 12; ++i) hours.push(i.toString().padStart(2, "0"));
    return hours;
  }, []);
  const minutes = useMemo(() => {
    const minutes: string[] = [];
    for (let i = 1; i <= 59; ++i) minutes.push(i.toString().padStart(2, "0"));
    return minutes;
  }, []);
  const amPms = ["AM", "PM"];

  return (
    <div className="flex flex-col gap-1">
      {label ? <label>{label}</label> : null}
      <div className="grid grid-cols-3">
        <Select
          label=""
          options={hours}
          placeholder="Year"
          value={hour}
          onChangeValue={setHour}
          className="rounded-none rounded-l-lg"
        />
        <Select
          label=""
          options={minutes}
          placeholder="Minte"
          value={minute}
          onChangeValue={setMinute}
          className="rounded-none"
        />
        <Select
          label=""
          options={amPms}
          placeholder="AM"
          value={amPm}
          onChangeValue={setAmPm}
          className="rounded-none rounded-r-lg"
        />
      </div>
    </div>
  );
};

export default TimeInput;
