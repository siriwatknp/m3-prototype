import React, { useState } from "react";
import Slider from "@/components/Slider/Slider";

export default function SliderPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Slider Component</h1>
      <div className="max-w-md mx-auto">
        <Slider />
      </div>
    </div>
  );
}
