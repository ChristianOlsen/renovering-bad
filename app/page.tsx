import model3d from "@/public/3d-model.png";
import excel from "@/public/excel.png";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black p-4 sm:p-8">
      <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-md">
        <h1 className="text-2xl sm:text-4xl font-bold text-white text-center">
          Valhallveien 57 Bad Renovering
        </h1>
        <a
          href="https://app.sketchup.com/share/tc/europe/dVRTOAqn8ls?source=web&stoken=ioNRCBGs8EmGc96SXaTB4HWuN0ySvKZNUpywfq_B7tfgpVgvtEuu4fMMuT2WmM8w"
          className="px-6 sm:px-8 py-8 sm:py-12 bg-white text-black font-bold text-xl sm:text-3xl rounded-lg hover:bg-gray-100 transition transform hover:scale-105 active:scale-95 shadow-lg flex flex-col items-center justify-center text-center min-h-48 sm:min-h-56 gap-4"
        >
          <img
            src={model3d.src}
            alt="3D modell preview"
            className="w-full h-32 object-cover rounded"
          />
          3D modell
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/1BrCCW0B1utHs28P_rEVbSL8-JEt0V-wLZXWx1MIk8-w/edit?usp=sharing"
          className="px-6 sm:px-8 py-8 sm:py-12 bg-white text-black font-bold text-xl sm:text-3xl rounded-lg hover:bg-gray-100 transition transform hover:scale-105 active:scale-95 shadow-lg flex flex-col items-center justify-center text-center min-h-48 sm:min-h-56 gap-4"
        >
          <img
            src={excel.src}
            alt="Spreadsheet preview"
            className="w-32 h-32 object-cover rounded"
          />
          Fremdriftsplan og budsjett
        </a>
      </div>
    </main>
  );
}
