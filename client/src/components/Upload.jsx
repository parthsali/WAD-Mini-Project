import { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [fileActive, setFileActive] = useState(true);
  const [urlActive, setUrlActive] = useState(true);

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
    urlActive && setUrlActive(false);
  };

  const handleChangeUrl = (e) => {
    setFileUrl(e.target.value);
    fileActive && setFileActive(false);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        response.json();
        console.log(response.status);

        if (response.status === 200) {
          alert("File uploaded successfully");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="w-screen h-screen mt-10 flex items-center flex-col">
      <h2 className="text-2xl font-bold mb-4">Upload a file</h2>
      <div className="w-[90%] flex items-center justify-center flex-col  border border-gray-300 p-4 rounded-lg">
        <div className="w-[90%]">
          <input
            type="text"
            className="w-full border border-gray-300 p-2 mb-4 outline-none rounded-md dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter Link"
            value={fileUrl}
            onChange={handleChangeUrl}
            disabled={!urlActive}
          />
        </div>
        <div className="flex items-center justify-center w-[90%]">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                mp4, mkv, webm, avi, mov, wmv, mpeg, flv, 3gp, etc.
              </p>
            </div>
            <input
              onChange={handleChangeFile}
              id="dropzone-file"
              type="file"
              className="hidden"
              disabled={!fileActive}
            />
          </label>
        </div>

        {file && (
          <div className="w-[90%] mt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Selected file: {file ? file.name : "None"}
            </p>
          </div>
        )}

        <div className="flex items-center justify-center w-full">
          <button
            onClick={handleSubmit}
            className="px-8 py-2 mt-4 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
