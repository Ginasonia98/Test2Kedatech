import React from "react";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-500">Oops, terjadi kesalahan!</h1>
      <p className="text-lg text-gray-700">Maaf, halaman yang Anda cari tidak ditemukan.</p>
      <button
        className="mt-4 p-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={() => {
          window.location.href = "/http://localhost:3000/";
        }}
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default ErrorPage;
