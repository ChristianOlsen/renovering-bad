export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex gap-4">
        <a
          href="https://app.sketchup.com/share/tc/europe/dVRTOAqn8ls?source=web&stoken=ioNRCBGs8EmGc96SXaTB4HWuN0ySvKZNUpywfq_B7tfgpVgvtEuu4fMMuT2WmM8w"
          className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
        >
          Button 1
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/1BrCCW0B1utHs28P_rEVbSL8-JEt0V-wLZXWx1MIk8-w/edit?usp=sharing"
          className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
        >
          Button 2
        </a>
      </div>
    </main>
  );
}
