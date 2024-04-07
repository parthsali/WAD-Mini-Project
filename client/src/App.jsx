import FileUpload from "./components/Upload";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">WAD Mini Project</h1>
      <FileUpload />
    </div>
  );
};

export default App;
