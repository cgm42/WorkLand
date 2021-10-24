import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  useEffect(() => {
    Promise.all([
      axios.get("/projects"),
      axios.get("/meetings")
    ])
      .then(all => {
        console.log(all[0].data);
        console.log(all[1].data);
      })
  }, []);
}