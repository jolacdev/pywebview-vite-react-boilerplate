import fs from "fs";

const DESTINATION_PATH = "./frontend/src/types/pywebview/";
const FILE_NAME = "pywebview-api.d.ts";

fs.mkdirSync(DESTINATION_PATH, { recursive: true });
fs.renameSync(
  "./temp/pyflow/types/api/index.d.ts",
  `${DESTINATION_PATH}${FILE_NAME}`
);
