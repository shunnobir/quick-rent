"use client";

import Select from "@/components/select";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import DateInput from "./DatePicker";
import TimeInput from "./TimePicker";

const RentInfo = () => {
  const [pickup, setPickup] = useState({
    location: "",
    date: "",
    time: "",
  });

  const [dropOff, setDropOff] = useState({
    location: "",
    date: "",
    time: "",
  });

  return (
    <div className="flex flex-col flex-wrap gap-4">
      <div className="flex flex-col gap-2 rounded-lg bg-background p-5 shadow-sm">
        <h4 className="text-lg font-bold text-slate-700">Pick-up</h4>
        <div className="grid grid-cols-1 gap-4 sm:items-start lg:grid-cols-2">
          <Select
            label={
              <div className="flex flex-row items-center gap-1">
                <MapPin size={16} strokeWidth={1.5} />
                <span className="text-sm">Pick-up Location</span>
              </div>
            }
            placeholder="Select your location"
            value={pickup.location}
            onChangeValue={(option) =>
              setPickup((prev) => ({ ...prev, location: option }))
            }
            options={[
              "Broadway, New York City, USA",
              "Champs-Élysées, Paris, France",
              "Oxford Street, London, UK",
              "Fifth Avenue, New York City, USA",
              "La Rambla, Barcelona, Spain",
              "Peking Road, Hong Kong",
              "Rodeo Drive, Beverly Hills, USA",
              "Via Veneto, Rome, Italy",
              "Nevsky Prospect, St. Petersburg, Russia",
              "Hollywood Boulevard, Los Angeles, USA",
              "Times Square, New York City, USA",
              "Abbey Road, London, UK",
              "Avenue des Champs-Élysées, Paris, France",
              "Kurfürstendamm, Berlin, Germany",
              "Bond Street, London, UK",
            ]}
          />
          <DateInput
            label={
              <div className="flex flex-row items-center gap-1">
                <Calendar size={16} strokeWidth={1.5} />
                <span className="text-sm">Pick-up Date</span>
              </div>
            }
          />
          <TimeInput
            label={
              <div className="flex flex-row items-center gap-1">
                <Clock size={16} strokeWidth={1.5} />
                <span className="text-sm">Pick-up Time</span>
              </div>
            }
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-lg bg-background p-5 shadow-sm">
        <h4 className="text-lg font-bold text-slate-700">Drop-off</h4>
        <div className="grid grid-cols-1 gap-4 sm:items-start lg:grid-cols-2">
          <Select
            label={
              <div className="flex flex-row items-center gap-1">
                <MapPin size={16} strokeWidth={1.5} />
                <span className="text-sm">Drop-off Location</span>
              </div>
            }
            placeholder="Select your location"
            value={dropOff.location}
            onChangeValue={(option) =>
              setDropOff((prev) => ({ ...prev, location: option }))
            }
            options={[
              "Broadway, New York City, USA",
              "Champs-Élysées, Paris, France",
              "Oxford Street, London, UK",
              "Fifth Avenue, New York City, USA",
              "La Rambla, Barcelona, Spain",
              "Peking Road, Hong Kong",
              "Rodeo Drive, Beverly Hills, USA",
              "Via Veneto, Rome, Italy",
              "Nevsky Prospect, St. Petersburg, Russia",
              "Hollywood Boulevard, Los Angeles, USA",
              "Times Square, New York City, USA",
              "Abbey Road, London, UK",
              "Avenue des Champs-Élysées, Paris, France",
              "Kurfürstendamm, Berlin, Germany",
              "Bond Street, London, UK",
            ]}
          />
          <DateInput
            label={
              <div className="flex flex-row items-center gap-1">
                <Calendar size={16} strokeWidth={1.5} />
                <span className="text-sm">Drop-off Date</span>
              </div>
            }
          />
          <TimeInput
            label={
              <div className="flex flex-row items-center gap-1">
                <Clock size={16} strokeWidth={1.5} />
                <span className="text-sm">Drop-off Time</span>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default RentInfo;
