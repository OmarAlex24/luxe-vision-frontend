import { useState } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";

export const Location = () => {
  const initialForm = {
    city: "",
    state: "",
    country: "",
    address: "",
  };
  const [form, setForm] = useState({ ...initialForm });

  const handleProperty = (value: any, property: string) => {
    setForm({ ...form, [property]: value });
  };

  return (

    <div className="space-y-3">
      <h2 className="text-2xl font-bold">Location</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <FormControl>
          <FormLabel>City:</FormLabel>
          <Input
            value={form.city}
            onChange={(e) => handleProperty(e.target.value, "city")}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>State:</FormLabel>
          <Input
            value={form.state}
            onChange={(e) =>
              handleProperty(e.target.value, "state")
            }
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Country:</FormLabel>
          <Input
            value={form.country}
            onChange={(e) => handleProperty(e.target.value, "country")}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Address:</FormLabel>
          <Input
            value={form.address}
            onChange={(e) => handleProperty(e.target.value, "address")}
            required
          />
        </FormControl>
      </div>
    </div>
  );
};

export default Location;
