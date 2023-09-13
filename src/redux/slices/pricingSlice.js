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
    },
    {
      title: "BUSINESS",
      items: [
        { text: "Mencatat barang masuk dan keluar" },
        { text: "Mencatat Keuntungan" },
        { text: "Dapat menganalisa hasil penjualan dengan CHART" },
        { text: "Support 7x24 Jam" },
      ],
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
    },
  ],
};

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {},
});

export default pricingSlice.reducer;