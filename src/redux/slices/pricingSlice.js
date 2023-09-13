import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pricingData: [
    {
      title: "BASIC",
      items: [
        { text: "Mencatat barang masuk" },
        { text: "Mencatat barang keluar" },
        { text: "Mencatat hasil keuntungan" },
      ],
      price: "Rp 1.000.000/month", // Add the price here
    },
    {
      title: "BUSINESS",
      items: [
        { text: "Mencatat barang masuk dan keluar" },
        { text: "Mencatat Keuntungan" },
        { text: "Dapat menganalisa hasil penjualan dengan CHART" },
        { text: "Support 7x24 Jam" },
      ],
      price: "Rp 3.000.000/month", // Add the price here
    },
    {
      title: "ENTREPRENEUR",
      items: [
        { text: "Mencatat barang masuk dan keluar" },
        { text: "Mencatat Keuntungan" },
        { text: "Dapat menganalisa hasil penjualan dengan CHART" },
        { text: "Support 7x24 Jam" },
        { text: "Export data ke Excel" },
        { text: "AI Prediksi penghasilan" },
      ],
      price: "Rp 5.000.000/month", // Add the price here
    },
  ],
};


const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {},
});

export default pricingSlice.reducer;