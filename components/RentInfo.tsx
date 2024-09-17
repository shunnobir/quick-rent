"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import Select from "@/components/select";
import { Calendar, Clock, MapPin } from "lucide-react";
import React, { useState } from "react";

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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-start">
        <div className="rounded-xl border border-solid border-slate-200 bg-background px-6 py-6 shadow-sm">
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
        </div>
        <div className="rounded-xl border border-solid border-slate-200 bg-background px-6 py-6 shadow-sm">
          <Input
            className="border-0 bg-slate-100"
            label={
              <div className="flex flex-row items-center gap-1">
                <Calendar size={16} strokeWidth={1.5} />
                <span className="text-sm">Pick-up Date</span>
              </div>
            }
            type="date"
            value={pickup.date}
            onChange={(e) =>
              setPickup((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </div>
        <div className="rounded-xl border border-solid border-slate-200 bg-background px-6 py-6 shadow-sm">
          <Input
            className="border-0 bg-slate-100"
            label={
              <div className="flex flex-row items-center gap-1">
                <Clock size={16} strokeWidth={1.5} />
                <span className="text-sm">Pick-up Time</span>
              </div>
            }
            type="time"
            value={pickup.time}
            onChange={(e) =>
              setPickup((prev) => ({ ...prev, time: e.target.value }))
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-start">
        <div className="rounded-xl border border-solid border-slate-200 bg-background px-6 py-6 shadow-sm">
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
        </div>
        <div className="rounded-xl border border-solid border-slate-200 bg-background px-6 py-6 shadow-sm">
          <Input
            className="border-0 bg-slate-100"
            label={
              <div className="flex flex-row items-center gap-1">
                <Calendar size={16} strokeWidth={1.5} />
                <span className="text-sm">Drop-off Date</span>
              </div>
            }
            type="date"
            value={dropOff.date}
            onChange={(e) =>
              setDropOff((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </div>
        <div className="rounded-xl border border-solid border-slate-200 bg-background px-6 py-6 shadow-sm">
          <Input
            className="border-0 bg-slate-100"
            label={
              <div className="flex flex-row items-center gap-1">
                <Clock size={16} strokeWidth={1.5} />
                <span className="text-sm">Drop-off Time</span>
              </div>
            }
            type="time"
            value={dropOff.time}
            onChange={(e) =>
              setDropOff((prev) => ({ ...prev, time: e.target.value }))
            }
          />
        </div>
      </div>
      <Button className="ml-auto min-w-40">Search cars</Button>
    </div>
  );
};

export default RentInfo;
